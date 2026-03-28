const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ProjectX App Running');
});

app.get('/orders', (req, res) => {
  res.json({ message: "Orders API working" });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});