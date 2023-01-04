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
        url: 'https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Koriko_2.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://studioghiblimovies.com/wp-content/uploads/2014/12/tumblr_moj7k3vcok1rm893uo9_1280.jpg',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2018/08/Ghibli-Theme-Park-Concept-1024x640.jpg',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://static.wikia.nocookie.net/fma/images/e/e4/Eastcommand_day.png',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://static.wikia.nocookie.net/fma/images/9/94/Rockbells-house.png',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://static.wikia.nocookie.net/fma/images/1/11/Library_movie.png',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://static.wikia.nocookie.net/fma/images/d/db/Nameless-village.png',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://static.wikia.nocookie.net/mha-rp/images/8/88/Yuuei_Building.png',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://static.wikia.nocookie.net/kimetsu-no-yaiba-fanon/images/4/44/Butterfly_Mansion.png',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://outsidergaming.com/wp-content/uploads/2021/10/Demon-Slayer-The-Hinokami-Chronicles-All-Memory-Fragments-Demon-Slayer-Corps-HQ.jpg',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://ancdn.fancaps.net/13827897.jpg',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/3/3d/Asakusa%2C_Tokyo_Anime.png',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://i.pinimg.com/564x/09/9e/14/099e1451c0cbb3dc192ac30f07d4e9a8.jpg',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://64.media.tumblr.com/2b8d5b27b3b0f9153e903523eed05048/tumblr_pjy4mlyc0Z1tzy34x_1280.jpg',
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
