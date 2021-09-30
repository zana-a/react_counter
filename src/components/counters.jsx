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
        { id: 4, value: 12 },
      ],
    };
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (!(counters[index].value === 0)) counters[index].value -= 1;
    this.setState({
      counters,
    });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map((data) => (
          <Counter
            key={data.id}
            data={data}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
