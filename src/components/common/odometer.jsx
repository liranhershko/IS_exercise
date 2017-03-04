import React, { Component } from 'react';

class Odometer extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  componentDidMount() {
    if (this.props.value !== this.state.value) {
      this.updateTo(this.props.value);
    }
  }

  updateTo(value) {
    let interval = setInterval(
      () => {
        if (this.state.value === value) {
          clearInterval(interval);
          return;
        }

        if ( value > this.state.value) {
          this.setState({ value: this.state.value + 1 });
        } else {
          this.setState({ value: this.state.value - 1 });
        }

      },
      10
    );
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Odometer;
