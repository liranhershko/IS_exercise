import React, { Component } from 'react';
import PanelWrapper from './panelWrapper';
import Severities from './severities';
import Sources from './sources';
import Types from './types';
import '../styles/row.scss';

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
