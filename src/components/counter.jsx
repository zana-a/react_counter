import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handleIncrement = () => {
    const { value } = this.state;
    this.setState({
      value: value + 1,
    });
  }

  render() {
    const { value } = this.state;

    return (
      <main className="container">
        <span className="badge badge-blue">{value}</span>
        <button type="button" onClick={this.handleIncrement}>Increment</button>
      </main>
    );
  }
}

export default Counter;
