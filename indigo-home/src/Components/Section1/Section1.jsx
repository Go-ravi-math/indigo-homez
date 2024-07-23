import React from 'react';
import './Section1.scss';
import { RxCross1 } from "react-icons/rx";

const Section1 = () => {
  return (
    <section className='InitialBanner'>
        <div className='InitialBanner__one'>
            <img src="/Assets/section1/1.png" alt="IndiGo Logo" className="header__logo-image" />
        </div>
        <div className='InitialBanner__two'>
            <img src="/Assets/section1/2.png" alt="IndiGo Logo" className="header__logo-image" />
        </div>
        <div className='InitialBanner__three'>
            <img src="/Assets/section1/3.png" alt="IndiGo Logo" className="header__logo-image" />
        </div>
    </section>
  );
};

export default Section1;
