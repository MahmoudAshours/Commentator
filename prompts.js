export function buildPrompt(diff) {
  return `You are a helpful assistant who writes Git commit messages.

You MUST response in just ONE LINE.

Below is the diff of a staged file. Please generate a concise conventional commit message (e.g., feat:, fix:, chore:, etc.) that describes all changes together.

${diff}

Commit message:`;
}

