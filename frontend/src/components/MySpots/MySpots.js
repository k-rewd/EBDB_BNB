import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { currOwnerSpots, spotRemove } from "../../store/spots"
import EditSpotModal from "../EditSpotModal/EditSpotIndex"
import '../Spots/SpotIndex.css'
import './MySpots.css'

const MySpotsIndex = () => {
  const userSpots = useSelector(state => state.spots.allSpots)
  // const spotOwner = useSelector(state => state.session.user)
  
  const [isLoaded, setIsLoaded] = useState(false)

  // const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currOwnerSpots()).then(() => setIsLoaded(true))
  }, [dispatch])

  // console.log('userSpots from CurrentSpots component', userSpots)
  // useEffect(() => {
  //   dispatch(spotAdd())
  // }, [dispatch])

  // console.log('user', user)

  // const objValue = Object.values(userSpots)
  // console.log('lookatme', objValue)
  // const filtered = objValue.filter(spot => spot.ownerId === user.id)

  if (!Object.values(userSpots).length) {
    return (<h5 className="nothing-here">Nothing here... try becoming a host!</h5>)
  } else {
    return isLoaded && (Object.values(userSpots).map(spot => (
      
      <div id="outer-most-my-spots">
      <div className="frame-mySpots">
      <div key={spot.id}>
        <NavLink to={`/spots/${spot.id}`}>
        {/* <div className="my-spots-title-row"><h1 id="my-spots-h1">{spotOwner.firstName}'s Spots</h1></div> */}
          
              <div >
                <div>
                  <img className="my-spot-image" onError={(e)=> e.target.src="https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spot.previewImage} alt='img' />
                </div>
                <div className="cityState-avgRating-flex-row">
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
                <div className="spot-price-night">
                  <div id="spot-price">
                    $ {spot.price}
                  </div>
                  <div id="spot-night"> night</div>
                </div>
              </div>
        </NavLink>
        <div id="delete-edit">
        <button className='editspot-pink-buttons' onClick={() => { dispatch(spotRemove(spot.id)) }}>DELETE</button>
        {/* .then(()=>dispatch(currOwnerSpots())) */}
        <EditSpotModal spot={spot} />
        </div>
      </div>
    </div>
    </div>
  )))
  }
}

export default MySpotsIndex