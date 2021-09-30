import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 1 },
        { id: 3, value: 0 },
        { id: 4, value: 73 },
      ],
    };
  }

  handleIncrement = (id) => {
    const counter = this.state.counters.indexOf(id);
    this.setState({
      counter,
    });
  };

  handleDecrement = () => {
    const { value } = this.state;
    this.setState({
      value: value === 0 ? 0 : value - 1,
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((value) => (
          <Counter
            key={value.id}
            value={value}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
