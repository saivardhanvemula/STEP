import React from 'react';
import  "./Card1.css"
const Card1 = ({ title, imageUrl }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default Card1;