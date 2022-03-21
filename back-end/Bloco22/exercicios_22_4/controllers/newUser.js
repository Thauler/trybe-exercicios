module.exports = (req, res, next) => {
  const { name, age } = req.params;
  return res.status(201).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
}