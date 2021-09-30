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
    const {
      data,
      onIncrement,
      onDecrement,
      onSpecificReset,
      onSpecificDelete,
    } = this.props;

    return (
      <div>
        <button type="button" onClick={() => onDecrement(data)}>
          -
        </button>
        <span className={this.counterClassName()}>{data.value}</span>
        <button type="button" onClick={() => onIncrement(data)}>
          +
        </button>
        <button type="button" onClick={() => onSpecificReset(data)}>
          Reset
        </button>
        <button type="button" onClick={() => onSpecificDelete(data)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
