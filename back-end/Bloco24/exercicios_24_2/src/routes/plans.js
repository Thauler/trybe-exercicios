const router = require('express').Router();

const plansController = require('../controllers/plans');
const plansMiddleware = require('../middlewares/plans');

router.get('/:id',
plansMiddleware.findAllPlans,
plansController.findAllPlans);


module.exports = router;