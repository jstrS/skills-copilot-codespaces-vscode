// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/edit

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.get('/comments/:id', (req, res) => {
  res.send(`This is the comments page for comment ${req.params.id}`);
});

app.get('/comments/:id/edit', (req, res) => {
  res.send(`This is the edit page for comment ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Go to localhost:3000/comments in your browser
// Go to localhost:3000/comments/1 in your browser
// Go to localhost:3000/comments/1/edit in your browser