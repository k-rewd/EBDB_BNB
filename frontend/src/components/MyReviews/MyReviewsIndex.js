import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviewsThunk, deleteReviewThunk } from "../../store/reviews"
import './Review.css'



const MyReviewsIndex = () => {
  const userReviews = useSelector(state => state.reviews.userReviews)
  // const newUserReviews = userReviews
  const dispatch = useDispatch()


  const userReviewVals = Object.values(userReviews)
  const [isLoaded, setIsLoaded] = useState(false)

  console.log('userReviewVals', userReviewVals)
  useEffect(() => {
    dispatch(getUserReviewsThunk())
      .then(() => setIsLoaded(true))
  }, [dispatch])


  if (!userReviewVals.length) return(
     <h5 className="nothing-here">Nothing here... try posting a review!!</h5>
     )
  else return isLoaded &&
    (userReviewVals.map(review => (
      <div className="outer-most-review">
        <div className="review-frame">
          <div className="review-card" key={review.id}>
            <h2 className="review-spot-name">{review.Spot.name}</h2>

            {/* <div className="address-stars"> */}
            <div>{review.Spot.city}, {review.Spot.state}</div>
            {/* </div> */}

          </div>
        </div>
        <div className="review-stars-delete">
          <div>
            <div >★{review.stars}</div>
            <div className="review-area">{review.review}</div>
          </div>
          <div id="button-holder"><button className="review-pink-buttons" onClick={() => dispatch(deleteReviewThunk(review.id))}>DELETE</button></div>
        </div>
      </div>
    )))
}

export default MyReviewsIndex
