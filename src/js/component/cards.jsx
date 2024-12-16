import React from "react";

export const Cards = ({ image, title, description }) => {
    return (
        <div className="card container" style={{ width: '18rem' }}>
            <img src={image} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-secondary">Hacer encargo</button>
            </div>
        </div>
    )
};