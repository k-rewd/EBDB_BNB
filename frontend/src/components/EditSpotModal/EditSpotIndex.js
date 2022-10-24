import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';

function EditSpotModal({spot}) {
  const [ showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='editspot-pink-buttons' onClick={() => setShowModal(true)}>Edit a Spot</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditSpotForm spot={spot} setShowModal={setShowModal}/>
      </Modal>
    )}
    </>
  )
}

export default EditSpotModal;