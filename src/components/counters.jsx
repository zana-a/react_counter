import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
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

  handleSpecificReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter.value = 0;
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({
      counters,
    });
  };

  render = () => {
    const { counters } = this.state;
    return (
      <main className="container">
        {counters.map((data) => (
          <Counter
            key={data.id}
            data={data}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onSpecificReset={this.handleSpecificReset}
          />
        ))}
        <button type="button" onClick={this.handleReset}>
          Reset All
        </button>
      </main>
    );
  };
}

export default Counters;
