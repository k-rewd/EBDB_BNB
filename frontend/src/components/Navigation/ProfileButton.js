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
        <button className='icon-drop-menu'onClick={openMenu}>
          <img id="drop-menu-icon-style" src="https://www.pngrepo.com/png/315765/180/profile.png" alt='' />
        </button>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div className="dropdown-top">
            <div className="profile-dropdown-username"> Hello, {user.firstName}</div>
          
          <div><NavLink to="/current"><button className="button-style">Manage Listings</button></NavLink></div>
          <div><NavLink to={"/reviews/current"}><button className="button-style">Manage Reviews</button></NavLink></div>
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