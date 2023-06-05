"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ScholarshipInfos",
      [
        {
          level: "Undergraduate",
          kind: "Merit-based",
          period: 4,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "Graduate",
          kind: "Need-based",
          period: 2,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "PhD",
          kind: "Research",
          period: 3,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ScholarshipInfos", null, {});
  },
};
