import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getSpotReviewsThunk } from "../../store/reviews"
import './SpotReviewIndex.css'

const SpotReviewIndex = () => {
  const spotReview = useSelector(state => state.reviews.spotReviews)
  const { spotId } = useParams()
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)


  const newSpotReview = Object.values(spotReview)
  // console.log('spotReview1', newSpotReview)

  useEffect(() => {
    dispatch(getSpotReviewsThunk(spotId))
      .then(() => setIsLoaded(true))
  }, [dispatch, spotId])

  // console.log('spotReview2', spotReview)


  if (!newSpotReview) {
    return null
  } else {
    return isLoaded &&
      newSpotReview.map(review => (
        <div id='one-review'>
          <div id='spot-review-index'>
            <div id='review-user-stars'>
              <div>★{review.stars}</div>
              <div id='review-name'>{review.User?.firstName} {review.User?.lastName}</div>
              {/* <div>{review.updatedAt ? review.updatedAt : review.createdAt}</div> */}
            </div>
            <div id='review-review'>"{review.review}"</div>
          </div>
        </div>
      ))
  }
}

export default SpotReviewIndex