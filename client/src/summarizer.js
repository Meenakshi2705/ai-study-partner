import React, { useState } from 'react';
import axios from 'axios';

const Summarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/summarize', 
        { text },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error:", error);
      alert("Summarization failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summarizer">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize (min 10 words)..."
        rows={6}
      />
      <button onClick={handleSummarize} disabled={loading || text.split(' ').length < 10}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
      {summary && (
        <div className="summary-result">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summarizer;