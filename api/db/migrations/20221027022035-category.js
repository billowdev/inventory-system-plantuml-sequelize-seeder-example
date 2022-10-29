
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('category', {
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
    await queryInterface.dropTable('category');
  }
};