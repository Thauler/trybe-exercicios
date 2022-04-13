const { Patients, Plans, Surgeries } = require('../models');

const findAllPatientsPlans = async (_req, res, next) => {
  const result = await Patients.findAll({ include: { model: Plans, as: 'plan' } });

  if (!result.length) {
    return res.status(404).send({ message: 'No patients found' });
  }
  next();
};

const findAllPatientsSurgeries = async (_req, res, next) => {
  const result = Patients.findAll({
    include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } }
  })
  if (result.length === 0) {
    return res.status(404).send({ message: 'No patients found' });
  }
  next();
};

const findPatientsAndSurgeriesNoDoctor = async (_req, res, next) => {
  const result = Patients.findAll({
    include: {
      model: Surgeries,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] }
    }
  })

  if (result.length === 0) {
    return res.status(404).send({ message: 'No patients found' });
  }
  next();
};

module.exports = {
  findAllPatientsPlans,
  findAllPatientsSurgeries,
  findPatientsAndSurgeriesNoDoctor,
}