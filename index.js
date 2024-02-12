// server.js
const express = require('express');
const cors = require('cors');
const productsData = require('./productsData'); // Adjust the path accordingly

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.json(productsData);
});

// You can also use the products array within server.js if needed
console.log('Products available in server:', productsData);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
