const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');
const { Op } = require('sequelize');


// Delete an existing image for a Review.
router.delete('/:imageId', requireAuth, async(req, res) => {
  const reviewImg = await ReviewImage.findByPk(req.params.imageId, {
    where: {
      userId: req.user.id
    }
  });
  if (!reviewImg) {
    res.status(404).json({
      "message": "Review Image couldn't be found",
      "statusCode": 404
    })
  }
  await reviewImg.destroy();
  return res.status(200).json({
    "message": "Successfully deleted",
    "statusCode": 200
  });
});


module.exports = router;
