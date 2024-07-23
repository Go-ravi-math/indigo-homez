import React from 'react';
import './Card.scss';

const Card = ({ num, text, count }) => {

    const renderItems = () => {
        const elements = [];
        for (let i = 0; i < count; i++) {
          elements.push(<div className="counter">
            <span className="counter__number">{num}</span>
            <span className="counter__text">{text}</span>
          </div>);
        }
        return elements;
      };
  return (
    <>
      {renderItems()}
    </>
  );
};

export default Card;