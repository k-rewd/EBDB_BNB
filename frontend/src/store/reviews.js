import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'review/getReviews'
const GET_SPOT_REVIEWS = 'review/getSpotReviews'
const CREATE_REVIEW = 'review/createReview'
const DELETE_REVIEW = 'review/delete'


const getReviewsAction = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  }
}

const getSpotReviewsAction = (spot) => {
  return {
    type: GET_SPOT_REVIEWS,
    spot
  }
}

const createReviewAction = (spot) => {
  return {
    type: CREATE_REVIEW,
    spot
  }
}

const deleteReviewAction = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const getUserReviewsThunk = () => async dispatch => {
  const response = await csrfFetch('/api/reviews/current');
  if (response.ok) {
    const reviews = await response.json();
    await dispatch(getReviewsAction(reviews))
    // console.log('THUNK getuserreviews', reviews)
    return reviews
  }
  return null
}

export const getSpotReviewsThunk = (spotId) => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/reviews`);
  // console.log('THUNKBEFORE', response)
  if (response.ok) {
    const reviews = await response.json();
    await dispatch(getSpotReviewsAction(reviews))
    // console.log('THUNKAFTER', reviews)
    return reviews
  }
  return null
}

export const createReviewThunk = (spotId, spot) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  })
  if (response.ok) {
    const review = await response.json()
    await dispatch(createReviewAction(review))
    // console.log('reviewfromthunk', review)
    return review
  }
  return null
}

export const deleteReviewThunk = (reviewId) => async dispatch => {
  // console.log('reviewId from thunk', reviewId)
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    // await response.json()
    
    dispatch(deleteReviewAction(reviewId))
  }
}

const initialState = {
  userReviews: {},
  spotReviews: {}
}

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = { ...state,  userReviews:{ ...state.userReviews}}
      let myReviews = {}
      action.reviews.Reviews.forEach(review => {
        myReviews[review.id] = review
      })

      newState.userReviews = myReviews
      return newState

    case GET_SPOT_REVIEWS:
      newState = { ...state, spotReviews:{ ...state.spotReviews}}
      let newReviews = {}
      action.spot.Reviews.forEach(review => {
        newReviews[review.id] = review
      })
      newState.spotReviews = newReviews
      return newState

    case CREATE_REVIEW:
      newState = { ...state }
      // newState.spotReviews = {...state.spotReviews}
      newState.spotReviews[action.spot.id] = action.spot
      newState.userReviews = action.spot
      return newState

    case DELETE_REVIEW:
      newState = { ...state, userReviews:{ ...state.userReviews}}

      delete newState.userReviews[action.reviewId]
      return newState;

    default:
      return state
  }
}

export default reviewReducer