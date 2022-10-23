import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviewsThunk, deleteReviewThunk } from "../../store/reviews"



const MyReviewsIndex = () => {
  const userReviews = useSelector(state => state.reviews.userReviews)
  // const newUserReviews = userReviews
  const dispatch = useDispatch()
  

  const userReviewVals = Object.values(userReviews)
  const [isLoaded, setIsLoaded] = useState(false)

  // console.log('userReviewVals', userReviewVals)
  useEffect(() => {
    dispatch(getUserReviewsThunk())
      .then(() => setIsLoaded(true))
  }, [dispatch])


  if (!userReviewVals) return null
  else return isLoaded &&
    (userReviewVals.map(review => (
      <>
        <div key={review.id}>
          <li>{review.id}</li>
          <li>{review.userId}</li>
          <li>{review.review}</li>
        </div>
          <button onClick={() => dispatch(deleteReviewThunk(review.id))}>DELETE</button>
      </>
    )))
}

export default MyReviewsIndex


// import React, { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getUserReviewsThunk } from "../../store/reviews"

// const MyReviewsIndex = () => {
//   const userReviews = useSelector(state => state.reviews.userReviews)
//   // const user = useSelector(state => state.session.user)

//   const dispatch = useDispatch()
//   console.log('userReviews', userReviews)

//   useEffect(() => {
//     // console.log('userReviews', userReviews)
//     dispatch(getUserReviewsThunk())
//   }, [dispatch])
//   console.log('type', userReviews)
//   const reviews = Object.values(userReviews)
//   console.log('REVIEWSS', reviews)
//   if (!Object.values(userReviews).length) return null
//   return (Object.values(userReviews).map(review => {
//     return (
//       <>
//       <div>
//         {reviews && (
//           reviews.map(review => (
//             <ul>
//             <li key={review.id}>{review.stars}</li>
//             <li key={review.id}>{review.review}</li>
//             </ul>
//           ))
//         )}

//       </div>
//       </>
//     )
//   }))
// }