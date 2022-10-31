'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const orderList = [
      {
        id: 1,
        customer_id: 1,
        employee_id: 1,
        invoice_id: 1,
        status: 'pending',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        status: 'complete',
        customer_id: 1,
        employee_id: 1,
        invoice_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        status: 'cancel',
        customer_id: 1,
        employee_id: 1,
        invoice_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('order', orderList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order', null, {});
  }
};
