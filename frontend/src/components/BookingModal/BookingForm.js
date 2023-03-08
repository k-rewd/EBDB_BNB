import DatePicker from 'react-datepicker'

import React, { useEffect, useState } from "react";
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { newBookingThunk } from '../../store/bookings';
import './BookingForm.css'
import "react-datepicker/dist/react-datepicker.css";


const BookingForm = ({ spot }) => {
  const dispatch = useDispatch()
  // const { spotId } = useParams()
  const sessionUser = useSelector(state => state.session.user)
  const spotPrice = useSelector(state => state.spots.singleSpot.price)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showModal, setShowModal] = useState(false);




  const numDays = (startDate, endDate) => {
    let difInTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(difInTime / (1000 * 3600 * 24));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      spotId: spot.id,
      userId: sessionUser.id,
      startDate,
      endDate

      // spotId: spot.id,
      // userId: req.user.id,
      // startDate: startDate,
      // endDate: endDate
    }
    console.log('booking payload',payload)
    const data = await dispatch(newBookingThunk(payload))
    if (data) {
      console.log('works!')
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }

  return (
    <div>
      <div >
        <div id='booking-dates'>
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
        </div>

        <button id='booking-reserve' onClick={() => setShowModal(true)}>Reserve</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} id='booking-conf-modal'>
            <div id='booking-conf-modal'>
              <div className='booking-fees'>${spotPrice} x {numDays(startDate, endDate)} nights</div>
              <div>${numDays(startDate, endDate) * spotPrice}</div>
            </div>
            <div>{startDate.getUTCFullYear()}</div>
            <div>{startDate.getDay()}</div>
            <div>{startDate.toISOString().slice(0, 10)}</div>




            <form onSubmit={handleSubmit}>
            <button type='submit'>submit</button>
            </form>
          </Modal>
        )}

      </div>




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