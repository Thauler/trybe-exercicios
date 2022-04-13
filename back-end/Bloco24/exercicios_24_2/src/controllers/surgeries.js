const { Patients, Surgeries } = require('../models');

const findDoctorSurgeries = (req, res) => {
  try {
    const { name } = req.param;
    const result = Surgeries.findAll({
      where: { doctor: name },
      include: [{ model: Patients, as: 'patients', through: { attributes: [] } }]
    });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  findDoctorSurgeries,
};