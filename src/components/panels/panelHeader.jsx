import React from 'react';
import './panelHeader.scss';

export default props => {
  return (
    <div className="panelHeader">
      {props.title.toUpperCase()}
    </div>
  )
}
