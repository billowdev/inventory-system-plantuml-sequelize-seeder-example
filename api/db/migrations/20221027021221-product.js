'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncreatement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        unique : false,
        allowNull: true,
        references: {
          model: "category",
          key: "id"
        }
      },
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};