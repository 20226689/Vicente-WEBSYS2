const models = require('../../models');

async function getAllGraduates(req, res) {
  const graduates = await models['graduates'].findAll();

  res.send(graduates);
}

async function getAllGraduatesWithStudentInfo(req, res) {
  const graduates = await models['graduates'].findAll({
    include: [models['students']],
  });

  res.send(graduates);
}

async function getAllGraduatesWithProgramData(req, res) {
  const graduates = await models['graduates'].findAll({
    include: [models['programs']],
  });

  res.send(graduates);
}

module.exports = {
  getAllGraduates,
  getAllGraduatesWithStudentInfo,
  getAllGraduatesWithProgramData,
};