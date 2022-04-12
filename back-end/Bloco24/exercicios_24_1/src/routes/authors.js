const authorsController = require('../controllers/authors');
const authorsMiddleware = require('../middlewares/authors');

const router = require('express').Router();

router.get('/:author', authorsMiddleware.findByAuthor, authorsController.findByAuthor);

module.exports = router;