
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { spotEdit } from '../../store/spots';

// prop {setShowModal} //
const EditSpotForm = ({ spot, setShowModal }) => {

  const dispatch = useDispatch()
  const history = useHistory();

  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state)
  const [country, setCountry] = useState(spot.country)
  const [name, setName] = useState(spot.name)
  // const [lat, setLat] = useState()
  // const [lng, setLng] = useState()
  const [description, setDescription] = useState(spot.description)
  const [price, setPrice] = useState(spot.price)
  // const [url, setURL] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [errors, setErrors] = useState(false)

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value)
  // const updateLng = (e) => setLng(e.target.value);
  // const updateLat = (e) => setLat(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  useEffect(() => {
    const errors = []
    if (!address) errors.push('Invalid address')
    else if (address.length > 20) errors.push('Address: Character limit(max 20)')
    if (!city) errors.push('Invalid city')
    else if (city.length > 20) errors.push('City: Character limit(max 20)')
    if (!state) errors.push('Invalid state')
    else if (state.length < 2 || state.length > 20) errors.push('State: Character limit(2~20)')
    if (!country) errors.push('Invalid country')
    else if (country.length > 20) errors.push('Country: Character limit(max 20)')
    if (!name) errors.push('Name is required')
    else if (name.length > 20) errors.push('Name: Character limit(max 20)')
    if (!description) errors.push('Description is required')
    else if (description.length > 100) errors.push('Description: Character limit(max 100)')
    if (!price) errors.push('Price per night is required')
    else if (price > 999999) errors.push('Too expensive')
    setValidationErrors(errors)
  }, [address, city, state, country, name, description, price])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(true)

    if (!validationErrors.length) {
      const payload = {
        ...spot,
        id: spot.id,
        address,
        city,
        state,
        country,
        name,
        // lat,
        // lng,
        description,
        price,
        // url
      }

      let updatedSpot = await dispatch(spotEdit(payload))
      // console.log('updatedSpot', updatedSpot)

      if (updatedSpot) {
        // history.push(`/current`)
        history.push(`/spots/${updatedSpot.id}`)

        // return <Redirect to={`/spots/${updatedSpot.id}`}/>
        setErrors(false)
        setShowModal(false)
      }
    }
  };

  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   setShowModal(false)
  // };

  return (
    <div>
      <section>

        <form onSubmit={handleSubmit}>
          <ul>
            {errors && validationErrors.length > 0 && validationErrors.map(error => (
              <li key={error}>{error}</li>))}
          </ul>
          <label>
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={updateAddress} />
          </label>
          <label>
            <input
              type='text'
              placeholder='City'
              value={city}
              onChange={updateCity} />
          </label>
          <label>
            <input
              type='text'
              placeholder='State'
              value={state}
              onChange={updateState} />
          </label>
          <label>
            <input
              type='text'
              placeholder='Country'
              value={country}
              onChange={updateCountry} />
          </label>
          <label>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={updateName} />
          </label>
          {/* <input
          type='number'
          placeholder='L'
          value={address}
          onChange={updateLng}/>
                    <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={updateLng}/> */}
          <label>
            <input
              type='text'
              placeholder='Description'
              value={description}
              onChange={updateDescription} />
          </label>
          <label>
            <input
              type='number'
              placeholder='Price'
              value={price}
              onChange={updatePrice} />
          </label>
          <button type="submit">Edit</button>
          {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}
        </form>
      </section>
    </div>
  )
}

export default EditSpotForm;