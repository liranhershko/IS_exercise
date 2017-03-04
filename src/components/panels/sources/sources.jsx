import React, { Component } from 'react';
import Source from './source';
import './sources.scss';

class Sources extends Component {
  render () {
    const dataKeys = Object.keys(this.props.data);
    return (
      <div className="sourcesContent">
        {this.renderSources(dataKeys)}
      </div>
    );
  }

  renderSources(dataKeys) {
    return dataKeys.map((item) => {
      return (
        <Source key={item} name={item} value={Math.round(this.props.data[item])} />
      )
    })
  }
}

export default Sources;
