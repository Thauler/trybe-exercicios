const { Patients, Plans } = require('../models');

const findAllPlans = async (req, res, next) => {
  const { id } = req.params;
  const result = Plans.findAll({
    where: { plan_id: id },
    include: [{ model: Patients, as: 'patients' }]
  });

  if (!result.length) {
    return res.status(404).send({ message: 'No plan found' });
  }
  next();
};

module.exports = {
  findAllPlans,
};