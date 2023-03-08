import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import CreateSpotModal from '../CreateSpotModal';

import './Navigation.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <div className="dropdown-createspot">
      <div><CreateSpotModal /></div>
        <button className='icon-drop-menu' onClick={openMenu}>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-circle-user"></i>
        </button>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="dropdown-top">
            <div className="profile-dropdown-username"> Hello, <strong id='user-username'>{user.username}</strong></div>
          
          <div><NavLink to="/current"><button className="button-style">Manage Listings</button></NavLink></div>
          <div><NavLink to={"/reviews/current"}><button className="button-style">Manage Reviews</button></NavLink></div>
          <div><NavLink to={"/bookings/current"}><button className="button-style">Manage Bookings</button></NavLink></div>

          <div>
            <button className="button-style" onClick={logout}>Log Out</button>
          </div>
          </div>
        </div>
      )}

    </>
  );
}

export default ProfileButton;