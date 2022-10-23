'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'CASCADE'});
      Review.belongsTo(models.Spot, {foreignKey: 'spotId', onDelete: 'CASCADE'});

      Review.hasMany(models.ReviewImage, {foreignKey: 'reviewId', onDelete: 'CASCADE'})
    }
  }
  Review.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    stars: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min:1, max: 5
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};