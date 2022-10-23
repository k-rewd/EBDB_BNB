import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function ReviewFormModal() {
  const [ showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  
  const reviews = useSelector(state => state.reviews.spotReviews)
  // console.log('review', reviews)
  const allReviews = Object.values(reviews);
  // console.log('allReview', allReviews)
  // 
  const currentSpot = useSelector(state => state.spots.singleSpot )
  // console.log('currentSpot', currentSpot)
  
  let userSpotReview;
  if(sessionUser) userSpotReview = (currentSpot.ownerId === sessionUser.id)
  
  let updateReview;
  if(sessionUser) updateReview = allReviews.find(review => review.User.id === sessionUser.id)
  
  // console.log('updateReview', updateReview)
  // 
  return (
    <>
    {!userSpotReview && !updateReview && sessionUser && (
      <button className='review-pink-buttons' onClick={() => setShowModal(true)}>Leave Review</button>
    )}
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ReviewForm setShowModal={setShowModal} />
      </Modal>
    )}
    </>
  )
}

export default ReviewFormModal;