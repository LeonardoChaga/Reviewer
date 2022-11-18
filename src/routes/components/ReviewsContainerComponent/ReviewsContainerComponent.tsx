import React from 'react';
import './ReviewsContainerComponent.css';

function ReviewsContainerComponent(props: { review: string }) {
    return (
        <div>
            <p className="reviewItem">{ props.review }</p>
        </div>
    );
}

export default ReviewsContainerComponent;
