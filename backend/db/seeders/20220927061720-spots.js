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
        name: 'House Targaryen',
        description: "Enjoy the elegance of a by-gone era while staying in this Art Deco home. Beautifully decorated and featuring a sweeping staircase, original stained-glass windows, period furniture, and a stunningly unique black-and-white tiled bathroom.",
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
        name: 'GreendaleCC',
        description: "Retreat to the deck of this sustainable getaway and gaze at the twinkling constellations under a cosy tartan blanket. AirShip 2 is an iconic, insulated aluminium pod designed by Roderick James with views of the Sound of Mull from dragonfly windows.",
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
        name: 'House Stark',
        description: "Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps, then head back for a morning coffee at this urban-chic studio with a suspended loft bedroom.",
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
        description: "Unwind at this stunning French Provencal beachside cottage. The house was lovingly built with stone floors, high-beamed ceilings, and antique details for a luxurious yet charming feel. Enjoy the sea and mountain views from the pool and lush garden.",
        price: 520
      },
      {
        ownerId: 2,
        address: '1600 Pennsylvania Ave',
        city: 'Washington',
        state: 'DC',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Taco Bell',
        description: "The house is located in the enclave of Llandudno Beach, a locals-only spot with unspoilt, fine white sand and curling surfing waves. Although shops and restaurants are only a five-minute drive away, the area feels peaceful and secluded.",
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
        description: "Pretend you are lost in a magical forest as you perch on a log or curl up in the swinging chair. Soak in the tub, then fall asleep in a heavenly bedroom with cloud-painted walls and twinkling lights. And when you wake up, the espresso machine awaits.",
        price: 330
      },
      {
        ownerId: 4,
        address: '3400 Mission St',
        city: 'Chicago',
        state: 'IL',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Burger King',
        description: "Have breakfast sitting by the natural wood breakfast bar, or up on the rooftop deck, enjoying the sunshine. This classy loft boasts open-plan living, with exposed brick and stunning artwork. An ideal base to explore Chicago from.",
        price: 220
      },
      {
        ownerId: 4,
        address: '1730 Sepulveda Blvd',
        city: 'Torrance',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'View of St.Peter',
        description: "Admire the view of St. Peter’s from the sunlit patio of this elegant studio apartment. This home boasts a crisp, contemporary vibe while still feeling comfortable and inviting. Enjoy a convenient kitchenette, breakfast nook, and soothing soaking tub.",
        price: 260
      },
      {
        ownerId: 1,
        address: '221 Sansome St',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Greyjoy',
        description: "My place is close to Ski Resorts, Hiking, Lake, Horseback Riding, Forest. Quiet neighborhood, comfortable, roomy and relaxed home. My place is good for couples, solo adventurers, and business travelers.",
        price: 230
      },
      {
        ownerId: 2,
        address: '527 Sutter St',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'House Glover',
        description: "Discount to active military families. I love to cook, so unless business takes me away, you are welcome to join me for breakfast; anything from home fries, omelets, pancakes, homemade biscuits and gravy, or my world-famous waffles.",
        price: 980
      },
      {
        ownerId: 3,
        address: '2650 Mason St',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Bolton of Winterfell',
        description: "ROMANTIC CABIN IN THE WOODS! Very quiet forested neighborhood. A true mountain retreat with high, open-beam wood ceilings, romantic wood-burning fireplace, and rustic décor. Fully equipped kitchen, full bath, DIRECT ENTRY GARAGE with WASHER AND DRYER!",
        price: 220
      },
      {
        ownerId: 4,
        address: '3420 W Slauson Ave F',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Vivenda Vida Boa',
        description: "Translating to The Good Life House in Portuguese, every inch of this property has been lovingly and thoughtfully restored to present an experience of upscale casual elegance.",
        price: 890
      },
      {
        ownerId: 4,
        address: '310 NE Weidler St',
        city: 'Portland',
        state: 'OR',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Blackfyre',
        description: "Located on 2 acres of the gorgeous hillside, you’ll have plenty of space for sprawling out and enjoying the fresh mountain air in privacy. Get ready to take in clear night skies full of brilliant constellations from the back-patio hot tub.",
        price: 888
      },
      {
        ownerId: 1,
        address: '22829 S Figueroa St',
        city: 'Carson',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Heavenly',
        description: "Rent Heavenly Sunset and spread out in 5 bedrooms and 4 full bathrooms, with sleeping space for a total of 15 guests. Or, rent both Heavenly Sunset AND its identical neighbor, Heavenly Sunrise, to sleep 30 people.",
        price: 999
      },
      {
        ownerId: 2,
        address: '1219 Lomita Blvd',
        city: 'Harbor City',
        state: 'CA',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'The Pearl',
        description: "What makes The Pearl so special? First, there are the stunning Gulf-front views, vacation-ready layout for up to 38 guests (including elevator access to all four floors) and heated private pool.",
        price: 424
      },
      {
        ownerId: 3,
        address: '1931 N Lombard St',
        city: 'Portland',
        state: 'OR',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Belmore of Strongsong',
        description: "During your visit, please feel free to enjoy the television, board games, books, popcorn, coffee and tea. If you are bringing the little ones, let us know–we will set out the bins of Legos and trains!",
        price: 310
      },
      {
        ownerId: 4,
        address: '2030 NE Broadway',
        city: 'Portland',
        state: 'OR',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Ambrose',
        description: "Time for adventures beyond your beach house? From deep sea fishing, and parasailing over the water, to golfing, and nights on the town, there’s something for everyone in your group. Name your favorite vacation activity, and you’ll likely find it here!",
        price: 213
      },
      {
        ownerId: 4,
        address: '30 SW Arthur St',
        city: 'Portland',
        state: 'OR',
        country: 'USA',
        lat: 39.7644444,
        lng: -124.4222327,
        name: 'Algood',
        description: "The first floor features a roomy living area with a flat-screen TV, nap-worthy sofas and windows that fill the space with natural light. There is room here for everyone to lounge together in the A/C after a day at the beach!",
        price: 626
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
