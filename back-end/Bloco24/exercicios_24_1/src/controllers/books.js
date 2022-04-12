const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const result = await Book.findAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByPk(id);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const result = await Book.create({
      title,
      author,
      pageQuantity
    })

    return res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;
    const bookById = await Book.findByPk(id);
    await Book.update(
      {
      title,
      author,
      pageQuantity
    },
    { where: { id } },
    );

    return res.status(200).json(bookById);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByPk(id);
    await result.destroy()

    return res.status(200).json(result)
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  destroy,
}