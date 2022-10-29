'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product', 'desc', Sequelize.STRING(200), {
      allowNull: true
    })
    await queryInterface.addColumn('product', 'brand', Sequelize.STRING(50), {
      allowNull: false
    })

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product', 'desc')
    await queryInterface.addColumn('product', 'brand')
  }
};