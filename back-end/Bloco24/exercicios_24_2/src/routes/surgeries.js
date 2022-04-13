const router = require('express').Router();

const surgeriesController = require('../controllers/surgeries');
const surgeriesMiddleware = require('../middlewares/surgeries');

router.get('/:name',
surgeriesMiddleware.findDoctorSurgeries,
surgeriesController.findDoctorSurgeries);

module.exports = router;