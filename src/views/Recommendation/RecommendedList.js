import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {red} from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Divider, makeStyles, CardActions, Button} from '@material-ui/core';

import RecommendedItem from './RecommendedItem';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    borderRadius: 10,
    marginTop: 2,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const RecommendedList = ({edges = []}) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold',
              }}
            >
              Recommended
            </div>
          }
          subheader="Upcoming To-Dos based on your profile and treatment timeline"
        />
        <Divider />
        <CardContent>
          {edges.map((todo, index) => (
            <RecommendedItem
              hasDivider={index !== edges.length - 1}
              todo={todo}
              key={index}
            />
          ))}
        </CardContent>

        <CardActions disableSpacing>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.button}
            endIcon={<ArrowForwardIcon />}
          >
            View All Recommendations
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecommendedList;
