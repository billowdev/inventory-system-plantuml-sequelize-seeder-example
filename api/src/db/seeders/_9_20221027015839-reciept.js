'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const receiptList = [
      {
        id: 1,
        total_price: 500,
        order_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('receipt', receiptList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('receipt', null, {});
  }
};
