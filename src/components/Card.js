// File: src/components/Card.js
import React from 'react';

const Card = ({ img, title, onClick }) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3> 
                <button className="fancy-button" onClick={() => onClick()}>View Rating</button> 
            </div>
        </div>
    );
};

export default Card;
