import DatePicker from 'react-datepicker'

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { newBookingThunk } from '../../store/bookings';


const BookingForm = ({ spot }) => {
  const dispatch = useDispatch()
  // const { spotId } = useParams()

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()

    const payload = {
      id: spot.id,
      booking: {startDate, endDate}
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
    <form onSubmit={handleSubmit}>
      <div>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        />
      </div>
      <div>
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        />
      </div>
    </form>
  )
}

export default BookingForm