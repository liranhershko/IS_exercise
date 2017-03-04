import React, { Component } from 'react';
import PanelWrapper from '../panels/panelWrapper';
import Severities from '../panels/severities/severities';
import Sources from '../panels/sources/sources';
import Types from '../panels/types/types';
import './row.scss';

class Row extends Component {
  constructor(props) {
    super(props);

    this.renderPanel = this.renderPanel.bind(this);
  }

  render() {
    return (
      <div className="row">
        {Object.keys(this.props.panels).map(this.renderPanel)}
      </div>
    );
  }

  renderPanel(panelName) {
    let child = null;
    switch (panelName) {
      case 'Severities':
        child = <Severities data={this.props.panels[panelName]} />;
        break;
      case 'Sources':
        child = <Sources data={this.props.panels[panelName]} />;
        break;
      case 'Types':
        child = <Types data={this.props.panels[panelName]} />;
        break;
    }

    return (
      <PanelWrapper name={panelName} key={panelName}>
        {child}
      </PanelWrapper>
    )
  }
}

export default Row;
