'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const invoiceList = [
      {
        id: 1,
        order_id: 2,
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
