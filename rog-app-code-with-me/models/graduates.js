'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class graduates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models['students']);
      this.belongsToMany(models['programs'], {
        through: models['graduates_programs'],
        otherKey: 'graduateId',
      });
    }
  }

  graduates.init({
    rogNo: DataTypes.NUMBER,
    studentId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'graduates',
    updatedAt: false,
    createdAt: false,
  });
  return graduates;
};