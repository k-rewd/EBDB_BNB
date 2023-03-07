import DatePicker from 'react-datepicker'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { newBookingThunk } from '../../store/bookings';
import './BookingModal.css'
import "react-datepicker/dist/react-datepicker.css";


const BookingForm = ({ spot }) => {
  const dispatch = useDispatch()
  // const { spotId } = useParams()
  const spotPrice = useSelector(state => state.spots.singleSpot.price)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showBookingModal, setShowBookingModal] = useState(false)



  const numDays = (startDate, endDate) => {
    let difInTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(difInTime / (1000 * 3600 * 24));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      id: spot.id,
      booking: { startDate, endDate }
    }
    const data = await dispatch(newBookingThunk(payload))
    if (data) {
      console.log('works!')
      setShowBookingModal(false)
    } else {
      setShowBookingModal(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id='booking-modal'>

        <div className='booking-checkin'>
          <label className='check-in-out'>CHECK-IN</label>
          <DatePicker
            className='datePicker'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className='booking-checkout'>
          <label className='check-in-out'>CHECKOUT</label>
          <DatePicker
            className='datePicker'
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div>
          <button id='booking-reserve' type='submit'>Reserve</button>
        </div>

      </form>
      {/* <div>{console.log(startDate.getTime())}hello{startDate.getDate()}</div> */}
      <div id='booking-nocharge'>You won't be charged yet</div>
      <div className='booking-charges'>
        <div className='booking-fees'>${spotPrice} x {numDays(startDate, endDate)} nights</div>
        <div>${numDays(startDate, endDate) * spotPrice}</div>
      </div>
      <div className='booking-charges'>
        <div className='booking-fees'>Cleaning fee</div>
        <div>$150</div>
      </div>
      <div className='booking-charges'>
        <div className='booking-fees'>EBDBBnB service fee </div>
        <div>$313</div>
      </div>
      <div id='booking-total'>
        <div>Total before taxes</div>
        <div>${numDays(startDate, endDate) * spotPrice + 150 + 313}</div>
      </div>

    </div>
  )
}

export default BookingForm