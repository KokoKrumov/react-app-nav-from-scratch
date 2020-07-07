import React from 'react';
import Navigation from "./components/Navigation";
import UsersList from "./components/UsersList";
import Route from "./components/Route";
import ReviewsList from "./components/ReviewList";
import EventsList from "./components/EventsList";

import './App.css';

export default () => {
    return (
        <div className="app ui container">
            <Navigation/>

            <Route path='/'>
                <UsersList/>
            </Route>
            <Route path='/reviews'>
                <ReviewsList/>
            </Route>
            <Route path='/events'>
                <EventsList/>
            </Route>
        </div>
    )
};
