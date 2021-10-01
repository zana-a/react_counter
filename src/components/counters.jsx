import React, { Component } from "react";
import Counter from "./counter";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

class Counters extends Component {
  render = () => {
    const { onIncrement, onDecrement, onReset, onDelete, data } = this.props;

    return (
      <Grid container spacing={2}>
        {data.counters.length === 0 ? (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>No entries. Please add one.</Typography>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          data.counters.map((counter) => (
            <Grid item md={6} key={counter.id}>
              <Counter
                data={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onReset={onReset}
                onDelete={onDelete}
              />
            </Grid>
          ))
        )}
      </Grid>
    );
  };
}

export default Counters;
