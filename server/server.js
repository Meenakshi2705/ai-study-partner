require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Only needed for Node <18

// 1. Initialize Express app
const app = express();

// 2. Configure CORS (Add this right after app initialization)
const corsOptions = {
  origin: 'http://localhost:3000', // Your React app's URL
  methods: ['POST', 'GET'],       // Allowed HTTP methods
  allowedHeaders: ['Content-Type'],// Allowed headers
  optionsSuccessStatus: 200        // Legacy browsers
};

// 3. Add middleware (Updated with CORS config)
app.use(cors(corsOptions));  // ← Replaces the simple app.use(cors())
app.use(express.json());

// 4. Add your summarize endpoint
app.post('/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim().split(/\s+/).length < 10) {
      return res.status(400).json({ error: "Minimum 10 words required" });
    }

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "mistral",
        prompt: `[INST] Summarize this in 3 sentences: ${text} [/INST]`,
        stream: false,
        options: { temperature: 0.3 }
      })
    });

    const data = await response.json();
    res.json({ summary: data.response.trim() });
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Summarization failed" });
  }
});

// 5. Health check endpoint (Recommended addition)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    ollama: 'connected' 
  });
});

// 6. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Ollama endpoint: http://localhost:11434`);
  console.log(`Allowed CORS origin: http://localhost:3000`);
});