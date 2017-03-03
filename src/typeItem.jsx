
import React, { Component } from 'react';
import '../styles/typeItem.scss';

class TypeItem extends Component {

  render() {
    return (
      <div className="typeItem">
        <div className="first">
          <div className={`icon ${this.props.first.itemId}`} />
          <div className="details">
            <div>{this.props.first.value}</div>
            <div>{this.props.first.text}</div>
          </div>
        </div>
        <div className="second">
          <div className={`icon ${this.props.second.itemId}`} />
            <div className="details">
              <div>{this.props.second.value}</div>
              <div>{this.props.second.text}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default TypeItem;
