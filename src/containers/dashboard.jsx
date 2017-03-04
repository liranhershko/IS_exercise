import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

import Row from '../components/dashboard/row';
import './dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
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
    return (
      <Row name={rowKey} panels={this.props.dashboard[rowKey]} key={rowKey} />
    );
  }
}

function cleanProps(dashboard) {
  if (!Object.keys(dashboard).length) return dashboard;
  delete dashboard._id;
  delete dashboard.__v;
}

function mapStateToProps({ dashboard }) {
  cleanProps(dashboard);
  return { dashboard };
}

export default connect(mapStateToProps, { fetchData })(Dashboard);
