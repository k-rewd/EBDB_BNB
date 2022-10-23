const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Booking, Review, ReviewImage } = require('../../db/models')

// Get all of the Current User's Bookings
router.get('/current', requireAuth, async(req, res) => {
  const currentBookings = await Booking.findAll({
    where: {
      userId: req.user.id
    },
    include: [{
      model: Spot,
      attributes: {exclude: ['description', 'createdAt', 'updatedAt']}
    }]
  })
  let result = []
  for (let boks of currentBookings) {
    boks = boks.toJSON()
    const img = await SpotImage.findByPk(boks.spotId, {
      where: {
        preview: true,
      },
      attributes: ['url'],
    })
    if (img) {
      boks.Spot.previewImage = img.url
    }
    result.push(boks)
  }
  res.status(200).json({'Bookings': result})
})

// Update and return an existing booking.
router.put('/:bookingId', requireAuth, async(req, res) => {
  const {startDate, endDate} = req.body;
  const booking = await Booking.findByPk(req.params.bookingId);
  
  if (!booking) {
   return res.status(404).json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
  }
  const editBooking = await booking.update({
    spotId: booking.id,
    userId: req.user.id,
    startDate: startDate,
    endDate: endDate
  })
  res.status(200).json(editBooking)
});

router.delete('/:bookingId', requireAuth, async(req, res) => {
  const booking = await Booking.findByPk(req.params.bookingId, {
    where: {
      ownerId: req.user.id
    }
  });
  if (!booking) {
    return res.status(404).json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
  }
  await booking.destroy();
  return res.status(200).json({
    "message": "Successfully deleted",
    "statusCode": 200
  })
})




module.exports = router;
