import React from 'react';
import './InstagramPostCard.scss';

const InstagramPostCard = () => {
  return (
    <div className="instagram">
        <div>
            <img className="instagram-post-card" src='/Assets/instagram.jpg'></img>
        </div>
        <div>
            <img className="instagram-post-card" src='/Assets/instagram.jpg'></img>
        </div>
        <div>
            <img className="instagram-post-card" src='/Assets/instagram.jpg'></img>
        </div>
        <div>
            <img className="instagram-post-card" src='/Assets/instagram.jpg'></img>
        </div>
    </div>
  );
};

export default InstagramPostCard;
