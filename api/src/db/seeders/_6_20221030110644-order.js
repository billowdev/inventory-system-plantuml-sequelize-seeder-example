'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const orderList = [
      {
        id: 1,
        qty: 10,
        status: 'pending',
        customer_id: 1,
        employee_id: 1,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        qty: 3,
        status: 'complete',
        customer_id: 1,
        employee_id: 1,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        qty: 5,
        status: 'cancel',
        customer_id: 1,
        employee_id: 1,
        product_id: 3,
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
