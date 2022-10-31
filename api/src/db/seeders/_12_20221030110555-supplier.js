'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const supplierList = [
      {
        id: 1,
        name: "Supplier ltd",
        phone: "0923819232",
        email: "supplier@gmail.com",
        address_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },


    ]
    await queryInterface.bulkInsert('supplier', supplierList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('supplier', null, {});
  }
};
