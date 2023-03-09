import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import EditBookingForm from "./EditBookingForm";
import './EditBooking.css'


function EditBookingModal({bookings}) {
  const [ showModal, setShowModal] = useState(false);

  return (
    <>
    <button id='mb-edit' onClick={() => setShowModal(true)}>edit</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditBookingForm setShowModal={setShowModal} bookings={bookings}/>
      </Modal>
    )}
    </>
  )
}

export default EditBookingModal;