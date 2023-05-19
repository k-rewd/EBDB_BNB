import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { spotGet } from "../../store/spots"
import './SpotIndex.css'

const SpotIndex = () => {
  const spots = useSelector(state => state.spots.allSpots)
  // const user = useSelector((state) => state.session.user)

  // console.log('spots', spots)
  // console.log('userrr', user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(spotGet())
  }, [dispatch])

  // Object.values(allSpots).map(spot => (
  //   console.log('LOOKHERE', spot)
  // ))

  // if (!spots) {
  //   return null
  // } else {
  return (
    <div>
      <div id="dev-icons">
        <span id="dev-button-container">
          <a href='https://github.com/k-rewd' target='_blank' rel='noreferrer'>
          <i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/andrew-k-474479123/" target='_blank' rel='noreferrer'>
          <i class="fa-brands fa-linkedin"></i></a>
          <a href="https://angel.co/u/andrew-kim-174" target='_blank' rel='noreferrer'>
          <i class="fa-brands fa-angellist"></i></a>
          <a href="https://k-rewd.github.io/" target='_blank' rel='noreferrer'>
          <i class="fa-brands fa-dev"></i></a>
        </span>
      </div>
      <div id="outer-most-spots">
        <div className="frame">
          {Object.values(spots).map(spot => (
            <div className="single-card" key={spot.id}>
              <NavLink to={`/spots/${spot.id}`} >
                <div className="spot-card-flex-column">
                  <div id='single-card-img-container'>
                    <img onError={(e) => e.target.src= "https://cdn-icons-png.flaticon.com/512/70/70644.png"} className="spot-image" src={spot.previewImage} alt='img' />
                  </div>
                  <div className="cityState-avgRating-flex-row">
                    <div className="city-state">
                      {spot.city}, {spot.state}, {spot.country}
                    </div>
                    <div>
                      ★{spot.avgRating}
                    </div>
                  </div>
                  <div>
                    {spot.name}
                  </div>
                  <div>
                    {spot.address}
                  </div>
                  <div className="spot-price-night">
                    <div id="spot-price">
                      ${spot.price}
                    </div>
                    <div id="spot-night">
                      night
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  // }
}

export default SpotIndex;