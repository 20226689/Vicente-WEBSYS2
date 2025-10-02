'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class graduates_programs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  graduates_programs.init({
    graduateId: DataTypes.NUMBER,
    programId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'graduates_programs',
    updatedAt: false,
    createdAt: false,
  });
  return graduates_programs;
};