const { Book } = require('../models');

const findByPk = async (req, res, next) => {
  const { id } = req.params;
  const result = await Book.findByPk(id);

  if (!result || result.length === 0) {
    return res.status(404).json({ message: 'Book not found' });
  }

  next();
};

const authNewTitle = async (req, res, next) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (typeof title !== 'string') return res.status(418).json({ message: "I'm a teapot" });
  if (title.length < 5) {
    return res.status(422).json({ message: '"title" characters must be greater than 5' });
  }

  next();
};

const authNewAuthor = async (req, res, next) => {
  const { author } = req.body;

  if (!author) return res.status(400).json({ message: '"author is required"' });
  if (typeof author !== 'string') return res.status(418).json({ message: "I'm a teapot" });
  if (author.length < 5) {
    return res.status(422).json({ message: '"author" characters must be greater than 5' });
  }

  next();
};

const authQuantity = async (req, res, next) => {
  const { pageQuantity } = req.body;

  if (!pageQuantity && pageQuantity !== 0) {
    return res.status(400).json({ message: '"pageQuantity"' });
  }
  if (typeof pageQuantity !== 'number') return res.status(418).json({ message: 'I\'m\ a teapot' });
  if (pageQuantity <= 0) {
    return res.status(422).json({ message: '"pageQuantity" number must be greater than 0' });
  }

next();
};

module.exports = {
  findByPk,
  authNewTitle,
  authNewAuthor,
  authQuantity
}