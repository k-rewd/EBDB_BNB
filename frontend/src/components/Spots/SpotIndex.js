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

  if (!spots) {
    return null
  } else {
    return (
      <div id="outer-most-spots">
        <div className="frame">
          {Object.values(spots).map(spot => (
            <NavLink to={`/spots/${spot.id}`} >
              <div className="spot-card-flex-column">
                <div>
                  <img className="spot-image" src={spot.previewImage} alt='img' />
                </div>
                <div id="cityState-avgRating-flex-row">
                  <div>
                    {spot.city}, {spot.state}
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
                <div id="spot-price-night">
                  <div id="spot-price">
                    $ {spot.price}
                  </div>
                  <div id="spot-night">
                    night
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    )
  }
}

export default SpotIndex;