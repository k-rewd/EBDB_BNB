import { csrfFetch } from "./csrf";

const GET_USER_BOOKINGS = 'bookings/getUserBookings';
const GET_SPOT_BOOKINGS = 'bookings/getSpotBookings';
const NEW_BOOKING = 'bookings/newBooking';
const UPDATE_BOOKING = 'bookings/updateBooking';
const DELETE_BOOKING = 'bookings/deleteBooking';
// const RESET_BOOKING = 'bookings/resetBooking';

const actionGetUserBookings = (payload) => {
  return {
    type: GET_USER_BOOKINGS,
    payload
  }
}

const actionGetSpotBookings = (payload) => {
  return {
    type: GET_SPOT_BOOKINGS,
    payload
  }
}

const actionNewBooking = (payload) => {
  return {
    type: NEW_BOOKING,
    payload
  }
}

const actionUpdateBooking = (payload) => {
  return {
    type: UPDATE_BOOKING,
    payload
  }
}

const actionDeleteBooking = (payload) => {
  return {
    type: DELETE_BOOKING,
    payload
  }
}

// export const actionResetBooking = () => {
//   return {
//     type: RESET_BOOKING,
//     data: {}
//   }
// }


// Get all of the Current User's Bookings /api/bookings/current
export const getUserBookingsThunk = () => async dispatch => {
  const response = await csrfFetch('/api/bookings/current');
  if (response.ok) {
    const userBookings = await response.json()
    await dispatch(actionGetUserBookings(userBookings))
    return userBookings
  }
  return;
}

// Get all Bookings for a Spot based on the Spot's id /spots/:spotId/bookings
export const getSpotBookingsThunk = (payload) => async dispatch => {
  const response = await fetch(`/api/spots/${payload}/bookings`);
  console.log('response from bookings thunk', response)
  if(response.ok) {
    const spotBookings = await response.json();
    await dispatch(actionGetSpotBookings(spotBookings))
    return spotBookings
  }
  return;
}

// Create a Booking from a Spot based on the Spot's id /spots/:spotId/bookings
export const newBookingThunk = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${payload.spotId}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const newBooking = await response.json();
    await dispatch(actionNewBooking(newBooking))
    return newBooking
  }
  return;
}

// Update and return an existing booking. /api/bookings/:bookingId
export const updateBookingThunk = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const updatedBooking = await response.json();
    await dispatch(actionUpdateBooking(updatedBooking))
    return updatedBooking
  }
  return;
}

// Delete booking /api/bookings/:bookingId
export const deleteBookingThunk = (id) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    await dispatch(actionDeleteBooking(id));
  }
  return;
}

const initialState = {
  // userBookings: {},
  // spotBookings: {}
}

export const bookingReducer = (state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case GET_USER_BOOKINGS:
      // newState = {}
      action.payload.Bookings.forEach(booking => {
        newState[booking.id] = { ...newState[booking.id], ...booking}
      })
      return newState
      
    case GET_SPOT_BOOKINGS:
      // newState = {}
      action.payload.Bookings.forEach(booking => {
        newState[booking.id] = { ...newState[booking.id], ...booking}
      });
      // console.log('newState from reducer', newState)
      return newState

    case NEW_BOOKING:
      newState[action.payload.id] = action.payload
      return newState

    case UPDATE_BOOKING:
      newState[action.payload.id] = { ...newState[action.payload.id], ...action.payload }
      return newState

    // case RESET_BOOKING:
    //   return initialState

    case DELETE_BOOKING:
      delete newState[action.payload]
      return newState
      
    default:
      return state;
    
  }
}