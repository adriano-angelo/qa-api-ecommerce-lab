const express = require('express');
const app = express();
const data = require('./mock-products.json');

app.get('/products', (req, res) => {
  res.json(data);
});

app.get('/products/:id', (req, res) => {
  res.json(data[0]);
});

app.listen(3000, () => {
  console.log('Mock server running on port 3000');
});