const { Book } = require('../models');

const findByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const result = await Book.findByPk(author);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findByAuthor,
}