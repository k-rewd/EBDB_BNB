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
      <h2 className="welcome-message">Welcome to the EBDB BnB</h2>
      <form onSubmit={handleSubmit}>
        <div className='user-input-action-button'>




          
            {/* <label className='input-prompt-label'> Username or Email </label> */}
            <input className='login-username-email'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder="Username or Email"
              
              />
              
         

          
            {/* <label className='input-prompt-label'> Password</label> */}
            <input className='login-password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
               />
          



          <div className='two-buttons-row'>
            <div><button className='pink-buttons' type="submit">Log In</button></div>
            <div><button className='pink-buttons' onClick={() => {
              setCredential("Childish")
              setPassword("password")
            }}>DEMO USER</button>
            </div>
          </div>
        </div>



        <div className="error-message-container">
          <ul>
            {errors.map((error, idx) => (
              <li className="error-messages" key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;