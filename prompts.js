export function buildPrompt(diff) {
  return `
  You are a Git commit message generator trained in Conventional Commits.
Your task is to analyze the provided diff and generate a single-line Git commit message that:

1- Strictly follows the Conventional Commits format (e.g., feat(scope):, fix(scope):, chore:).

2- Is exactly one line with no explanations or commentary.

3- Uses imperative mood and present tense (e.g., “add”, not “added” or “adds”).

4- Is concise but descriptive, summarizing the core purpose of all changes.

5- Includes a scope when identifiable from the code.

6- Avoids file names, line numbers, or vague context.

7- Does NOT mention the word "diff" or reference the structure of the code diff.

9- If multiple changes are present, summarize them under a unified purpose.

10- Do NOT assume functionality not directly shown.

11- Do NOT guess domain context from variable names.
 
Respond with only the commit message—no punctuation before or after, no code blocks.
${diff}

Commit message:`;
}

