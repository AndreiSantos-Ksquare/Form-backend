"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          phone: "123456789",
          country_code: "US",
          email: "example@example.com",
          alt_email: "alt@example.com",
          reference: "reference1",
          other_reference: "reference2",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "987654321",
          country_code: "UK",
          email: "example2@example.com",
          alt_email: "alt2@example.com",
          reference: "reference3",
          other_reference: "reference4",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          phone: "555555555",
          country_code: "CA",
          email: "example3@example.com",
          alt_email: "alt3@example.com",
          reference: "reference5",
          other_reference: "reference6",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
