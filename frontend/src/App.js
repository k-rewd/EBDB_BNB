// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotIndex from "./components/Spots/SpotIndex";
import SpotDetailIndex from "./components/SpotDetail/SpotDetailIndex";
import MySpotsIndex from "./components/MySpots/MySpots";
import MyReviewsIndex from "./components/MyReviews/MyReviewsIndex";
import MyBookingsIndex from "./components/MyBookings/MyBookings";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SpotIndex />
            {/* <UserSpotsIndex /> */}
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/spots/:spotId">
            <SpotDetailIndex />
          </Route>
          <Route exact path="/current">
            <MySpotsIndex />
          </Route>
          <Route exact path="/reviews/current">
            <MyReviewsIndex />
          </Route>
          <Route exact path="/bookings/current">
            <MyBookingsIndex />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;