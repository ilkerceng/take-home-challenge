import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {red} from '@material-ui/core/colors';
import {Divider, makeStyles, CardActions, Button} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useRouter} from 'next/router';

import AddItemButton from 'components/AddItemButton';
import AppointmentItem from './AppointmentItem';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 10,
    marginTop: 10,
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
}));

const AppointmentList = ({edges = []}) => {
  const classes = useStyles();

  const router = useRouter();

  const onViewAll = e => {
    e.preventDefault();
    router.push('/appointments');
  };

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
              <span style={{color: 'blue', textAlign: 'center'}}>
                Appointments
              </span>
              <AddItemButton color={blue} />
            </div>
          }
        />
        <Divider />
        <CardContent>
          {edges.map((todo, index) => (
            <div key={index}>
              <AppointmentItem todo={todo} />
              {edges.length - 1 !== index && (
                <Divider
                  style={{height: 10, marginTop: 20, marginBottom: 20}}
                />
              )}
            </div>
          ))}
        </CardContent>

        <CardActions disableSpacing>
          <Button
            onClick={onViewAll}
            fullWidth
            variant="outlined"
            className={classes.button}
            endIcon={<ArrowForwardIcon />}
            style={{color: 'blue'}}
          >
            What You Need to Know
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AppointmentList;
