import React from 'react';
import { Grid } from '@material-ui/core';

const ThankYouPage = () => {
  return (
    <Grid
      container
      direction="row"
      // justify="left"
      // alignItems="left"

      spacing={3}
    >
      <Grid item alignContent="center" xs={12}>
        <h1>Thank You</h1>
      </Grid>
    </Grid>
  );
};

export default ThankYouPage;
