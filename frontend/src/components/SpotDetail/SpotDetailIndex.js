import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { spotOne } from "../../store/spots"
import SpotReviewIndex from "../SpotReviews/SpotReviewsIndex"
import ReviewFormModal from "../ReviewForm"
import './SpotDetails.css'

const SpotDetailIndex = () => {
  const spotDetail = useSelector(state => state.spots.singleSpot)
  // const spot = spotDetail.SpotImages
  // console.log('spotDetailIndexSpot', spot)

  const [isLoaded, setIsLoaded] = useState(false)

  const { spotId } = useParams()

  // console.log('spotDetail', spotDetail)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(spotOne(spotId))
      .then(() => setIsLoaded(true))
  }, [dispatch, spotId])

  if (!spotDetail) {
    return null
  } else {
    return isLoaded && (
      <div id="outer-most-details">
        <div id="spot-page">
          <div id="header">
            <h2>{spotDetail.name}</h2>
            <div id="header-details-row">
              <div>★{spotDetail.avgStarRating}</div>
              <div>·</div>
              <div>{spotDetail.numReviews} review(s)</div>
              <div>·</div>
              <div>{spotDetail.city},</div>
              <div>{spotDetail.state}</div>
              <div>·</div>
              <div>{spotDetail.country}</div>
            </div>
          </div>
          <div>
            <img id="image" src={spotDetail.SpotImages[0].url} alt='img' />
          </div>
          <div id="details">
            <div id="detail-title">
            <div><h2 >Property Hosted By {spotDetail.Owner.firstName}</h2></div>
                <div id='night'>
                <div className="spot-detail-price">${spotDetail.price} </div> <div>night</div>
                </div>
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
                <p>Almost 100% of recent guests gave the location a 5-star rating.</p>
              </div>
              <div className="amenities-inline">
                <img src="https://www.pngrepo.com/png/401036/180/computer-desk-furniture-interior-work-space.png"
                  alt='' style={{ width: '20px' }} />
                <p>A private room with wifi that’s well-suited for working.</p>
              </div>
            </div>
            <div className="aircover">
              <img src="https://a0.muscache.com/im/pictures/f4a1e0fb-bd06-4f11-91e3-8d3979d3431a.jpg"
                alt="aircover" style={{ width: "100px" }} />
              <p style={{ margin: '5px' }}>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
            </div>
            <div id="spot-description">{spotDetail.description}</div>
          </div>
          <div id="reviews">
            <div id='review-details-row'>
              <div>★  {spotDetail.avgStarRating}</div>
              <div>·</div>
              <div>{spotDetail.numReviews} review(s)</div>
            </div>
            <div id="review-text">
              <div><SpotReviewIndex /></div>
            </div>
            <div><ReviewFormModal /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotDetailIndex


