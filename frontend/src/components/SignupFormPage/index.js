import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([])
  const [frontErrors, setFrontErrors] = useState(false)
  
  useEffect(() => {
    const errors = []
    if (!firstName) errors.push('Name required')
    if (!lastName) errors.push('Last name required')
    if (!email) errors.push('Email required')
    if (!username) errors.push('Username required')
    else if(username < 5 || username > 20) errors.push('Username character limite(mix:5, max 20')
    if (!password) errors.push('Password required')
    if (!confirmPassword) errors.push('Please confirm password')
    if (password !== confirmPassword) errors.push('Passwords do not match')
    setValidationErrors(errors)
  }, [firstName, lastName, email, username, password, confirmPassword])
  
  if (sessionUser) return <Redirect to="/" />
  
  // console.log('firing')
  const handleSubmit = (e) => {
    e.preventDefault();
    setFrontErrors(true)
    if (!validationErrors.length) // maybe delete
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        // console.log('data!!!', data)
        // if (data && data.message) setErrors([data.message])
      });
    }
    // console.log('errorrrrss', errors)
    setFrontErrors(false)
    return setErrors(['Confirm Password field must be the same as the Password field']);

  };

  return (
    <div className="sign-up-outer-most">
      <form onSubmit={handleSubmit} >
        <h4 id="welcome"> Welcome to the Eskimo Brothers Data Base Bed & Breakfast</h4>
        <ul className="sign-up-errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <ul>
          {frontErrors && validationErrors.length > 0 && validationErrors.map(error => (
            <li className="error-messages" key={error}>{error}</li>))}
        </ul>
        <div className="sign-up-form-content-area">
          <label>
            First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required />

          <label>
            Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required />

          <label>
            Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

          <label>
            Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />

          <label>
            Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />

          <label>
            Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required />

          <button className="pink-buttons" type="submit">Sign Up</button>
        </div>
      </form>
    </div>

  );
}

export default SignupFormPage;