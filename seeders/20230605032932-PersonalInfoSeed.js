"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PersonalInfos",
      [
        {
          id: 1,
          name: "John",
          last_name: "Doe",
          second_last_name: "Smith",
          gender: "Male",
          gender_other: null,
          date_of_birth: "1990-05-15",
          city_of_birth: "New York City",
          state_of_birth: "New York",
          country_of_birth: "United States",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Alice",
          last_name: "Johnson",
          second_last_name: "Lee",
          gender: "Female",
          gender_other: null,
          date_of_birth: "1995-12-10",
          city_of_birth: "Los Angeles",
          state_of_birth: "California",
          country_of_birth: "United States",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "David",
          last_name: "Brown",
          second_last_name: "Taylor",
          gender: "Male",
          gender_other: null,
          date_of_birth: "1988-08-22",
          city_of_birth: "London",
          state_of_birth: "England",
          country_of_birth: "United Kingdom",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PersonalInfos", null, {});
  },
};
