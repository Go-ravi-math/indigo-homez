import React from 'react';
import './Section5Card.scss';

const Section5Card = ({test, city, fare, imageUrl}) => {
  return (
    <div className="card" style={test}>
      <div className="card__image">
        <img className="card__image" alt="IndiGo Logo" src={imageUrl}/>
      </div>
      <div className="card__content">
        <div style={{'width': '84%'}}>
            <h2 className="card__title font-bauhaus">{city}</h2>
            <p className="card__fare">{fare}</p>
        </div>
        <div>
            <img className="card__image card__icon" alt="IndiGo Logo" src='/Assets/icons/section5.png'/>
        </div>
      </div>
    </div>
  );
};

export default Section5Card;