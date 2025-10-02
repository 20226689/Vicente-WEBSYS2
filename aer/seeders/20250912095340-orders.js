'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        "id": 1,
        "date": "2024-01-10",
        "status": "Completed",
        "totalAmount": 155.50
      },
      {
        "id": 2,
        "date": "2024-01-11",
        "status": "Processing",
        "totalAmount": 78.25
      },
      {
        "id": 3,
        "date": "2024-01-12",
        "status": "Shipped",
        "totalAmount": 320.00
      },
      {
        "id": 4,
        "date": "2024-01-13",
        "status": "Cancelled",
        "totalAmount": 45.99
      },
      {
        "id": 5,
        "date": "2024-01-14",
        "status": "Completed",
        "totalAmount": 99.00
      },
      {
        "id": 6,
        "date": "2024-01-15",
        "status": "Completed",
        "totalAmount": 550.75
      },
      {
        "id": 7,
        "date": "2024-01-16",
        "status": "Shipped",
        "totalAmount": 12.50
      },
      {
        "id": 8,
        "date": "2024-01-17",
        "status": "Processing",
        "totalAmount": 89.99
      },
      {
        "id": 9,
        "date": "2024-01-18",
        "status": "Completed",
        "totalAmount": 425.00
      },
      {
        "id": 10,
        "date": "2024-01-19",
        "status": "Shipped",
        "totalAmount": 7.50
      },
      {
        "id": 11,
        "date": "2024-01-20",
        "status": "Completed",
        "totalAmount": 210.30
      },
      {
        "id": 12,
        "date": "2024-01-21",
        "status": "Processing",
        "totalAmount": 60.00
      },
      {
        "id": 13,
        "date": "2024-01-22",
        "status": "Shipped",
        "totalAmount": 199.99
      },
      {
        "id": 14,
        "date": "2024-01-23",
        "status": "Completed",
        "totalAmount": 120.50
      },
      {
        "id": 15,
        "date": "2024-01-24",
        "status": "Cancelled",
        "totalAmount": 33.75
      },
      {
        "id": 16,
        "date": "2024-01-25",
        "status": "Completed",
        "totalAmount": 850.00
      },
      {
        "id": 17,
        "date": "2024-01-26",
        "status": "Processing",
        "totalAmount": 14.99
      },
      {
        "id": 18,
        "date": "2024-01-27",
        "status": "Shipped",
        "totalAmount": 275.50
      },
      {
        "id": 19,
        "date": "2024-01-28",
        "status": "Completed",
        "totalAmount": 50.00
      },
      {
        "id": 20,
        "date": "2024-01-29",
        "status": "Completed",
        "totalAmount": 640.25
      },
      {
        "id": 21,
        "date": "2024-01-30",
        "status": "Shipped",
        "totalAmount": 18.00
      },
      {
        "id": 22,
        "date": "2024-01-31",
        "status": "Processing",
        "totalAmount": 112.50
      },
      {
        "id": 23,
        "date": "2024-02-01",
        "status": "Completed",
        "totalAmount": 499.00
      },
      {
        "id": 24,
        "date": "2024-02-02",
        "status": "Cancelled",
        "totalAmount": 22.00
      },
      {
        "id": 25,
        "date": "2024-02-03",
        "status": "Shipped",
        "totalAmount": 79.99
      },
      {
        "id": 26,
        "date": "2024-02-04",
        "status": "Completed",
        "totalAmount": 80.50
      },
      {
        "id": 27,
        "date": "2024-02-05",
        "status": "Processing",
        "totalAmount": 950.00
      },
      {
        "id": 28,
        "date": "2024-02-06",
        "status": "Completed",
        "totalAmount": 21.00
      },
      {
        "id": 29,
        "date": "2024-02-07",
        "status": "Shipped",
        "totalAmount": 125.75
      },
      {
        "id": 30,
        "date": "2024-02-08",
        "status": "Completed",
        "totalAmount": 35.00
      },
      {
        "id": 31,
        "date": "2024-02-09",
        "status": "Completed",
        "totalAmount": 178.50
      },
      {
        "id": 32,
        "date": "2024-02-10",
        "status": "Shipped",
        "totalAmount": 65.99
      },
      {
        "id": 33,
        "date": "2024-02-11",
        "status": "Processing",
        "totalAmount": 240.00
      },
      {
        "id": 34,
        "date": "2024-02-12",
        "status": "Cancelled",
        "totalAmount": 19.99
      },
      {
        "id": 35,
        "date": "2024-02-13",
        "status": "Completed",
        "totalAmount": 710.00
      },
      {
        "id": 36,
        "date": "2024-02-14",
        "status": "Shipped",
        "totalAmount": 11.50
      },
      {
        "id": 37,
        "date": "2024-02-15",
        "status": "Completed",
        "totalAmount": 89.00
      },
      {
        "id": 38,
        "date": "2024-02-16",
        "status": "Processing",
        "totalAmount": 33.25
      },
      {
        "id": 39,
        "date": "2024-02-17",
        "status": "Completed",
        "totalAmount": 165.75
      },
      {
        "id": 40,
        "date": "2024-02-18",
        "status": "Shipped",
        "totalAmount": 450.00
      },
      {
        "id": 41,
        "date": "2024-02-19",
        "status": "Completed",
        "totalAmount": 28.50
      },
      {
        "id": 42,
        "date": "2024-02-20",
        "status": "Processing",
        "totalAmount": 75.00
      },
      {
        "id": 43,
        "date": "2024-02-21",
        "status": "Completed",
        "totalAmount": 199.00
      },
      {
        "id": 44,
        "date": "2024-02-22",
        "status": "Shipped",
        "totalAmount": 55.99
      },
      {
        "id": 45,
        "date": "2024-02-23",
        "status": "Cancelled",
        "totalAmount": 9.99
      },
      {
        "id": 46,
        "date": "2024-02-24",
        "status": "Completed",
        "totalAmount": 305.50
      },
      {
        "id": 47,
        "date": "2024-02-25",
        "status": "Processing",
        "totalAmount": 17.50
      },
      {
        "id": 48,
        "date": "2024-02-26",
        "status": "Shipped",
        "totalAmount": 49.00
      },
      {
        "id": 49,
        "date": "2024-02-27",
        "status": "Completed",
        "totalAmount": 625.00
      },
      {
        "id": 50,
        "date": "2024-02-28",
        "status": "Shipped",
        "totalAmount": 105.00
      },
      {
        "id": 51,
        "date": "2024-02-29",
        "status": "Completed",
        "totalAmount": 20.00
      },
      {
        "id": 52,
        "date": "2024-03-01",
        "status": "Processing",
        "totalAmount": 95.75
      },
      {
        "id": 53,
        "date": "2024-03-02",
        "status": "Completed",
        "totalAmount": 145.00
      },
      {
        "id": 54,
        "date": "2024-03-03",
        "status": "Shipped",
        "totalAmount": 58.25
      },
      {
        "id": 55,
        "date": "2024-03-04",
        "status": "Completed",
        "totalAmount": 72.00
      },
      {
        "id": 56,
        "date": "2024-03-05",
        "status": "Processing",
        "totalAmount": 805.50
      },
      {
        "id": 57,
        "date": "2024-03-06",
        "status": "Completed",
        "totalAmount": 16.99
      },
      {
        "id": 58,
        "date": "2024-03-07",
        "status": "Shipped",
        "totalAmount": 42.00
      },
      {
        "id": 59,
        "date": "2024-03-08",
        "status": "Cancelled",
        "totalAmount": 299.00
      },
      {
        "id": 60,
        "date": "2024-03-09",
        "status": "Completed",
        "totalAmount": 13.50
      },
      {
        "id": 61,
        "date": "2024-03-10",
        "status": "Processing",
        "totalAmount": 55.00
      },
      {
        "id": 62,
        "date": "2024-03-11",
        "status": "Completed",
        "totalAmount": 349.99
      },
      {
        "id": 63,
        "date": "2024-03-12",
        "status": "Shipped",
        "totalAmount": 18.25
      },
      {
        "id": 64,
        "date": "2024-03-13",
        "status": "Completed",
        "totalAmount": 90.00
      },
      {
        "id": 65,
        "date": "2024-03-14",
        "status": "Processing",
        "totalAmount": 650.00
      },
      {
        "id": 66,
        "date": "2024-03-15",
        "status": "Shipped",
        "totalAmount": 175.20
      },
      {
        "id": 67,
        "date": "2024-03-16",
        "status": "Completed",
        "totalAmount": 45.00
      },
      {
        "id": 68,
        "date": "2024-03-17",
        "status": "Completed",
        "totalAmount": 88.80
      },
      {
        "id": 69,
        "date": "2024-03-18",
        "status": "Cancelled",
        "totalAmount": 12.00
      },
      {
        "id": 70,
        "date": "2024-03-19",
        "status": "Shipped",
        "totalAmount": 25.50
      },
      {
        "id": 71,
        "date": "2024-03-20",
        "status": "Completed",
        "totalAmount": 75.99
      },
      {
        "id": 72,
        "date": "2024-03-21",
        "status": "Processing",
        "totalAmount": 55.00
      },
      {
        "id": 73,
        "date": "2024-03-22",
        "status": "Shipped",
        "totalAmount": 280.00
      },
      {
        "id": 74,
        "date": "2024-03-23",
        "status": "Completed",
        "totalAmount": 10.99
      },
      {
        "id": 75,
        "date": "2024-03-24",
        "status": "Completed",
        "totalAmount": 475.00
      },
      {
        "id": 76,
        "date": "2024-03-25",
        "status": "Shipped",
        "totalAmount": 19.50
      },
      {
        "id": 77,
        "date": "2024-03-26",
        "status": "Processing",
        "totalAmount": 880.00
      },
      {
        "id": 78,
        "date": "2024-03-27",
        "status": "Completed",
        "totalAmount": 65.25
      },
      {
        "id": 79,
        "date": "2024-03-28",
        "status": "Shipped",
        "totalAmount": 15.00
      },
      {
        "id": 80,
        "date": "2024-03-29",
        "status": "Completed",
        "totalAmount": 92.50
      },
      {
        "id": 81,
        "date": "2024-03-30",
        "status": "Processing",
        "totalAmount": 330.00
      },
      {
        "id": 82,
        "date": "2024-03-31",
        "status": "Shipped",
        "totalAmount": 48.00
      },
      {
        "id": 83,
        "date": "2024-04-01",
        "status": "Completed",
        "totalAmount": 115.75
      },
      {
        "id": 84,
        "date": "2024-04-02",
        "status": "Cancelled",
        "totalAmount": 7.99
      },
      {
        "id": 85,
        "date": "2024-04-03",
        "status": "Completed",
        "totalAmount": 520.00
      },
      {
        "id": 86,
        "date": "2024-04-04",
        "status": "Processing",
        "totalAmount": 22.50
      },
      {
        "id": 87,
        "date": "2024-04-05",
        "status": "Shipped",
        "totalAmount": 89.99
      },
      {
        "id": 88,
        "date": "2024-04-06",
        "status": "Completed",
        "totalAmount": 24.00
      },
      {
        "id": 89,
        "date": "2024-04-07",
        "status": "Shipped",
        "totalAmount": 199.50
      },
      {
        "id": 90,
        "date": "2024-04-08",
        "status": "Completed",
        "totalAmount": 65.00
      },
      {
        "id": 91,
        "date": "2024-04-09",
        "status": "Processing",
        "totalAmount": 11.99
      },
      {
        "id": 92,
        "date": "2024-04-10",
        "status": "Completed",
        "totalAmount": 375.00
      },
      {
        "id": 93,
        "date": "2024-04-11",
        "status": "Shipped",
        "totalAmount": 70.00
      },
      {
        "id": 94,
        "date": "2024-04-12",
        "status": "Completed",
        "totalAmount": 180.25
      },
      {
        "id": 95,
        "date": "2024-04-13",
        "status": "Processing",
        "totalAmount": 30.00
      },
      {
        "id": 96,
        "date": "2024-04-14",
        "status": "Completed",
        "totalAmount": 450.00
      },
      {
        "id": 97,
        "date": "2024-04-15",
        "status": "Shipped",
        "totalAmount": 29.50
      },
      {
        "id": 98,
        "date": "2024-04-16",
        "status": "Completed",
        "totalAmount": 12.00
      },
      {
        "id": 99,
        "date": "2024-04-17",
        "status": "Processing",
        "totalAmount": 55.75
      },
      {
        "id": 100,
        "date": "2024-04-18",
        "status": "Completed",
        "totalAmount": 89.00
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
