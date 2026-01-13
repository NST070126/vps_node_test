const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World depuis Railway !');
});

app.listen(port, () => {
  console.log(`Serveur sur port ${port}`);
});

console.log('hello-railway-080126');