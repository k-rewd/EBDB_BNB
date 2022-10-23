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


  //   reviews
  // : 
  // spotReviews
  // : 
  // Reviews
  // : 
  // Array(2)
  // 0
  // : 
  // {id: 1, spotId: 1, userId: 1, review: 'this place sucks!', stars: 5, …}

  if(!newSpotReview) {
    return null
  } else {
    return isLoaded &&
      newSpotReview.map(review => (
      <>
      <div>
        <ul>
          <div className="spot-review-index-review">"{review.review}"</div>
          <div>- {review.User.firstName} {review.User.lastName}</div>
        </ul>
      </div>
      </>
    ))
  }
}

export default SpotReviewIndex