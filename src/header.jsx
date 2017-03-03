import React from 'react';
import logo from '../resources/images/logo.png';
import '../styles/header.scss';

export default () => {
  return (
    <div className="header">
      <img src={logo} />
    </div>
  )
}
