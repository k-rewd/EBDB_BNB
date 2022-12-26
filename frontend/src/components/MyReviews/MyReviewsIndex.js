import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviewsThunk, deleteReviewThunk } from "../../store/reviews"
import './Review.css'



const MyReviewsIndex = () => {
  const userReviews = useSelector(state => state.reviews.userReviews)
  const sessionUser = useSelector(state => state.session.user)

  // const newUserReviews = userReviews
  const dispatch = useDispatch()


  const userReviewVals = Object.values(userReviews)
  const [isLoaded, setIsLoaded] = useState(false)

  console.log('userReviewVals', userReviewVals)
  useEffect(() => {
    dispatch(getUserReviewsThunk())
      .then(() => setIsLoaded(true))
  }, [dispatch])


  if (!userReviewVals.length) return (
    <h5 className="nothing-here">Nothing here... try posting a review!!</h5>
  )
  else return isLoaded && (
    <div className="outer-most-review">
      <div className='myspots-header'>
        <div className='user-listings'>
          <div className='user-name'>{sessionUser.username}'s</div>
          <div>Reviews</div>
        </div>
        <div>
          <div className="userspot-username">{sessionUser.firstName} {sessionUser.lastName}</div>
          <div className="user-email">{sessionUser.email}</div>
        </div>
      </div>
      <div id="myreviews-container">
        <div id="myreview-frame">
          {(userReviewVals.map(review => (

            <div id='myreview-one-review'>
              <div className="review-header">
                <div className="review-card" key={review.id}>
                  <div className="review-spot-name">
                    <span id='review-for'>
                      <div>Review for</div>
                      <div id='spot-name'>{review.Spot.name}</div>
                    </span>
                    <div>{review.Spot.city}, {review.Spot.state}</div>
                  </div>
                  <div >★ {review.stars}</div>
                </div>
              </div>
                <div className="review-stars-delete">
                  <div className="review-area">{review.review}</div>
                </div>
                <div id="button-holder"><button className="review-pink-buttons" onClick={() => dispatch(deleteReviewThunk(review.id))}>DELETE</button></div>
            </div>

          )))}
        </div>
      </div>
    </div>)
}

export default MyReviewsIndex
