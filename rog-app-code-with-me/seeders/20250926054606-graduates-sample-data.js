'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('graduates', [
      {
        rogNo: 1,
        studentId: 1,
      },
      {
        rogNo: 2,
        studentId: 1,
      },
      {
        rogNo: 3,
        studentId: 1,
      },
      {
        rogNo: 1,
        studentId: 2,
      },
      {
        rogNo: 2,
        studentId: 2,
      },
      {
        rogNo: 1,
        studentId: 3,
      },
      {
        rogNo: 1,
        studentId: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('graduates', null);
  },
};
