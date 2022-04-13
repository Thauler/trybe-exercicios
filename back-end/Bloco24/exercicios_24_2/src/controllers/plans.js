const { Patients, Plans } = require('../models');

const findAllPlans = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Plans.findAll({
      where: { plan_id: id },
      include: [{ model: Patients, as: 'patients' }]
    })
console.log(result);
    return res.status(200).json(result.dataValues);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAllPlans,
};