import React from 'react';
import './TestimonialCard.scss';
import { LiaGreaterThanSolid } from "react-icons/lia";  

const TestimonialCard = ({ image, quote, name }) => {
  return (
    <div className='testimonial'>
        <div className='testimonial__title'>
            <lable className="testimonial__title-left font-bauhaus">
                What Our <span style={{'color': '#209326'}}>Users Say</span>
            </lable>
            <lable  className="testimonial__title-right">
                <span style={{'text-decoration': 'underline', 'margin': '10px'}}>VIEW ALL</span> 
                <span >
                    <LiaGreaterThanSolid />
                </span>
            </lable>
        </div>
        <div className='testimonial-container'>
            <div className="testimonial-card">
                <div className="testimonial-card__image-wrapper">
                    <img src='/Assets/Ellipse1.png' className="testimonial-card__image" />
                </div>
                <p className="testimonial-card__quote">"Booking flights is a breeze with the Indigo app! I love the simple interface and how quickly I can find and book my flights."</p>
                <p className="testimonial-card__name">- Nish Mann</p>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card__image-wrapper">
                    <img src='/Assets/Ellipse1.png' className="testimonial-card__image" />
                </div>
                <p className="testimonial-card__quote">"Booking flights is a breeze with the Indigo app! I love the simple interface and how quickly I can find and book my flights."</p>
                <p className="testimonial-card__name">- Nish Mann</p>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card__image-wrapper">
                    <img src='/Assets/Ellipse1.png' className="testimonial-card__image" />
                </div>
                <p className="testimonial-card__quote">"Booking flights is a breeze with the Indigo app! I love the simple interface and how quickly I can find and book my flights."</p>
                <p className="testimonial-card__name">- Nish Mann</p>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card__image-wrapper">
                    <img src='/Assets/Ellipse1.png' className="testimonial-card__image" />
                </div>
                <p className="testimonial-card__quote">"Booking flights is a breeze with the Indigo app! I love the simple interface and how quickly I can find and book my flights."</p>
                <p className="testimonial-card__name">- Nish Mann</p>
            </div>
        </div>
    </div>
  );
};

export default TestimonialCard;
