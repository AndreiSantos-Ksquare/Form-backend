"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "FormalEducationInfos",
      [
        {
          university_name: "Example University 1",
          state: "State 1",
          country: "Country 1",
          career_name: "Career 1",
          classes_completed: true,
          proof_classes_completed: "Proof 1",
          degree_completed: true,
          proof_degree_completed: "Proof 2",
          license_completed: false,
          proof_license_completed: null,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "Example University 2",
          state: "State 2",
          country: "Country 2",
          career_name: "Career 2",
          classes_completed: true,
          proof_classes_completed: "Proof 3",
          degree_completed: true,
          proof_degree_completed: "Proof 4",
          license_completed: true,
          proof_license_completed: "Proof 5",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          university_name: "Example University 3",
          state: "State 3",
          country: "Country 3",
          career_name: "Career 3",
          classes_completed: false,
          proof_classes_completed: null,
          degree_completed: false,
          proof_degree_completed: null,
          license_completed: false,
          proof_license_completed: null,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FormalEducationInfos", null, {});
  },
};
