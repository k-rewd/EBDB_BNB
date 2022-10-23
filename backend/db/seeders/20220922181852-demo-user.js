'use strict';
const bcrypt = require("bcryptjs");

const { User, Booking, Spot, ReviewImage, Review, SpotImage } = require('../models')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Britta',
        lastName: 'Perry',
        username: 'Buzzkill',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'b.perry@greendalecc.edu'
      },
      {
        firstName: 'Jeff',
        lastName: 'Winger',
        username: 'Wingman',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'j.winger@greendalecc.edu',
      },
      {
        firstName: 'Abed',
        lastName: 'Nadir',
        username: 'FourthWall',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'a.nadir@greendalecc.edu',
      },
      {
        firstName: 'Troy',
        lastName: 'Barnes',
        username: 'Childish',
        hashedPassword: bcrypt.hashSync('password'),
        email: 't.barnes@greendalecc.edu',
      },
      {
        firstName: 'Annie',
        lastName: 'Edison',
        username: 'Tight Ship',
        hashedPassword: bcrypt.hashSync('password'),
        email: 'a.edison@greendalecc.edu',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Buzzkill', 'Wingman', 'FourthWall', 'Childish', 'Tight Ship'] }
    }, {});
  }
};