# Commentator

![](Commentator.png)
**Commentator** is a offline, AI-powered CLI that generates accurate, helpful Git commit messages based on your **staged changes** — using a local LLM Code Llama (codellama:instruct) via [Ollama](https://ollama.com).

---

## Features

- **Local AI** — no cloud, no Copilot, no OpenAI tokens
- Understands staged `git diff`s and summarizes your intent
- Supports single-file diffs (more accurate than Copilot's guesses)
- **100% offline** — nothing leaves your machine
- Super fast — built as a minimal Node.js CLI tool
- Works seamlessly with any Git repo

---

## Why Commentator is good ?

> **Commentator reads the actual Git diff** — so it **knows exactly what changed**, and explains it accordingly.

| Feature                  | GitHub Copilot | Commentator |
|--------------------------|----------------|-------------|
| Works offline            | ❌              | ✅           |
| Local model control      | ❌              | ✅           |
| Privacy friendly         | ❌              | ✅           |
| Explain multiple changes | ❌              | ✅           |
| Custom prompts/models    | ❌              | ✅           |


Also:

✅ Generates commit messages in Conventional Commits format (e.g., feat(auth): ...)


✅ Supports multiple staged files

✅ Auto-adds files and suggests the final commit command

✅ Interactive yes/no prompt before committing

✅ Terminal-native and super fast


---
## Supported Models
Tested with:
- codellama:instruct ✅ (recommended)
 
---

## Usage

### 1. Install with Node.js (18+)

```bash
git clone https://github.com/you/commentator.git
cd commentator
npm install
npm link
```

Then use it inside any repo

```bash
# Single file
Commentator path/to/changed-file.js

# Multiple files
Commentator path/to/file1.js path/to/file2.ts

# If the diff exists, you'll see:
# ✅ commit message generated!
# git commit -m "feat(api): add user verification on login"

# Then it asks:
# 👉 Commit this? (y/n)

```


### How It Works?
- Takes staged file paths from the CLI.

- Fetches their git diff content.

- Builds a custom prompt based on your code changes.

- Sends the prompt to a local LLM (like CodeLlama).

- Returns a one-line, Conventional Commit message.

- Auto-adds files and suggests the exact git commit -m ... command.

### Requirements

- Node.js 18+

- codellama installed with Ollama

```bash
ollama run codellama:instruct
```
---

### Coming Soon
- VSCode extension
- Breaking change detection
- Auto scope detection
- Interactive CLI enhancements


MIT — use it freely, improve it, and star it if you like it ⭐
