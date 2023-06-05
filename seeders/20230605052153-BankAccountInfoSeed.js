"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BankAccountInfos",
      [
        {
          acc_number: 123456789,
          clabe: 987654321,
          bank: "Example Bank 1",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 987654321,
          clabe: 123456789,
          bank: "Example Bank 2",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          acc_number: 555555555,
          clabe: 999999999,
          bank: "Example Bank 3",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
