'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const stockList = [
      {
        id: 1,
        qty: 300,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        qty: 231,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        qty: 120,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        qty: 11,
        product_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        qty: 9,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        qty: 5,
        product_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('stock', stockList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stock', null, {});
  }
};
