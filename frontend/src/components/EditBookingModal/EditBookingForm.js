import DatePicker from 'react-datepicker'

import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookingThunk } from '../../store/bookings';

import './EditBooking.css'

const EditBookingForm = ({ setShowModal, bookings }) => {
  const dispatch = useDispatch()


  const [startDate, setStartDate] = useState(new Date(bookings.startDate))
  const [endDate, setEndDate] = useState(new Date(bookings.endDate))

  const [showEditCal, setShowEditCal] = useState(false)

  const sessionUser = useSelector(state => state.session.user)
  console.log('edit bookings', bookings)

  const numDays = (startDate, endDate) => {
    let difInTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(difInTime / (1000 * 3600 * 24));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      spotId: bookings.spotId,
      userId: sessionUser.id,
      startDate,
      endDate
    }
    const data = await dispatch(updateBookingThunk(payload))

    if (data) {
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }

  // useEffect

  return (
    <div>
      <div>
        <h3>Booking Details</h3>
        <div id='edit-booking-modal'>
          <div id='eb-spot-details'>
            <div>{bookings.Spot.name}</div>
            <div>{bookings.Spot.address}</div>
            <div>{bookings.Spot.city}, {bookings.Spot.state}</div>
          </div>
          <div id='eb-dates-container'>
            <div id='eb-dates'>
              <div>{startDate.toDateString()} to {endDate.toDateString()}</div>
              <div>{!showEditCal ?
                <button className='change-confirm' onClick={() => setShowEditCal(true)}>change</button> :
                <button className='change-confirm' onClick={() => setShowEditCal(false)} >confirm</button>}
              </div>
            </div>
            {showEditCal && (
              <div className='eb-booking-dates'>
                <div className='booking-checkin'>
                  <label className='check-in-out'>CHECK-IN</label>
                  <DatePicker
                    className='datePicker'
                    selected={startDate}
                    onSelect={(date) => setStartDate(date)}
                  />
                </div>
                <div className='booking-checkout'>
                  <label className='check-in-out'>CHECKOUT</label>
                  <DatePicker
                    className='datePicker'
                    selected={endDate}
                    onSelect={(date) => setEndDate(date)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className='bcm-booking-charges'>
            <div className='booking-fees'>${bookings.Spot.price} x {numDays(startDate, endDate)} nights</div>
            <div>${numDays(startDate, endDate) * bookings.Spot.price}</div>
          </div>
          <div className='booking-charges'>
            <div className='booking-fees'>Cleaning fee</div>
            <div>$150</div>
          </div>
          <div className='booking-charges'>
            <div className='booking-fees'>EBDBBnB service fee </div>
            <div>$313</div>
          </div>
          <div className='booking-charges'>
            <div className='booking-fees'>Tax </div>
            <div>${Math.floor((numDays(startDate, endDate) * bookings.Spot.price + 150 + 313) * .14)}</div>
          </div>
          <div id='bcm-booking-total'>
            <div>Your Total</div>
            <div>${numDays(startDate, endDate) * bookings.Spot.price + 150 + 313}</div>
          </div>
          <form onSubmit={handleSubmit}>
            <button id='bcm-bookspot' type='submit'>Book</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditBookingForm

