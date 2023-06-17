import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { spotOne } from "../../store/spots"
import SpotReviewIndex from "../SpotReviews/SpotReviewsIndex"
import ReviewFormModal from "../ReviewForm"
import './SpotDetails.css'
import { getSpotBookingsThunk } from "../../store/bookings"
import BookingForm from "../BookingModal/BookingForm"

const SpotDetailIndex = () => {
  const spotDetail = useSelector(state => state.spots.singleSpot)
  const sessionUser = useSelector(state => state.session.user)
  console.log('spotDetail', spotDetail)
  // spot detail not being read when user is not logged in
  const spotBookings = useSelector(state => state)
  // console.log('spotBookings', spotBookings)
  const spotImg = spotDetail.SpotImages
  // console.log('spotImg', spotImg)

  // const spot = spotDetail.SpotImages
  // console.log('spotDetailIndexSpot', spot)

  const [isLoaded, setIsLoaded] = useState(false)

  const { spotId } = useParams()

  // console.log('spotDetail', spotDetail)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(spotOne(spotId))
    // dispatch(getSpotBookingsThunk(spotId))
      .then(() => setIsLoaded(true))
  }, [dispatch, spotId])

  if (!spotDetail) {
    return null
  } else {
    return isLoaded && (

      <div id="outer-most-details">
        <div id="spot-page">

          <div id="header">
            <h2 id='spot-name'>{spotDetail.name}</h2>
            <div id="header-details-row">
              <div>★{!spotDetail.avgStarRating ? <strong>NEW!</strong> : spotDetail.avgStarRating}</div>
              <strong>·</strong>
              <div>{spotDetail.numReviews === 1 ? <div>{spotDetail.numReviews} review</div> : <div>{spotDetail.numReviews} reviews</div>}</div>
              <strong>·</strong>
              <strong>{spotDetail.city}, {spotDetail.state}, {spotDetail.country}</strong>
            </div>
          </div>
          <div id='image-container'>
            <img id="image" onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spotDetail.SpotImages[0].url} alt='img' />
            <div id='image-bcde'>
              <div id='image-bc'>
                <img id='image-b' onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spotDetail.SpotImages[0].url} />
                <img id='image-c' onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spotDetail.SpotImages[0].url} />

              </div>
              <div id='image-de'>
                <img id='image-d' onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spotDetail.SpotImages[0].url} />
                <img id='image-e' onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/70/70644.png"} src={spotDetail.SpotImages[0].url} />
              </div>
            </div>
          </div>
          <div id="details">
            <div id='details-left'>
              <div id="detail-title">
                <div><h2 >Property Hosted By {spotDetail.Owner.firstName}</h2></div>
              <div><ReviewFormModal /></div>
              </div>
              <div className="amenities">
                <div className="amenities-inline">
                  <img src="https://www.pngrepo.com/png/5402/180/calendar.png"
                    alt='' style={{ width: '20px' }} />
                  <p>Free cancellations for 48 hours</p>
                </div>
                <div className="amenities-inline">
                  <img src="https://www.pngrepo.com/png/103301/180/location.png"
                    alt='' style={{ width: '20px' }} />
                  <p>Location available on Google Maps, Waze, etc.</p>
                </div>
                <div className="amenities-inline">
                  <img src="https://www.pngrepo.com/png/401036/180/computer-desk-furniture-interior-work-space.png"
                    alt='' style={{ width: '20px' }} />
                  <p>A private room with wifi that’s well-suited for working.</p>
                </div>
              </div>
              <div className="aircover">
                <img src="https://a0.muscache.com/im/pictures/f4a1e0fb-bd06-4f11-91e3-8d3979d3431a.jpg"
                  alt="aircover" style={{ width: "120px" }} />
                <p className="aircover-description">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
              </div>
              <div id="spot-description">{spotDetail.description}</div>
            </div>
            <div id='details-right'>
              <div id='details-right-container'>
                <div id='spot-details-row'>
                  <div className="spot-detail-price"><div id='price'>${spotDetail.price}</div><div> night</div></div>
                  <div id='rating-reviews'>
                    <div>★{!spotDetail.avgStarRating ? <strong>new!</strong> : spotDetail.avgStarRating}</div>
                    <strong>·</strong>
                    <div>{spotDetail.numReviews === 1 ? <div>{spotDetail.numReviews} review</div> : <div>{spotDetail.numReviews} reviews</div>}</div>
                  </div>
                </div>
                <div><BookingForm spot={spotDetail} /></div>
                {/* <div>{sessionUser ? <BookingForm spot={spotDetail} /> : <div>UNDER MAINTENANCE - SIGN IN TO BOOK</div>}</div> */}

              </div>
            </div>
          </div>
          <div id='goog-map'>map area</div>
          <div id="reviews">
            <div id='spot-reviews'><SpotReviewIndex /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotDetailIndex


