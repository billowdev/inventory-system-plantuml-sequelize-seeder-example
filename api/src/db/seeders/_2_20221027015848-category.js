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
    const categoryList = [
      {
        id: 1,
        name: 'คอมพิวเตอร์',
        desc: 'อุปกรณ์คอมพิวเตอร์ต่างๆ',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'เครื่องดื่ม',
        desc: 'เครื่องดื่มต่างๆ เช่น น้ำเปล่า น้ำอัดลม',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'เครื่องสำอาง',
        desc: 'เครื่องสำอางต่างๆ',
        created_at: new Date(),
        updated_at: new Date(),
      }

    ]
    await queryInterface.bulkInsert('category', categoryList, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('category', null, {});
  }
};
