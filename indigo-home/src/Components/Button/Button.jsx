import React from 'react';
import './Button.scss';

const Button = ({label, styles}) => {
  return (
    <>
        <button className="primary" style={styles} >{label}</button>
    </>
  );
};

export default Button;
