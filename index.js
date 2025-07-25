#!/usr/bin/env node

import { execSync } from 'child_process';
import readline from 'readline';
import { getStagedDiff } from './git.js';
import { buildPrompt } from './prompts.js';
import { askLLM } from './llm.js';

const filename = process.argv[2];

if (!filename) {
  console.log('❌ Please specify a filename.\nUsage: commentator <filename>');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    execSync(`git add ${filename}`);

    const diff = getStagedDiff(filename);
    if (!diff.trim()) {
      console.log('⚠️ No diff found for that file.');
      process.exit(0);
    }

    const prompt = buildPrompt(diff);
    const message = (await askLLM(prompt)).trim();

    const cmd = `git commit -m "${message}"`;

    console.log(`\n💡 Suggested command:\n${cmd}\n`);

    rl.question('🟢 Do you want to run this commit? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        execSync(cmd, { stdio: 'inherit' });
        console.log('✅ Commit successful!');
      } else {
        console.log('❌ Commit aborted.');
      }
      rl.close();
    });
  } catch (err) {
    console.error('❌ Error:', err.message);
    rl.close();
    process.exit(1);
  }
}

main();
