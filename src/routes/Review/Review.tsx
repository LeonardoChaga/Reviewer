import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieName, getMovieReview } from '../getHomeList';

import './Review.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import NewReviewComponent from '../components/NewReviewComponent/NewReviewComponent';
import ReviewsContainerComponent from '../components/ReviewsContainerComponent/ReviewsContainerComponent';

function Review() {
    const movieId = useParams<{ id: string }>().id.substring(1);
    const [movieName, setMovieName] = useState('');
    const [movieReview, setMovieReview] = useState<string[]>([]);

    const getName = async () => {
        const name = await getMovieName(movieId);
        setMovieName(name.original_title);
    }
    const getReview = async () => {
        const review = await getMovieReview(movieId);
        try {
            setMovieReview(review.reviews);
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(()=> {
        getName();
        getReview();
    }, []);

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title={`Reviews - ${movieName}`} />

            <NewReviewComponent movieId={movieId} />

            {
                movieReview.map((review, i) => 
                    <ReviewsContainerComponent key={i} review={review}/>
                )
            }
        </div>
    );
}

export default Review;
