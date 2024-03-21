const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// Use cors middleware with specific origin
app.use(cors({
  origin: 'http://127.0.0.1:5501/index.html'
}));

// Serve JSON server
app.use('/api', middlewares, router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
