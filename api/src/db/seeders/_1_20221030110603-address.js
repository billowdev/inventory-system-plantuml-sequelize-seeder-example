'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addressList = [
      {
        id: 1,
        house_number: 1,
        village: "village 1",
        sub_district: "sub_district 1",
        district: "district 1",
        province: "province 1",
        zip_code: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        house_number: 2,
        village: "village 2",
        sub_district: "sub_district 2",
        district: "district 2",
        province: "province 2",
        zip_code: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        house_number: 3,
        village: "village 3",
        sub_district: "sub_district 3",
        district: "district 3",
        province: "province 3",
        zip_code: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        house_number: 4,
        village: "village 4",
        sub_district: "sub_district 4",
        district: "district 4",
        province: "province 4",
        zip_code: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        house_number: 5,
        village: "village 5",
        sub_district: "sub_district 5",
        district: "district 5",
        province: "province 5",
        zip_code: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        house_number: 6,
        village: "village 6",
        sub_district: "sub_district 6",
        district: "district 6",
        province: "province 6",
        zip_code: 6,
        created_at: new Date(),
        updated_at: new Date(),
      }

    ]
    await queryInterface.bulkInsert('address', addressList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address', null, {});
  }
};
