const booksController = require('../controllers/books');
const booksMiddleware = require('../middlewares/books');

const router = require('express').Router();

router.get('/', booksController.findAll);

router.get('/:id', booksMiddleware.findByPk, booksController.findByPk);

router.post('/',
booksMiddleware.authNewTitle,
booksMiddleware.authNewAuthor,
booksMiddleware.authQuantity,
booksController.create);

router.put('/:id',
booksMiddleware.authNewTitle,
booksMiddleware.authNewAuthor,
booksMiddleware.authQuantity,
booksController.update);

router.delete('/:id', booksController.destroy);

module.exports = router;