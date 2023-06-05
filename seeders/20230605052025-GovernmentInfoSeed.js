"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GovernmentInfos",
      [
        {
          id: 1,
          CURP: "ABCD123456789",
          identification_number: "ABC123",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: 2,
          CURP: "EFGH987654321",
          identification_number: "DEF456",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: 3,
          CURP: "IJKL567891234",
          identification_number: "GHI789",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GovernmentInfos", null, {});
  },
};
