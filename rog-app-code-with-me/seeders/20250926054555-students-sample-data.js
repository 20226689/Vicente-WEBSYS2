'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        firstName: 'Juan',
        lastName: 'Tama',
      },
      {
        firstName: 'Juana',
        lastName: 'Mali',
      },
      {
        firstName: 'Gabbo',
        lastName: 'Dator',
      },
      {
        firstName: 'Edgardo',
        lastName: 'Hipon',
      },
      {
        firstName: 'Orlulu',
        lastName: 'Regachy',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null);
  },
};
