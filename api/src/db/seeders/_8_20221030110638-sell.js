'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const sellList = [
      {
        id: 1,
        qty: 5,
        product_id: 3,
        order_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('sell', sellList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sell', null, {});
  }
};
