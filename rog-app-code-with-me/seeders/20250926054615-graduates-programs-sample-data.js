'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    
    await queryInterface.bulkInsert('graduates_programs', [
      {
        graduateId: 1,
        programId: 1,
      },
      {
        graduateId: 2,
        programId: 6,
      },
      {
        graduateId: 3,
        programId: 8,
      },
      {
        graduateId: 4,
        programId: 8,
      },
      {
        graduateId: 5,
        programId: 6,
      },
      {
        graduateId: 6,
        programId: 8,
      },
      {
        graduateId: 7,
        programId: 8,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('graduates_programs', null, {});
  }
};
