import { csrfFetch } from './csrf';


const GET_SPOTS = 'spots/getSpots'
// const CURRENT_SPOT = 'spots/currentSpot'
const ONE_SPOT = 'spot/oneSpot'
// const EDIT_SPOT = 'spot/editSpot'
const CREATE_SPOT = 'spots/createSpot'
const REMOVE_SPOT = 'spots/removeSpot'
const RESET_SPOT = 'spots/resetSpot'

//---Action---//
const getSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots
  }
}

const oneSpot = (spot) => {
  return {
    type: ONE_SPOT,
    spot
  }
}

const addSpot = (spot) => {
  return {
    type: CREATE_SPOT,
    spot
  }
}


// const editSpot = (spot) => {
//   return {
//     type: EDIT_SPOT,
//     spot
//   }
// }

const removeSpot = (spotId) => {
  return {
    type: REMOVE_SPOT,
    spotId
  }
}

export const resetSpot = () => {
  return {
    type: RESET_SPOT
  }
}

//---Thunk---//
export const spotGet = () => async dispatch => {
  const response = await fetch(`/api/spots`);
  if (response.ok) {
    const spots = await response.json();
    await dispatch(getSpots(spots))
    return spots
  }
  return null
}

export const spotOne = (spot) => async dispatch => {
  const response = await fetch(`/api/spots/${spot}`);
  if (response.ok) {
    const spot = await response.json()
    await dispatch(oneSpot(spot))
    return spot
  }
  return null
}

export const currOwnerSpots = () => async dispatch => {
  const response = await csrfFetch(`/api/spots/current`);
  if (response.ok) {
    const spots = await response.json();
    // console.log('currentOwnerSpots from Thunk ------> ', spots)
    await dispatch(getSpots(spots))
    return spots
  }
  return null
}

export const spotAdd = (spot) => async dispatch => {
  const response = await csrfFetch(`/api/spots`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  })
  if (response.ok) {
    const spot = await response.json()
    await dispatch(spotOne(spot.id))
    return spot
  }
  return null
}

export const spotEdit = (spot) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spot.id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(spot)
  })
  // console.log('spot from spotedit', spot)
  if(response.ok) {
    const spot = await response.json()
    await dispatch(addSpot(spot))
    return spot
  }
  return null
}

export const spotRemove = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    // const removedSpot = await response.json()
    // console.log('removed Spot from thunk', removedSpot)
    dispatch(removeSpot(spotId))
  }
  return null
}

//--------------//
const initialState = {
  allSpots: {},
  singleSpot: {}
}
//--------------//


//---Reducer---//
const spotReducer = (state = initialState, action) => {
  let newState;
  // let allSpots = { ...state }
  // let spots = {}
  // let singleSpot = {}
  // let singleSpot = {}
  switch (action.type) {
    case GET_SPOTS:
      let newAllSpots = {}
      newState = { ...state, allSpots: {...state.allSpots} }
      // console.log('newSTate from Reducer =-====> ', newState)
      action.spots.Spots.forEach(spot => {
        newAllSpots[spot.id] = spot
      })
      newState.allSpots = newAllSpots
      // console.log('allSpots from Reducer =-====> ', allSpots)
      return newState

    

    case CREATE_SPOT:
      newState = { ...state }
      newState.allSpots = {...state.allSpots}
      newState.allSpots[action.spot.id] = action.spot
      newState.singleSpot = action.spot
      return newState

    case ONE_SPOT:
      newState = { ...state, singleSpot: {...state.singleSpot}} // change to state maybe
      
      newState.singleSpot = { ...action.spot }
      return newState

    // case EDIT_SPOT:
    //   newState = { ...state, singleSpot: {...state.singleSpot}, allSpots: {...state.allSpots}}

    // return

    case RESET_SPOT:
      return initialState

    case REMOVE_SPOT:
      newState = { ...state, allSpots: {...state.allSpots}}
      
      delete newState.allSpots[action.spotId]
      return newState;

    default:
      return state
  }
}

// function normalize(data) {
//   const obj = {}
//   data.spots.forEach(ele => {
//     obj[ele.id] = ele
//   })
//   return obj
// }

export default spotReducer
