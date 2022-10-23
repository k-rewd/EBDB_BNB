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
    await queryInterface.bulkInsert('SpotImages',[
      {
        spotId: 1,
        url: 'https://blog.japanwondertravel.com/wp-content/uploads/2021/02/totoro001-1200x649.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://s3.ap-northeast-1.amazonaws.com/wakuwaku.today/uploads/store/ehime-japan-dogo-onsen-spirited-away-b66c24a7f0f46e8ceac4dab48f7ec395.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://img1.10bestmedia.com/Images/Photos/344375/GettyImages-187970773--1-_54_990x660.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/091f1d08-1122-4b4f-8c88-e1498e1d5663/concept-art-from-studio-ghiblis-theme-park-tease-princess-mononoke-and-howls-moving-castle-areas.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://miro.medium.com/max/1200/1*N9dX91Lm4_IsKGXUNTUgYQ.jpeg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://i.pinimg.com/originals/da/aa/66/daaa66e616bffa03b2cbc01e3e9cd612.jpg',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://i.ytimg.com/vi/zJg327d8ELc/maxresdefault.jpg',
        preview: true
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};
