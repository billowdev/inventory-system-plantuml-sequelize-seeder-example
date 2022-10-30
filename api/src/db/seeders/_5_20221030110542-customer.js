'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const customerList = [
      {
        id: 1,
        name: 'customer name',
        surname: "customer surname",
        phone: '0987321231',
        user_id: 1,
        address_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'customer name 2',
        surname: "customer surname 2",
        phone: '0987321231',
        user_id: 7,
        address_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      
      
    ]
    await queryInterface.bulkInsert('customer', customerList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customer', null, {});
  }
};
