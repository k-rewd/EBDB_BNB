import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserBookingsThunk } from "../../store/bookings"
import './MyBookings.css'

const MyBookingsIndex = () => {

  const dispatch = useDispatch()



  const userBookings = useSelector(state => state.bookings)
  console.log('userBookings', userBookings)

  useEffect(() => {
    dispatch(getUserBookingsThunk())
  }, [dispatch])

  return (
    <div id='mb-outer'>
      <div id='mb-main'>
        <div id='mb-frame'>
          {Object.values(userBookings).map(booking => (
            <div key={booking.id}>
              {booking.id}
              <div>{booking.startDate}{booking.endDate}
              </div>

              <div>
              {/* <img src={booking.Spot.previewImage}/> */}
              {booking.Spot.id}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )

}

export default MyBookingsIndex