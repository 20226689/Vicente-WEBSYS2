'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('programs', [
      {
        id: 1,
        code: 'DMD',
        name: 'DOCTOR OF DENTAL MEDICINE',
      },
      {
        id: 2,
        code: 'DENTECH',
        name: 'DENTAL TECHNICIAN',
      },
      {
        id: 3,
        code: 'BA',
        name: 'BACHELOR OF ARTS',
      },
      {
        id: 4,
        code: 'PREDEN',
        name: 'CERTIFICATE IN PRE-DENTISTRY',
      },
      {
        id: 5,
        code: 'BSBIOL',
        name: 'BACHELOR OF SCIENCE IN BIOLOGY',
      },
      {
        id: 6,
        code: 'BSC',
        name: 'BACHELOR OF SCIENCE IN COMMERCE',
      },
      {
        id: 7,
        code: 'BSAC',
        name: 'BACHELOR OF SCIENCE IN ACCOUNTANCY',
      },
      {
        id: 8,
        code: 'BSCS',
        name: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
      },
      {
        id: 9,
        code: 'BSSA',
        name: 'BACHELOR OF SCIENCE IN SECRETARIAL ADMINISTRATION',
      },
      {
        id: 10,
        code: 'JSC',
        name: 'CERTIFICATION IN JUNIOR SECRETARIAL',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('programs', {
      id: {
        [Sequelize.Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    });
  },
};
