// frontend/src/components/Navigation/index.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
// import CreateSpotModal from '../CreateSpotModal';
// import UserSpotsIndex from '../UserSpots/UserSpotsIndex';
import './Navigation.css';
import { searchThunk } from '../../store/search';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const [query, setQuery] = useState('');
  const [searchBox, setSearchBox] = useState(false);
  const [searchContainer, setSearchContainer] = useState(false)

  // console.log('searchBox', searchBox)
  // console.log('searchCOntainer', searchContainer)
  const newQuery = (e) => {
    setQuery(e.target.value);
    return
  }

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };

  useEffect(() => {
    if (query == '') {
      setSearchContainer(false)
      return
    }
    if (query) {
      const getData = async () => {
        const result = await dispatch(searchThunk(query))
        // console.log('is it working RESULT', result)
        if (result) {
        // console.log('is it working RESULT', result)

          setSearchBox(result)
          
          setSearchContainer(true)
          return
        }
      } 
      getData()
      setSearchBox(false)

      return
    }
  }, [query, dispatch])

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    const clickAway = () => {
      setSearchContainer(false)
    }
    document.addEventListener('click', clickAway);
    return () => document.removeEventListener('click', clickAway);
  },[searchContainer])

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
        <NavLink to="/signup"><strong className='sign-up-button'>SIGN UP</strong></NavLink>
      </div>
    );
  }

  return (
    <div className='nav-frame'>
      <div style={sessionUser ? {width:'280px'} : {width:'166px'}}>
        <NavLink exact to="/"><img id='ebdbbnb-icon' src="https://i.pinimg.com/originals/34/90/aa/3490aa998d1abe961178cd827500926d.jpg"
        alt="logo" style={{ margin:'0px', padding:'0px' }} /></NavLink>
      </div>
      <div id='search-bar'>
        <form >
          <div className='input-box'>
            <input className='search-bar-input'
            placeholder='search...'
            type='search'
            value={query}
            onChange={newQuery}/>
          </div>
        </form>
        {searchContainer ? 
        <div className='search-results'>
          {query && searchContainer &&
          <div >
            {searchBox.length > 0 ? <div className='search-name'>{searchBox.map((data)=> (
              <NavLink key={data.id} to={`/spots/${data.id}`} className='one-search'>
                <div>{data.name}</div>
                <div className='search-city-state'>{data.city}, {data.state}</div>
                </NavLink>
              ))}
              </div>:
              <div>No results found!</div>
              }
        </div>
        }
      </div>:null}
      </div>



      <div>
        {isLoaded && sessionLinks}
      </div>
      

    </div>
  );
}

export default Navigation;