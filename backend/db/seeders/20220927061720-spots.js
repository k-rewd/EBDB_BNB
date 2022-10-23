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
     await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '1235 Cat St',
        city: 'Torrance',
        state: 'CA',
        country: 'USA',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'McDonalds',
        description: "Is this the real life? Is this just fantasy? Caught in a landside, No escape from reality Open your eyes, Look up to the skies and see, I'm just a poor boy, I need no sympathy, Because I'm easy come, easy go",
        price: 500
      },
      {
        ownerId: 1,
        address: '12325 Long St',
        city: 'Gardena',
        state: 'CA',
        country: 'USA',
        lat: 39.7645358,
        lng: -124.4730327,
        name: 'Jack in the Box',
        description: "Mamaaa, life had just begun, But now I've gone and thrown it all away Mama, oooh, Didn't mean to make you cry, If I'm not back again this time tomorrow, Carry on, carry on as if nothing really matters",
        price: 400
      },
      {
        ownerId: 2,
        address: '12325 Fountain Ave',
        city: 'Carson',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'In N Out',
        description: "Too late, my time has come, Sends shivers down my spine, body's aching all The time Goodbye, everybody, I've got to go, Gotta leave you all behind and face the truth",
        price: 350
      },
      {
        ownerId: 2,
        address: '221b Baker St',
        city: 'London',
        state: 'England',
        country: 'UK',
        lat: 39.7644444,
        lng: -124.4222327,
        name: "Carl's Jr",
        description: "Everybody wanna cut the legs off him, Kunta Black man taking no losses I swore I wouldn't tell.But most of y'all share bars, like you got the bottom bunk in a two man cell",
        price: 520
      },
      {
        ownerId: 3,
        address: '1600 Pennsylvania Ave',
        city: 'Washington,',
        state: 'DC',
        country: 'Taco Bell',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Taco Bell',
        description: "When you got the yams (What's the yams?)The yam brought it out of Richard Pryor Manipulated Bill 24/7, 365 days times two I was contemplatin' gettin' on stage Just to go back to the",
        price: 670
      },
      {
        ownerId: 3,
        address: '186 Fleet St',
        city: 'London',
        state: 'England',
        country: 'UK',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Teeny Swod',
        description: "I'm just a poor boy nobody loves me He's just a poor boy from a poor family, Spare him his life from this monstrosity Easy come, easy go, will you let me go",
        price: 330
      },
      {
        ownerId: 3,
        address: '350 Fifth Ave',
        city: 'New York City',
        state: 'NY',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Burger King',
        description: "Thunderbolts and lightning, very, very frightening me Galileo, Galileo Galileo, Galileo Galileo, Figaro - magnificoo",
        price: 220
      },
     ],
     {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Spots', null, {});
  }
};
