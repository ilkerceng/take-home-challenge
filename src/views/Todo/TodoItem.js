import React from 'react';
import {Divider, Checkbox, Grid, Typography} from '@material-ui/core';

export default function TodoItem({
  todo: {
    node: {slug, title},
  },
  hasDivider = false,
}) {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Checkbox style={{marginTop: -8}} name="checkedG" />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography style={{fontWeight: 'bold'}}>{title}</Typography>
          {hasDivider && <Divider />}
        </Grid>
      </Grid>
    </>
  );
}
