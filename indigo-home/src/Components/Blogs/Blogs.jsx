import React from 'react';
import './Blogs.scss';
import { LiaGreaterThanSolid } from "react-icons/lia";  

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs__title">
        <lable className="blogs__title-left font-bauhaus">
          Related <span style={{ color: "#209326" }}>Blogs</span>
        </lable>
        {/* <lable className="blogs__title-right">
          <span style={{ "text-decoration": "underline", margin: "10px" }}>
            
          </span>
          <span>
           
          </span>
        </lable> */}
      </div>
      <div className="info-container">
        <div className="info-card">
          <div className="info-card__image-wrapper">
            <img src='/Assets/goa.png'  className="info-card__image" />
          </div>
          <div className="info-card__content">
            <h3 className="info-card__title font-bauhaus">Girl Power</h3>
            <p className="info-card__description">Vishalla, located at Vasna road, transports you to a charming area with mud floors...</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card__image-wrapper">
            <img src='/Assets/goa.png'  className="info-card__image" />
          </div>
          <div className="info-card__content">
            <h3 className="info-card__title font-bauhaus">Girl Power</h3>
            <p className="info-card__description">Vishalla, located at Vasna road, transports you to a charming area with mud floors...</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card__image-wrapper">
            <img src='/Assets/goa.png'  className="info-card__image" />
          </div>
          <div className="info-card__content">
            <h3 className="info-card__title font-bauhaus">Girl Power</h3>
            <p className="info-card__description">Vishalla, located at Vasna road, transports you to a charming area with mud floors...</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card__image-wrapper">
            <img src='/Assets/goa.png'  className="info-card__image" />
          </div>
          <div className="info-card__content">
            <h3 className="info-card__title font-bauhaus">Girl Power</h3>
            <p className="info-card__description">Vishalla, located at Vasna road, transports you to a charming area with mud floors...</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
