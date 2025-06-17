# Request Header Parser Microservice

This is a simple Express-based microservice built for the [freeCodeCamp](https://www.freecodecamp.org) Back End Development and APIs certification.

## 🌐 Live Demo

🔗 [https://request-header-parser-l1s8.onrender.com/api/whoami](https://request-header-parser-l1s8.onrender.com/api/whoami)

## 📦 Features

- Returns the client's IP address
- Returns the preferred language
- Returns software information (from User-Agent header)

## 🛠 Tech Stack

- Node.js
- Express.js
- Render (for deployment)

## 🚀 Endpoint

### `GET /api/whoami`

Returns a JSON object like:

```json
{
  "ipaddress": "103.102.12.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
}
