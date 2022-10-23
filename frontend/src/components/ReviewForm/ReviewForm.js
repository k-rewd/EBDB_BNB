import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createReviewThunk, getSpotReviewsThunk } from '../../store/reviews';
// import * as sessionActions from '../../store/session'; //


const ReviewForm = ({ setShowModal }) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const { spotId } = useParams()
  // const sessionUser = useSelector(state => state.session.user); //


  const [review, setReview] = useState('');
  const [stars, setStars] = useState(1)
  const [validationErrors, setValidationErrors] = useState([])
  const [errors, setErrors] = useState([])

  const updateReview = (e) => setReview(e.target.value);
  const updateStar = (e) => setStars(e.target.value);

  useEffect(() => {
    const errors = []
    if (review.length > 255) errors.push('Review: Character limit(255)')
    if (!spotId) errors.push("Review couldn't be found")
    setValidationErrors(errors)
  }, [review, spotId])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(true)
    
if(!validationErrors.length) {
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
      // history.push(`/spots/${createdReview.id}`)
      await dispatch(getSpotReviewsThunk(spotId)).then(() => setShowModal(false))
    }
    }
  }

  return (
    <>
      <div>
        <section>
          <form onSubmit={handleSubmit}>
          <ul>
            {errors && validationErrors.length > 0 && validationErrors.map(error => (
              <li key={error}>{error}</li>))}
          </ul>
            {/* <div>
              {errors.map((err, i) => 
              <ul className='review-errors' key={i}>
                {err}
                </ul>
              )}
              </div> */}
            
            <label>
              <input
                type='number'
                min='1'
                max='5'
                placeholder='rating'
                value={stars}
                onChange={updateStar} />
            </label>
            <label>
              <input
                type='text'
                placeholder='Say Something ......'
                value={review}
                onChange={updateReview} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  )



}

export default ReviewForm;