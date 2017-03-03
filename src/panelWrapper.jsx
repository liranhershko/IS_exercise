import React, { PropTypes } from 'react';
import PanelHeader from './panelHeader';
import '../styles/panelWrapper.scss';

class PanelWrapper extends React.Component {
  render () {
    return (
      <div className={`panelWrapper ${this.props.name}`}>
        <PanelHeader title={this.props.name} />
        {this.props.children}
      </div>
    );
  }
}

export default PanelWrapper;
