const { tokenGen } = require("../utils/tokenGenerator");

function validateUsername(req, res, next) {
  const { username } = req.body;

  if (username.length < 3)
  return res.status(400).json({ message: 'invalid data' });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const emaVali = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}\.com$/; 
  if (!emaVali.test(email))
    return res.status(400).json({ message: 'invalid data' });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const passRegEx = /\d{4,8}/ 
  if (!passRegEx.test(password)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || tokenGen !== token)
    return res.status(401).json({ message: 'invalid token' });
  
    next();
  };

  module.exports = {
    validateToken,
    validateUsername,
    validateEmail,
    validatePassword,
  };