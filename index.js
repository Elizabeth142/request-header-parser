// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS to allow FCC to test the API
app.use(cors({ optionsSuccessStatus: 200 }));

// Homepage (optional)
app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice');
});

// API endpoint
app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ip,
    language: language,
    software: software,
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
