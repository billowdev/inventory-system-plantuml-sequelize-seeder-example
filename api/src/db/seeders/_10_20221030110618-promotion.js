'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const promotionList = [
      {
        id: 1,
        desc: "promotion 1",
        iat: new Date(),
        exp: new Date(),
        discount_percent: 20.0,
        discount_value: 0,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('promotion', promotionList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('promotion', null, {});
  }
};
