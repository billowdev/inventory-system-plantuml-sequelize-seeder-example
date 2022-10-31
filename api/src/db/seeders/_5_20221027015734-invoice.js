'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const invoiceList = [
      {
        id: 1,
        employee_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        employee_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        employee_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        employee_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    await queryInterface.bulkInsert('invoice', invoiceList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('invoice', null, {});
  }
};
