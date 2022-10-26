'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('====================================');
    console.log(queryInterface);
    console.log('====================================');
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncreatement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};