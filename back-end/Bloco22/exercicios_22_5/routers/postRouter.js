const router = require('express').Router();

const posts = [
  { id: 1, user: 'Thauler', post: 'Bom dia à todos'},
  { id: 2, user: 'Thauler Mayrink', post: 'O destino é inexoravel' },
  { id: 3, user: 'Thaulitrada', post: 'Wyrd Bið Ful Aræd' },
]

router.get('/', (_req, res) => res.status(200).json({ posts }));

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post)
    return next({ statusCode: 404, message: 'post not found' });

    res.status(200).json(post);
});

module.exports = router;