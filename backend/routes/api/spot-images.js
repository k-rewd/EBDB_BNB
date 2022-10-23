const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');
const { Op, } = require('sequelize');


// Delete an existing image for a Spot.
router.delete('/:imageId', requireAuth, async(req, res) => {
  const spotImg = await SpotImage.findByPk(req.params.imageId, {
    where: {
      userId: req.user.id
    }
  });
  if (!spotImg) {
  return res.status(404).json({
      "message": "Spot Image couldn't be found",
      "statusCode": 404
    })
  }
  await spotImg.destroy();
  return res.status(200).json({
    "message": "Successfully deleted",
    "statusCode": 200
  });
});
















module.exports = router;
