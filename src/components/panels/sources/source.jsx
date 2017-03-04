import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Odometer from '../../common/odometer';

class Source extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 0
    };
  }

  componentDidMount() {
    // timeout for the animation effect
    setTimeout(
      () => {
        this.setState({
          val: this.props.value
        });
      },
      500
    );
  }

  render() {
    return (
      <div className="source">
        {this.props.name.replace(/([A-Z])/g, ' $1').trim()}
        <div className="detailsContainer">
          <Line
            percent={this.state.val}
            strokeWidth="1"
            strokeColor="#8BB5D5"
            trailColor="#1C374A"
            className="progressBar"
          />
          <div className="value">
            <Odometer value={this.props.value} />
          </div>
        </div>
      </div>
    );
  }
}

export default Source;
