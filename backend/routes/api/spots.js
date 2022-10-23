const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');
const { Op } = require('sequelize');

// Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', requireAuth, async (req, res) => {
  const { startDate, endDate } = req.body
  const spot = await Spot.findByPk(req.params.spotId)

  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }
  const existingBooking = await Booking.findOne({
    where: {
      spotId: spot.id,
      [Op.or]: [{
        startDate: {
          [Op.between]: [startDate, endDate]
        },
        endDate: {
          [Op.between]: [startDate, endDate]
        }
      }]
    }
  })
  if (spot && existingBooking) {
    return res.status(403).json({
      "message": "Sorry, this spot is already booked for the specified dates",
      "statusCode": 403,
      "errors": {
        "startDate": "Start date conflicts with an existing booking",
        "endDate": "End date conflicts with an existing booking"
      }
    })
  }
  const newBooking = await Booking.create({
    spotId: spot.id,
    userId: req.user.id,
    startDate: startDate,
    endDate: endDate
  })
  res.status(200).json(newBooking)
})


// Create and return a new review for a spot specified by id
router.post('/:spotId/reviews', requireAuth, async (req, res, next) => {
  const { review, stars } = req.body;
  const spot = await Spot.findByPk(req.params.spotId);

  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
    // const err = newError("Spot couldn't be found");
    // err.title = 'Missing Item'
    // err.status(404)
    // return next(err)
  }
  const reviewExists = await Review.findOne({
    where: {
      spotId: spot.id,
      userId: req.user.id
    }
  })
  if (reviewExists) {
    // const err = newError("User already has a review for this spot");
    // err.title = 'Item exists'
    // err.status(403)
    // return next(err)
    
    return res.status(403).json({
      "message": "User already has a review for this spot",
      "statusCode": 403
    })
  }

  const newReview = await Review.create({
    spotId: spot.id,
    userId: req.user.id,
    review: review,
    stars: stars
  })
  return res.status(201).json(newReview)
})

// Add an Image to a Spot based on the Spot's id
// router.post('/:spotId/images', requireAuth, async (req, res) => {
//   const { url, preview } = req.body;
//   const found = await Spot.findByPk(req.params.spotId)
//   if (!found) {
//     return res.status(404).json(
//       {
//         "message": "Spot couldn't be found",
//         "statusCode": 404
//       }
//     )
//   }
//   const newImg = await SpotImage.create({
//     spotId: found.id,
//     url: url,
//     preview: preview
//   })
//   return res.status(200).json({
//     id: newImg.id,
//     url: newImg.url,
//     preview: newImg.preview
//   })
// })

// Edit a Spot (added where to findbypk to authenticate? test to see if it works)
router.put('/:spotId', requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const spot = await Spot.findByPk(req.params.spotId, {
    where: {
      ownerId: req.user.id
    }
  })
  if (!spot) {
    res.status(404)
    res.json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  spot.update({
    ownerId: req.user.id,
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price
  });
  await spot.save()
  return res.status(200).json(spot)
})

// Creates and returns a new spot.
router.post('/', requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  const Spots = await Spot.create({
    ownerId: req.user.id,
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price,
  });
    const { url, preview } = req.body;
    await SpotImage.create({
      spotId: Spots.id,
      url: url,
      preview: preview
    })
    const finalSpot = await Spot.findByPk(Spots.id, {
      include: SpotImage
    })
    return res.json(finalSpot)
  })

// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId)

  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }
  const ifOwner = await Booking.findAll({
    where: {
      spotId: spot.dataValues.id
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName']
    }]
  })

  const spotBookings = await Booking.findAll({
    where: {
      spotId: spot.id,
    },
    attributes: ['spotId', 'startDate', 'endDate']
  })
  if (req.user.id === spot.dataValues.ownerId) {
    return res.status(200).json({ 'Bookings': ifOwner })
  }
  return res.status(200).json({ 'Bookings': spotBookings })
})

// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId)
  const reviews = await Review.findAll({
    where:{
      spotId: req.params.spotId
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName']
    }, {
      model: ReviewImage,
      attributes: ['id', 'url']
    }]
  })
  // Error response: Couldn't find a Spot with the specified id
  if (!spot) res.status(404).json({
    "message": "Spot couldn't be found",
    "statusCode": 404
  })
  res.status(200).json({ Reviews: reviews })
})

// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res) => {
  const spots = await Spot.findAll({
    where: {
      ownerId: req.user.id
    }
  })
  let result = [];
  for (let spot of spots) {
    spot = spot.toJSON()
    const allReviews = await Review.findAll({
      raw: true,
      where: {
        spotId: spot.id
      }, attributes: [
        [sequelize.fn('AVG', sequelize.col('stars')), 'avgRating']
      ]
    })
    const imgURL = await SpotImage.findOne({
      where: {
        spotId: spot.id,
        preview: true
      }, attributes: ['url'], raw: true
    })
    let changeToInt;
    changeToInt = Number((allReviews[0].avgRating)).toFixed(2)
    spot.avgRating = +changeToInt
    if (imgURL) {
      spot.previewImage = imgURL.url
    }
    
    result.push(spot)
  }
  res.status(200).json({ Spots: result })
})

// Get details of a Spot from an id
router.get('/:spotId', async (req, res) => {
  let spotDetails = await Spot.findByPk(req.params.spotId, {
    include: [{
      model: SpotImage,
      attributes: ['id', 'url', 'preview']
    },
    {
      model: User,
      attributes: ['id', 'firstName', 'lastName'],
      as: 'Owner'
    },
    ]
  })
  // Error response: Couldn't find a Spot with the specified id
  if (!spotDetails) return (res.status(404).json(
    {
      "message": "Spot couldn't be found",
      "statusCode": 404
    }
  ))
  const review = await Review.count({
    where: {
      spotId: spotDetails.id
    }
  });
  const star = await Review.sum('stars', {
    where: {
      spotId: spotDetails.id
    }
  });
  spotDetails = spotDetails.toJSON()
  spotDetails.numReviews = review
  let avgStarRating;
  if (star === null) {
    avgStarRating = 0
  } else {
    avgStarRating = (star / review).toFixed(2)
  }
  spotDetails.avgStarRating = +avgStarRating
  res.json(spotDetails)
});


router.delete('/:spotId', requireAuth, async (req, res) => {
  const spot = await Spot.findByPk(req.params.spotId, {
    where: {
      ownerId: req.user.id
    }
  });
  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }
  await spot.destroy();
  return res.status(200).json({
    "message": "Successfully deleted",
    "statusCode": 200
  });
});



// Get all Spots ((try using fn, https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries))
router.get('/', async (req, res) => {
  let { page, size } = req.query;

  if (!page || page <= 0) page = 1
  if (!size || size <= 0) size = 20
  if (size > 20) size = 20
  if (page > 10) page = 10

  page = parseInt(page)
  size = parseInt(size)
  let pagination = {};

  if(page >= 1 && size >=1) {
    pagination.offset = size * (page - 1);
    pagination.limit = size
}
  // console.log(pagination)
  const spots = await Spot.findAll(
    {...pagination}
  )
  let result = [];
  for (let spot of spots) {
    spot = spot.toJSON()
    const ratings = await Review.findAll({
      raw: true,
      where: {
        spotId: spot.id
      }, attributes: [
        [sequelize.fn('AVG', sequelize.col('stars')), 'avgRating']
      ]
    })
    const imgURL = await SpotImage.findOne({
      where: {
        spotId: spot.id,
        preview: true
      },
      attributes:
        ['url'], raw: true
    })
    avgRating = Number(ratings[0].avgRating).toFixed(2)
    spot.avgRating = +avgRating;
    if (imgURL) {
      spot.previewImage = imgURL.url
    }
    result.push(spot)
  }

  res.status(200).json({ 'Spots': result, page, size})
})

module.exports = router;


