"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "AcademicInfos",
      [
        {
          software_devel_comments: "Good programming skills",
          degree_level: "Bachelor",
          informal_education: "Online courses",
          other_education: "Certifications",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "Excellent problem-solving abilities",
          degree_level: "Master",
          informal_education: "Workshops",
          other_education: "Bootcamps",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          software_devel_comments: "Strong analytical skills",
          degree_level: "PhD",
          informal_education: "Self-study",
          other_education: "Conferences",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AcademicInfos", null, {});
  },
};
