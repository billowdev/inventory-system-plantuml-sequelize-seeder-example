'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const stockOrderList = [
      {
        id: 1,
        qty: 300,
        product_id: 1,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        qty: 231,
        product_id: 2,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        qty: 120,
        product_id: 3,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        qty: 11,
        product_id: 4,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        qty: 20,
        product_id: 5,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        qty: 20,
        product_id: 6,
        employee_id: 3,
        supplier_id: 1,
        invoice_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('stock_order', stockOrderList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stock_order', null, {});
  }
};
