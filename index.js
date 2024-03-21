const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// Serve JSON server
app.use('/api', middlewares, router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
