const characters = require('../utils/fs-simpsons');

const getChar = async (req, res, next) => {
  const simpsons = await characters.getSimpsons();
  return res.status(200).json(simpsons);
}

const getCharById = async (req, res) => {
  const simpsons = await characters.getSimpsons();
  const { id } = req.params

  const simpson = simpsons.find((s) => s.id === id);

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  return res.status(202).json(simpson);
}

const newChar = async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await characters.getSimpsons();

  if (simpsons.filter((s) => s.id.includes(id))) {
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });

  await characters.setSimpsons(simpsons);

  return res.status(204).end();
}

module.exports = { getChar, getCharById, newChar };