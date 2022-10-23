import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { currOwnerSpots, spotRemove } from "../../store/spots"
import EditSpotModal from "../EditSpotModal/EditSpotIndex"
import './MySpots.css'

const MySpotsIndex = () => {
  const userSpots = useSelector(state => state.spots.allSpots)
  // const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currOwnerSpots())
  }, [dispatch])

  // console.log('userSpots from CurrentSpots component', userSpots)
  // useEffect(() => {
  //   dispatch(spotAdd())
  // }, [dispatch])

  // console.log('user', user)

  // const objValue = Object.values(userSpots)
  // console.log('lookatme', objValue)
  // const filtered = objValue.filter(spot => spot.ownerId === user.id)


  if (!Object.values(userSpots).length) return null

  return (Object.values(userSpots).map(spot => {

    return (
          <div key={spot.id}>
            
            <NavLink to={`/spots/${spot.id}`}>
              <div>
                <ul>
                  <li>{spot.city}</li>
                  <li>{spot.address}</li>
                  <li>{spot.price}</li>
                  <img src={spot.previewImage} alt='img' />
                </ul>
              </div>
            </NavLink>
            <button onClick={() => { dispatch(spotRemove(spot.id)) }}>DELETE</button>
            {/* .then(()=>dispatch(currOwnerSpots())) */}
            <EditSpotModal spot={spot} />
          </div>

    )
  }))
}

export default MySpotsIndex