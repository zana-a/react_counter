import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
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

  handleResetAll = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({
      counters,
    });
  };

  handleDeleteAll = () => {
    let counters = [...this.state.counters];
    counters = [];
    this.setState({
      counters,
    });
  };

  handleSpecificDelete = (other) => {
    let counters = [...this.state.counters];
    counters = counters.filter((counter) => counter.id !== other.id);
    this.setState({
      counters,
    });
  };

  handleNew = () => {
    let counters = [...this.state.counters];
    counters.push({ id: counters.length + 1, value: 0 });
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
            onSpecificDelete={this.handleSpecificDelete}
          />
        ))}
        <button type="button" onClick={this.handleResetAll}>
          Reset All
        </button>
        <button type="button" onClick={this.handleDeleteAll}>
          Delete All
        </button>
        <button type="button" onClick={this.handleNew}>
          New
        </button>
      </main>
    );
  };
}

export default Counters;
