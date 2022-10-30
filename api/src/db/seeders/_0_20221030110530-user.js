'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = [
      {
        id: 1,
        username: 'customer',
        hash_password: "password",
        email: "customer@gmail.com",
        role: 'customer',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        username: 'ceo',
        hash_password: "password",
        email: "ceo@gmail.com",
        role: 'employee',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        username: 'cashier',
        hash_password: "password",
        email: "cashier@gmail.com",
        role: 'employee',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        username: 'manager',
        hash_password: "password",
        email: "manager@gmail.com",
        role: 'employee',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        username: 'financial',
        hash_password: "password",
        email: "financial@gmail.com",
        role: 'employee',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        username: 'admin',
        hash_password: "password",
        email: "admin@gmail.com",
        role: 'admin',
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      }

    ]
    await queryInterface.bulkInsert('user', userList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
