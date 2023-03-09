import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'

import { deleteBookingThunk, getUserBookingsThunk } from "../../store/bookings"
import EditBookingModal from "../EditBookingModal/EditBooking"
import './MyBookings.css'

const MyBookingsIndex = () => {

  const dispatch = useDispatch()

  const userBookings = useSelector(state => state.bookings)
  console.log('userBookings', userBookings)


  const dateMod = (date) => {
    let resDate = new Date(date)
    return resDate.toDateString()
  }


  useEffect(() => {
    dispatch(getUserBookingsThunk())
  }, [dispatch])

  return (
    <div id='mb-outer'>
      <div id='mb-main'>
        <div id='mb-frame'>
          {Object.values(userBookings).map(booking => (
            <div key={booking.id} id='mb-card'>
              <div id='mb-img-container'>
                <NavLink to={`/spots/${booking.Spot.id}`} >
                  <img id='mb-card-img' src={booking.Spot.previewImage} />
                </NavLink>
                <div id='mb-info'>
                  <div id='mb-name-place'>
                    <div id='mb-spot-name'>{booking.Spot.name}</div>
                    <div id='mb-city-country'>{booking.Spot.city}, {booking.Spot.country}</div>
                  </div>
                  <div id='mb-dates'>{dateMod(booking.startDate)} - {dateMod(booking.endDate)}</div>
                  <div id='mb-confNum'>
                    <div id='bookingNum'>BOOKING #</div>
                    <div>183KI{booking.id}</div>
                  </div>
                </div>
              </div>
              <div id='mb-edit-del'>
                <button id='mb-edit'>edit </button>
                <EditBookingModal bookings={booking}/> |
                <button id='mb-delete' onClick={() =>dispatch(deleteBookingThunk(booking.id))}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default MyBookingsIndex