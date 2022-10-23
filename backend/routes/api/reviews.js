const express = require('express')
const router = express.Router();
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Booking, Review, ReviewImage } = require('../../db/models')

// Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const { url } = req.body
  const { reviewId } = req.params
  const review = await Review.findByPk(reviewId)
  if (!review) {
  return res.status(404).json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }
  const reviewImg = await ReviewImage.create({
    reviewId: review.id,
    url: url
  })
  return res.status(200).json({
    id: reviewImg.id,
    url: reviewImg.url
  })
})

// Update and return an existing review.
router.put('/:reviewId', requireAuth, async (req, res) => {
  const {review, stars} = req.body;
  const existingReview = await Review.findOne({
    where: {
      id: req.params.reviewId
    }
  })

  if (!existingReview) {
    res.status(404);
    return res.json({
    "message": "Review couldn't be found",
    "statusCode": 404
  })
  }
  const updatedReview = await existingReview.update({
    review: review,
    stars: stars
  })
  await updatedReview.save();
  res.status(200).json(updatedReview)
}); 

//Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      userId: req.user.id,
    },
    include: [{
      model: User,
      attributes: ['id', 'firstName', 'lastName'],
      where: {
        id: req.user.id
      }
    }, {
      model: Spot,
      attributes: {exclude: ['createdAt', 'updatedAt']}
    }, {
      model: ReviewImage,
      attributes: {exclude: ['reviewId', 'createdAt', 'updatedAt']}
    }]
  })
  
  let result = []
  for (let review of reviews) {
    review = review.toJSON()
    const img = await SpotImage.findByPk(review.id, {
      where: {
        preview: true,
      },
      attributes: ['url'],
    })
    if (img) {
      review.Spot.previewImage = img.url
    }
    result.push(review)
  }
  return res.status(200).json({'Reviews': result})
});

router.delete('/:reviewId', requireAuth, async(req, res) => {
  const review = await Review.findByPk(req.params.reviewId, {
    where: {
      userId: req.user.id
    }
  });
  if (!review) {
    return res.status(404).json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }
  await review.destroy();
  return res.status(200).json({
    "message": "Successfully deleted",
    "statusCode": 200
  })
})


module.exports = router;
