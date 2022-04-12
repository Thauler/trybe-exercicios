const express = require('express');

const booksRoutes = require('./src/routes/books')

const app = express();

app.use(express.json());

app.use('/books', booksRoutes);

app.use('/author', booksRoutes);

app.listen(3000, () => {
  console.log(`Escutando na porta 3000`);
});

module.exports = app;