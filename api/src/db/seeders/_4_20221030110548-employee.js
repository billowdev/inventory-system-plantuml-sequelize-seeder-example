'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const employeeList = [
      {
        id: 1,
        name: 'cashier name',
        surname: "cashier surname",
        phone: '0987321231',
        user_id: 3,
        address_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'ceo name',
        surname: "ceo surname",
        phone: '0987321231',
        user_id: 2,
        address_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'manager name',
        surname: "manager surname",
        phone: '0987321231',
        user_id: 4,
        address_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'financial name',
        surname: "financial surname",
        phone: '0987321231',
        user_id: 5,
        address_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ]
    await queryInterface.bulkInsert('employee', employeeList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee', null, {});
  }
};
