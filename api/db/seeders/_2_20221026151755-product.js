'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const productList = [
      {
        id: 1,
        name: 'test product 1',
        desc: "test desc1", 
        brand: "test brand 1",
        category_id: 1,
      },
      {
        id: 2,
        name: 'test product 2',
        desc: "test desc 2", 
        brand: "test brand 2",
        category_id: 1,
      }

    ]
    await queryInterface.bulkInsert('product', productList, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('product', null, {});
  }
};
