// frontend/src/components/Navigation/index.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CreateSpotModal from '../CreateSpotModal';
// import UserSpotsIndex from '../UserSpots/UserSpotsIndex';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <ProfileButton user={sessionUser} />
        
        {/* <CreateSpotModal />
        <NavLink to="/current">My Spots</NavLink>
        <NavLink to={"/reviews/current"}>My Reviews</NavLink> */}
      </div>
    );
  } else {
    sessionLinks = (
      <div className='login-sign-up-row'>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='nav-frame'>
      <div>
        <NavLink exact to="/"><img src="https://i.pinimg.com/originals/34/90/aa/3490aa998d1abe961178cd827500926d.jpg"
        alt="logo" style={{ margin:'0px', padding:'0px' }} /></NavLink>
      </div>
      <div>
        {isLoaded && sessionLinks}
      </div>

    </div>
  );
}

export default Navigation;