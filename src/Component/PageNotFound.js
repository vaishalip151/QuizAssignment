import React from 'react';
import { Grid } from '@material-ui/core';

const PageNotFound = () => {
  return (
    <Grid
      container
      direction="row"
      // justify="left"
      // alignItems="left"

      spacing={3}
    >
      <Grid item alignContent="center" xs={12}>
        <h1>Page Not Found</h1>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
