import React from 'react';
import './Header.scss';
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/Assets/IndiGo-logo.png" alt="IndiGo Logo" className="header__logo-image" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><span>Book</span> <RxCross1 className='header__nav-cross'/></li>
          <li className="header__nav-item"><span>Trips</span> <RxCross1 className='header__nav-cross'/></li>
          <li className="header__nav-item"><span>Rewards & Offers</span></li>
          <li className="header__nav-item"><span>Checkin</span></li>
        </ul>
      </nav>
      <div className="header__login">
        <button className="header__login-button">
           <span className='header__login-button-label'> Login </span> <RxCross1 className='header__nav-cross'/>
        </button>
      </div>
    </header>
  );
};

export default Header;
