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

---
## Supported Models
Tested with:
codellama:instruct ✅ (recommended)

--- 

## Roadmap
 - Multi-file commit summary

 - Conventional commit linting

 -  VSCode extension (future)

 -  Add support for unstaged diff preview

 - Interactive mode to approve/edit the message

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
git add src/utils/math.js
commentator src/utils/math.js
```

### Requirements

- Node.js 18+

- codellama installed with Ollama

```bash
ollama run codellama:instruct
```
---

MIT — use it freely, improve it, and star it if you like it ⭐