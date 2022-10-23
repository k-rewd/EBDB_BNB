// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css'


function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='login-form-modal'>
      <div className="welcome-message">Welcome to the EBDB BnB</div>
      <form onSubmit={handleSubmit}>
        <div className="error-message-container">
          <ul>
            {errors.map((error, idx) => (
              <li className="error-messages" key={idx}>{error}</li>
            ))}
          </ul>
        </div>
        <div className='user-input-action-button'>
          <label className='input-prompt-label'>
            Username or Email </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          
          <label className='input-prompt-label'>
            Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <div><button className='demo-user' type='submit' onClick={() => {
            setCredential("Childish")
            setPassword("password")
          }}>DEMO USER</button></div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;