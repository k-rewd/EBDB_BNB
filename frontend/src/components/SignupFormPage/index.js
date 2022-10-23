import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  console.log('firing')
  const handleSubmit = (e) => {
    e.preventDefault();
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="sign-up-outer-most">
        <form onSubmit={handleSubmit} >
          <h4 id="welcome"> Welcome to the Eskimo Brothers Data Base Bed & Breakfast</h4>
          <ul className="sign-up-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <div className="sign-up-form-content-area">
            <label>
              FirstName
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              LastName
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button className="wide-pink-buttons" type="submit">Sign Up</button>
          </div>
        </form>
      </div>

  );
}

export default SignupFormPage;