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
      <p id='instructions'>Please sign in with your proper credentials, or click "DEMO USER" to take advantage of this website and all it's features</p>
      <form onSubmit={handleSubmit} id='login-form'>

        <div className='login-info-container'>
          <label className='input-prompt-label'> Username or Email </label>
          <input className='login-info'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or Email"
          />
        </div>

        <div className='login-info-container'>
          <label className='input-prompt-label'> Password</label>
          <input className='login-info'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>




      </form>
      <div className="error-message-container">
        <ul>
          {errors.map((error, idx) => (
            <li className="error-messages" key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      <div className='two-buttons-row'>
        <div><button className='pink-buttons' type="submit">Log In</button></div>
        <div><button className='pink-buttons' onClick={() => {
          setCredential("Childish")
          setPassword("password")
        }}>DEMO USER</button>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;