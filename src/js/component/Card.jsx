import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img || "https://via.placeholder.com/500x325"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;