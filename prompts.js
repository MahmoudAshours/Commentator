export function buildPrompt(diff) {
  return `
  You are a helpful assistant that writes Git commit messages.

Your job is to analyze the provided diff and return a single-line, concise Git commit message using Conventional Commits format ONLY (e.g., feat:, fix:, chore:).

Instructions:

- Your response must be EXACTLY one line—no extra explanations.

- The commit message must summarize all changes in the diff.

- Be concise but descriptive.

- Prefer present tense and active voice.

- Use imperative mood (e.g., "fix", not "fixes" or "fixed").

- Include a scope (e.g., feat(api):, fix(auth):) when appropriate.

- DO NOT include the word "diff" in your response.

- DO NOT mention files or line numbers.

- DO NOT guess about unrelated context—focus only on the actual changes in the diff.

Example Output:
fix(auth): handle token expiration properly during refresh

Now generate a message for this diff:

${diff}

Commit message:`;
}

