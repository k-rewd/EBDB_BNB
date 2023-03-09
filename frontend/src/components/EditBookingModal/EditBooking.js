import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import EditBookingForm from "./EditBookingForm";


function EditBookingModal({bookings}) {
  const [ showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}>edit</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditBookingForm setShowModal={setShowModal} bookings={bookings}/>
      </Modal>
    )}
    </>
  )
}

export default EditBookingModal;