'use strict';

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Bookings', [
    {
      spotId: 1,
      userId: 1,
      startDate: '2022-09-27',
      endDate: '2022-09-28'
    },
    {
      spotId: 1,
      userId: 2,
      startDate: '2022-09-29',
      endDate: '2022-09-30'
    },
    {
      spotId: 1,
      userId: 3,
      startDate: '2022-10-01',
      endDate: '2022-10-02' 
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
