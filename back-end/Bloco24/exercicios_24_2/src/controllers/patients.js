const { Patients, Plans, Surgeries } = require('../models');

const findAllPatientsPlans = async (_req, res) => {
  try {
    const result = await Patients.findAll({ include: { model: Plans, as: 'plan' } });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findAllPatientsSurgeries = async (_req, res) => {
  try {
    const result = await Patients.findAll({
      include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } }
    })
    console.log(result);

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findPatientsAndSurgeriesNoDoctor = async (_req, res) => {
  try {
    const result = await Patients.findAll({
      include: {
        model: Surgeries,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] }
      }
    })

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const create = async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;
    const result = await Patients.create({ fullname, plan_id })

    return res.status(200).json(result.dataValues);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAllPatientsPlans,
  findAllPatientsSurgeries,
  create,
  findPatientsAndSurgeriesNoDoctor,
};