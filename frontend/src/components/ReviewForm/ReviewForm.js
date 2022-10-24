import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createReviewThunk, getSpotReviewsThunk } from '../../store/reviews';
import { spotOne } from '../../store/spots';
// import * as sessionActions from '../../store/session'; //
import './ReviewForm.css'


const ReviewForm = ({ setShowModal }) => {

  const dispatch = useDispatch()
  // const history = useHistory()
  const { spotId } = useParams()
  // const sessionUser = useSelector(state => state.session.user); //


  const [review, setReview] = useState('');
  const [stars, setStars] = useState(1)
  const [validationErrors, setValidationErrors] = useState([])
  const [errors, setErrors] = useState(false)

  const updateReview = (e) => setReview(e.target.value);
  const updateStar = (e) => setStars(e.target.value);

  useEffect(() => {
    const errors = []
    if (!review || review.length > 255) errors.push('Tells us about your stay! Character limit(255)')
    if (!spotId) errors.push("Review couldn't be found")
    setValidationErrors(errors)
  }, [review, spotId])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(true)

    if (!validationErrors.length) {
      const payload = {
        review,
        stars
      }


      let createdReview = await dispatch(createReviewThunk(spotId, payload))
      // .then(() => setShowModal(false))
      // .catch(async (res) => {
      //   const data = await res.json();
      //   if (data && data.errors) setErrors(data.errors)
      // })
      // console.log('createdreview', createdReview)

      if (createdReview) {
        await dispatch(getSpotReviewsThunk(spotId))
        await dispatch(spotOne(spotId))
        setShowModal(false)
        
        // history.push(`/spots/${createdReview.id}`)
        setErrors(false)
      }
    }
  }

  return (
    <div>
      <h1 className='review-title'>Review Here</h1>
      <div className='review-form-modal'>
        <div>
          <form onSubmit={handleSubmit}>

            <div className='stars-review'>
              <textarea
                className='text-area-review'
                type='text'
                placeholder='Tells us about your experience...!'
                value={review}
                onChange={updateReview} />
              <div className='star-input-row'>
                <label>★</label>
                <input
                  className='review-star-input'
                  type='number'
                  min='1'
                  max='5'
                  value={stars}
                  onChange={updateStar} />
              </div>
              <button className="add-review-pink-button" type="submit">Submit</button>
            </div>
          </form>
          <ul>
            {errors && validationErrors.length > 0 && validationErrors.map(error => (
              <li className='review-error-messages' key={error}>{error}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )



}

export default ReviewForm;