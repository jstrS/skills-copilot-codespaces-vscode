// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route to get the comments
app.get('/comment', (req, res) => {
  res.send('I am a comment');
});

// Start the web server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});