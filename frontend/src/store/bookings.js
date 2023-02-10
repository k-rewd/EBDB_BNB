const GET_ALL_BOOKINGS = 'bookings/getAllBookings';
const NEW_BOOKING = 'bookings/newBooking';
const UPDATE_BOOKING = 'bookings/updateBooking';
const DELETE_BOOKING = 'bookings/deleteBooking';

const actionGetBookings = (payload) => {
  return {
    type: GET_ALL_BOOKINGS,
    payload
  }
}

const actionNewBooking = (payload) => {
  return  {
    type: NEW_BOOKING,
    payload
  }
}

