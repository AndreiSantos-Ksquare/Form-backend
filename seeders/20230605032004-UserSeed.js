"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          username: "foo_1",
          firstName: "Foo2",
          lastName: "Foo2",
          email: "foo1@example.com",
          phone: "1234567890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          username: "foo_2",
          firstName: "Foo2",
          lastName: "Foo2",
          email: "foo2@example.com",
          phone: "1234567890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          username: "foo_3",
          firstName: "Foo3",
          lastName: "Foo3",
          email: "foo3@example.com",
          phone: "1234567890",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
