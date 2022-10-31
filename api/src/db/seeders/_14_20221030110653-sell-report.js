'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const sellReportList = [
      {
        id: 1,
        revenue: 5000,
        total_qty: 20,
        total: 16000,
        employee_id: 3,
        start_date: new Date(),
        end_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        revenue: 3000,
        total_qty: 10,
        total: 1400,
        employee_id: 3,
        start_date: new Date(),
        end_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ]
    await queryInterface.bulkInsert('sell_report', sellReportList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sell_report', null, {});
  }
};
