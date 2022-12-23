// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css'


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='log-in-not-loggedin' onClick={() => setShowModal(true)}>LOG IN</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;