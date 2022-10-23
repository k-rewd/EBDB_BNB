'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.hasMany(models.SpotImage, {foreignKey: 'spotId', onDelete: 'CASCADE'})

      Spot.belongsTo(models.User, {foreignKey: 'ownerId', as: 'Owner', onDelete: 'CASCADE'});

      Spot.belongsToMany(models.User, {
        through: models.Booking,
        foreignKey: 'spotId',
        otherKey: 'userId',
        onDelete: 'CASCADE'
      });

      Spot.belongsToMany(models.User, {
        through: models.Review,
        foreignKey: 'spotId',
        otherKey: 'userId'
      });
      // Spot.belongsTo(models.User, { foreignKey: 'ownerId', as: 'Owner' });
      // Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE' });
      // Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE' });
      // Spot.hasMany(models.SpotImage, { foreignKey: 'spotId', onDelete: 'CASCADE'});


    }
  }
  Spot.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {model: 'Users', key: 'id'},
      onDelete: 'CASCADE'
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true
      // }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true
      // }
    },
    lat: {
      type: DataTypes.DECIMAL(11,7),
      allowNull: true,
    },
    lng: {
      type: DataTypes.DECIMAL(11,7),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0,50]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};