import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';
import Odometer from '../../common/odometer';
import './severities.scss';

class Severities extends Component {
  render() {
    const dataKeys = Object.keys(this.props.data);
    const { High, Medium, Low } = this.props.data;
    return (
      <div className="severitiesContent">
        <div className="chart">
          <PieChart
            size={100}
            innerHoleSize={90}
            data={[
              { key: dataKeys[0], value: High, color: '#D54141' },
              { key: dataKeys[1], value: Medium, color: '#F3AB10' },
              { key: dataKeys[2], value: Low, color: '#41B0D5' }
            ]}
          />
        </div>
        <div className="detailsContainer">
          {this.renderDetails(dataKeys)}
        </div>
      </div>
    );
  }

  renderDetails(dataKeys) {
    return dataKeys.map(item => {
      return (
        <div className="detail" key={item}>
          {item}
          <Odometer value={this.props.data[item]} />
        </div>
      );
    });
  }
}

export default Severities;
