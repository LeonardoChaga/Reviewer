import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Tendencies from './Tendencies/Tendencies';
import Movies from './Movies/Movies';
import Review from './Review/Review';

function Reviewer() {
    return (
        <BrowserRouter>
            <Route component = { Tendencies } path = "/" exact />
            <Route component = { Movies } path = "/movies" exact />
            <Route component = { Review } path = "/review:id" />
        </BrowserRouter>
    );
}

export default Reviewer;
