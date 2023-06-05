"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "AddressExtraInfos",
      [
        {
          id: 1,
          type_of_residency: "Apartment",
          other_residency: null,
          people: "2",
          address_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          type_of_residency: "House",
          other_residency: null,
          people: "4",
          address_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          type_of_residency: "Condo",
          other_residency: null,
          people: "1",
          address_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AddressExtraInfos", null, {});
  },
};
