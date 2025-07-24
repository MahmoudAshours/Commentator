#!/usr/bin/env node

import { getStagedDiff } from './git.js';
import { buildPrompt } from './prompts.js';
import { askLLM } from './llm.js';

const filename = process.argv[2];

if (!filename) {
  console.log('❌ Please specify a staged filename.\nUsage: commit-gen <filename>');
  process.exit(1);
}

async function main() {
  const diff = getStagedDiff(filename);
  if (!diff.trim()) {
    console.log('⚠️ No diff found for that file.');
    return;
  }

  const prompt = buildPrompt(diff);
  const message = await askLLM(prompt);
  console.log(message.trim());
}

main();


