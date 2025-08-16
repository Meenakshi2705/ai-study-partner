# AI Study Partner 📚

**Privacy-first academic summarization using local LLMs (Mistral / Llama 3)**  

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Meenakshi2705/ai-study-partner)

---

## 🚀 Features
- 🔒 **100% Offline** – No API calls, no data leaks  
- 📖 **Academic-Optimized** – Summaries tuned for research & technical texts  
- 🔄 **Model Flexibility** – Plug-and-play with Mistral, Llama 3, or Gemma  
- 📑 **PDF Support** – Upload research papers & auto-extract content  

---

## ⚙️ Tech Stack

| Layer      | Technology |
|------------|------------|
| **Backend** | Node.js, Express.js, Ollama |
| **Frontend** | React, TailwindCSS, HTML, CSS, JavaScript |
| **NLP / AI** | Mistral-7B, TextRank (hybrid approach) |

---

## 📦 Installation & Setup

```bash
# 1. Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 2. Download the model
ollama pull mistral

# 3. Clone the repo
git clone https://github.com/Meenakshi2705/ai-study-partner.git
cd ai-study-partner

# 4. Install dependencies (frontend + backend)
npm run setup
