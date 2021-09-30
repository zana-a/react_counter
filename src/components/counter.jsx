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
    const { data, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <span className={this.counterClassName()}>{data.value}</span>
        {/* <span>{data.id}</span> */}
        <button type="button" onClick={() => onIncrement(data)}>
          Increment
        </button>
        <button type="button" onClick={() => onDecrement(data)}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
