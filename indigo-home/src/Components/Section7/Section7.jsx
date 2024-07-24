import React from 'react';
import './Section7.scss';

const Section7 = ({label, styles}) => {
  return (
    <>
        <button className="primary" style={styles} >{label}</button>
    </>
  );
};

export default Section7;
