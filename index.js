#!/usr/bin/env node

import { execSync } from 'child_process';
import readline from 'readline';
import { getStagedDiff } from './git.js';
import { buildPrompt } from './prompts.js';
import { askLLM } from './llm.js';

const filenames = process.argv.slice(2);

if (!filenames.length) {
  console.log('❌ Please specify one or more filenames.\nUsage: commentator <file1> <file2> ...');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {

    filenames.forEach((file) => {
      execSync(`git add ${file}`);
    });

    const diffs = filenames
      .map((file) => getStagedDiff(file))
      .filter((d) => d.trim().length > 0);

    if (!diffs.length) {
      console.log('⚠️ No diffs found for the given files.');
      process.exit(0);
    }


    const fullDiff = diffs.join('\n\n');
    const prompt = buildPrompt(fullDiff);
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
