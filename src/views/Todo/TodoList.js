import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {red} from '@material-ui/core/colors';
import {Divider, makeStyles, CardActions} from '@material-ui/core';

import TodoItem from './TodoItem';
import AddItemButton from 'components/AddItemButton';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
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

const TodoList = ({edges = []}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
              <span style={{color: 'green', textAlign: 'center'}}>To-Dos</span>
              <AddItemButton />
            </div>
          }
        />
        <Divider />
        <CardContent>
          {edges.map((todo, index) => (
            <TodoItem
              hasDivider={index !== edges.length - 1}
              todo={todo}
              key={index}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;
