
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { spotAdd } from '../../store/spots';
import '../SignupFormPage/SignupForm.css'
import './CreateSpotForm.css'

// prop {setShowModal} //
const CreateSpotForm = ({ setShowModal }) => {

  const dispatch = useDispatch()
  const history = useHistory();

  // const [isLoaded, setIsLoaded] = useState(false)
  // const [reset, setReset]
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')
  // const [lat, setLat] = useState()
  // const [lng, setLng] = useState()
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [url, setURL] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [errors, setErrors] = useState(false)

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  // const updateLng = (e) => setLng(e.target.value);
  // const updateLat = (e) => setLat(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateURL = (e) => setURL(e.target.value);


  useEffect(() => {
    const errors = []
    if (!address) errors.push('Invalid address')
    else if (address.length > 20) errors.push('Address: Character limit(max 20)')
    if (!city) errors.push('Invalid city')
    else if (city.length > 15) errors.push('City: Character limit(max 15)')
    if (!state) errors.push('Invalid state')
    else if (state.length < 2 || state.length > 15) errors.push('State: Character limit(2~15)')
    if (!country) errors.push('Invalid country')
    else if (country.length > 3) errors.push('Country: Character limit(max 3)')
    if (!name) errors.push('Name is required')
    else if (name.length > 20) errors.push('Name: Character limit(max 20)')
    // else if (name.length > 20) errors.push('Name must be 20 characters or less')
    // else if (name.length < 5) errors.push('Name must be 5 characters or more')
    if (!description) errors.push('Description is required')
    else if (description.length > 255) errors.push('Description: Character limit(0~255)')
    if (!price) errors.push('Price per night is required')
    else if (price > 999999) errors.push('Too expensive')
    if (!url) errors.push('Valid image url required')

    setValidationErrors(errors)
  }, [address, city, state, country, name, description, price, url])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(true)

    if (!validationErrors.length) {
      const payload = {
        address,
        city,
        state,
        country,
        name,
        // lat,
        // lng,
        description,
        price,
        url,
        preview: true
      }

      let createdSpot = await dispatch(spotAdd(payload))
      // console.log('BEFOREcreated', createdSpot)

      if (createdSpot) {
        // console.log('AFTERcreated', createdSpot)
        history.push(`/spots/${createdSpot.id}`)
        // history.push(`/current`)
        // return <Redirect to={`/spots/${createdSpot.id}`}/>
        setErrors(false)
        setShowModal(false)
      }
    }
  }

  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   setShowModal(false)
  // };

  return (
    <div className='createspot-form-modal'>

      <div className="createspot-outer-most">
        <form onSubmit={handleSubmit}>
          <h2 id="welcome-spot">Create a Listing</h2>

          <div className="createspot-content-area">
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={updateAddress} />


            <input
              type='text'
              placeholder='City'
              value={city}
              onChange={updateCity} />


            <input
              type='text'
              placeholder='State'
              value={state}
              onChange={updateState} />


            <input
              type='text'
              placeholder='Country'
              value={country}
              onChange={updateCountry} />


            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={updateName} />


            <input
              type='text'
              placeholder='Description'
              value={description}
              onChange={updateDescription} />


            <input
              type='number'
              placeholder='Price'
              value={price}
              min='0'
              max='999999'
              onChange={updatePrice} />


            <input
              type='url'
              placeholder='Image (URL)'
              value={url}
              onChange={updateURL} />


            <button className="createspot-pink-buttons" type="submit">Create New Spot</button>
            {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}
          </div>
          <div className="create-errors">
            <ul >
              {errors && validationErrors.length > 0 && validationErrors.map(error => (
                <li className="error-messages" key={error}>{error}</li>))}
            </ul>
          </div>
        </form>
      </div>
    </div>

  )
}

export default CreateSpotForm;