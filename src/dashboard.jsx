import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchData } from '../actions/index';

import Row from './row';
import '../styles/dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    return (
      <div className="dashboard">
        {this.renderDashboard()}
      </div>
    );
  }

  renderDashboard() {
    const rowKeys = Object.keys(this.props.dashboard);
    return rowKeys.map(this.renderRow);
  }

  renderRow(rowKey) {
    return <Row className={rowKey} name={rowKey} panels={this.props.dashboard[rowKey]} key={rowKey} />;
  }
}

function mapStateToProps({ dashboard }) {
  return { dashboard };
}

export default connect(mapStateToProps)(Dashboard);
