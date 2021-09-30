import React, { Component } from "react";

class Counter extends Component {
  counterClassName = () => {
    const { value } = this.props.data;
    let className = "badge badge-";
    if (value === 0) className += "red";
    else className += "blue";
    return className;
  };

  render() {
    const { data, handleIncrement, handleDecrement } = this.props;
    return (
      <main className="container">
        <span className={this.counterClassName()}>{data.value}</span>
        {/* <span>{data.id}</span> */}
        <button type="button" onClick={() => handleIncrement(data)}>
          Increment
        </button>
        <button type="button" onClick={() => handleDecrement(data)}>
          Decrement
        </button>
      </main>
    );
  }
}

export default Counter;
