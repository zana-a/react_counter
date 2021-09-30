import React, { Component } from "react";

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
  };

  handleDecrement = () => {
    const { value } = this.state;
    this.setState({
      value: value === 0 ? 0 : value - 1,
    });
  };

  counterClassName = () => {
    const { value } = this.state;
    let className = "badge badge-";
    if (value === 0) className += "red";
    else className += "blue";
    return className;
  };

  render() {
    const { value } = this.state;

    return (
      <main className="container">
        <span className={this.counterClassName()}>{value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </main>
    );
  }
}

export default Counter;
