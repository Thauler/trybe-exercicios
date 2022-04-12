const { Book } = require('../models');

const findByAuthor = async (req, res, next) => {
  const { author } = req.params;
  const result = await Book.findByPk(author);

  if (!result || result.length === 0) {
    return res.status(404).json({ message: 'Author not found' });
  }

  next();
};

module.exports = {
  findByAuthor,
}