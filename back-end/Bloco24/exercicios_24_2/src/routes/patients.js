const router = require('express').Router();

const patientsController = require('../controllers/patients');
const patientsMiddleware = require('../middlewares/patients');

router.get('/',
patientsMiddleware.findAllPatientsPlans,
patientsController.findAllPatientsPlans);

router.get('/surgeries',
patientsMiddleware.findAllPatientsSurgeries,
patientsController.findAllPatientsSurgeries);

router.get('/surgeries/nodoctor',
patientsMiddleware.findPatientsAndSurgeriesNoDoctor,
patientsController.findPatientsAndSurgeriesNoDoctor);

router.post('/', patientsController.create);

module.exports = router;