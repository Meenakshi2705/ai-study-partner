# AI Study Partner 📚

**Privacy-first academic summarization using local LLMs (Mistral/Llama3)**  
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE) 
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/your-repo)


## 🚀 Features
- **100% Offline** - No API calls, no data leaks
- **Academic-Optimized** - Special prompts for technical texts
- **Model Flexibility** - Switch between Mistral/Llama3/Gemma
- **PDF Support** - Extract text from research papers

## ⚙️ Tech Stack
| Component | Technology |
|-----------|------------|
| Backend | Node.js, Ollama, Express.js |
| Frontend | HTML, CSS, JavaScript, React, TailwindCSS |
| NLP | Mistral-7B, TextRank (hybrid) |

## 📦 Installation
```bash
# 1. Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 2. Download model
ollama pull mistral

# 3. Set up project
git clone https://github.com/your-repo.git
cd ai-study-partner
npm run setup  # Installs both frontend/backend deps
