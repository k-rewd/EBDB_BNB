import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotForm from './CreateSpotForm';
import './CreateSpotForm.css'

function CreateSpotModal() {
  const [ showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='createSpotModal-button' onClick={() => setShowModal(true)}>EBDBBnB your home</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <CreateSpotForm setShowModal={setShowModal} />
      </Modal>
    )}
    </>
  )
}

export default CreateSpotModal;