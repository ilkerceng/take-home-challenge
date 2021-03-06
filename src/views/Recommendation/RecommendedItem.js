import React from 'react';
import {Divider, Grid, Typography, IconButton} from '@material-ui/core';
import AddItemButton from 'components/AddItemButton';
import ClearIcon from '@material-ui/icons/Clear';

export default function RecommendedItem({
  todo: {
    node: {slug, title},
  },
  hasDivider = false,
  onRecommendedAdd,
  onRecommendedRemove,
}) {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <AddItemButton
            onClick={() => onRecommendedRemove(/** send Recommended ID Here */)}
          />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={10}>
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                onClick={() =>
                  onRecommendedAdd(/** send new Recommended ITEM */)
                }
              >
                <ClearIcon />
              </IconButton>
            </Grid>
            {hasDivider && <Divider style={{marginTop: 20}} />}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
