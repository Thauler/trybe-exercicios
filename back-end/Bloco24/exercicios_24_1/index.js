const express = require('express');

const booksRoutes = require('./routes/books')

const app = express();

app.use(express.json());

app.use('/books', booksRoutes);

app.listen(3000, () => {
  console.log(`Escutando na porta 3000`);
});