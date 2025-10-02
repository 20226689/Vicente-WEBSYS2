'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class programs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models['graduates'], {
        through: models['graduates_programs'],
        otherKey: 'programId',
      });
    }
  }

  programs.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'programs',
    updatedAt: false,
    createdAt: false,
  });
  return programs;
};