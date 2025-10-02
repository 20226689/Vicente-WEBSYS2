'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('graduates_programs', {
        graduateId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'graduates',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        programId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'programs',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      })
      .then(() => {
        return queryInterface.addConstraint('graduates_programs', {
          fields: ['graduateId', 'programId'],
          type: 'primary key',
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('graduates_programs');
  },
};