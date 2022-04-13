const { Patients, Surgeries } = require('../models');

const findDoctorSurgeries = async (req, res, next) => {
  const { name } = req.params;
  const result = Surgeries.findAll({
    where: { doctor: name },
    include: [{ model: Patients, as: 'patients', through: { attributes: [] } }]
  });

  if (result === null) {
    return res.status(404).send({ message: 'No plan found' });
  }
  next();
};

module.exports = {
  findDoctorSurgeries,
}