import { execSync } from 'child_process';
import fs from 'fs';

export function getStagedDiff(filename) {
  try {
    if (!fs.existsSync(filename)) {
      console.error(`❌ File not found: ${filename}`);
      process.exit(1);
    }

    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
      .split('\n')
      .filter(Boolean);

    if (!stagedFiles.includes(filename)) {
      console.error(`⚠️ File "${filename}" is not staged. Run "git add ${filename}" first.`);
      process.exit(1);
    }

    return execSync(`git diff --cached -- ${filename}`, { encoding: 'utf-8' });
  } catch (err) {
    console.error('❌ Failed to get staged diff:', err);
    process.exit(1);
  }
}


