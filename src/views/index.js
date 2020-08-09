import 'date-fns';
import React from 'react';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {usePlanner} from 'usePlanner';

import TodoList from 'views/Todo';
import Loading from 'components/Loading';

const CegiHealth = props => {
  const {loading, error, data} = usePlanner();
  const {journey: {tasks: {edges: taskEdges = []} = {}} = {}} = data || {};

  if (loading) return <Loading />;
  if (error) return <ErrorModal />;

  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TodoList edges={taskEdges} />
    </MuiPickersUtilsProvider>
  );
};

export default CegiHealth;
