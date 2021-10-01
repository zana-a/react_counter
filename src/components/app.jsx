import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";
import { CssBaseline, Container, Fab, Box } from "@mui/material";
import { Add } from "@mui/icons-material";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [{ id: 1, value: 0 }],
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

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
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

  handleDelete = (other) => {
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

  render() {
    return (
      <div>
        <CssBaseline />
        <Navbar
          onResetAll={this.handleResetAll}
          onDeleteAll={this.handleDeleteAll}
          data={this.state}
        />
        <Container maxWidth="md">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            data={this.state}
          />
        </Container>
        <Box style={{ position: "fixed", right: 0, bottom: 0 }} padding="1rem">
          <Fab color="primary" onClick={() => this.handleNew()}>
            <Add />
          </Fab>
        </Box>
      </div>
    );
  }
}

export default App;
