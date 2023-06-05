"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          id: 1,
          street: "Main Street",
          in_between_street_a: "First Avenue",
          in_between_street_b: "Second Avenue",
          city: "New York City",
          state: "New York",
          country: new Date(),
          zip: "10001",
          proof_of_address: "1234567890",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          street: "Sunset Boulevard",
          in_between_street_a: "Hill Street",
          in_between_street_b: "Vine Street",
          city: "Los Angeles",
          state: "California",
          country: new Date(),
          zip: "90028",
          proof_of_address: "0987654321",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          street: "Oxford Street",
          in_between_street_a: "Regent Street",
          in_between_street_b: "Bond Street",
          city: "London",
          state: "England",
          country: new Date(),
          zip: "W1B 1AB",
          proof_of_address: "2468135790",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
