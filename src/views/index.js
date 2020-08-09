import 'date-fns';
import React from 'react';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {usePlanner} from 'usePlanner';

import TodoList from 'views/Todo';
import RecommendedList from 'views/Recommendation';
import AppointmentList from 'views/Appointment';

import Loading from 'components/Loading';
import DayTodo from 'components/DayTodo';

const CegiHealth = props => {
  const {loading, error, data} = usePlanner();
  const {
    journey: {
      tasks: {edges: taskEdges = []} = {},
      appointments: {edges: appointmentsEdges = []} = {},
      recommendedTaskDefinitions: {
        edges: recommendedTaskDefinitionsEdges = [],
      } = {},
    } = {},
  } = data || {};

  if (loading) return <Loading />;
  if (error) return <ErrorModal />;

  const onTodoAdd = todo => {
    //TODO an api call here and get new journey
  };

  const onRecommendedAdd = recommended => {
    //TODO an api call here and get new journey
  };

  const onRecommendedRemove = id => {
    //TODO an api call here and get new journey
  };

  const onAppointmentAdd = appointment => {
    //TODO an api call here and get new journey
  };

  const getItemsDates = edges => {
    return edges.map(({node: {startingDate} = {}} = {}) => startingDate);
  };

  const appointmentsDates = getItemsDates(appointmentsEdges);
  const tasksDates = getItemsDates(taskEdges);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DayTodo
        activityDates={{appointmentsDates, tasksDates}}
        onDateChange={() => false}
      />
      <TodoList edges={taskEdges} onTodoAdd={onTodoAdd} />
      <RecommendedList
        edges={recommendedTaskDefinitionsEdges}
        onRecommendedAdd={onRecommendedAdd}
        onRecommendedRemove={onRecommendedRemove}
      />
      <AppointmentList
        edges={appointmentsEdges}
        onAppointmentAdd={onAppointmentAdd}
      />
    </MuiPickersUtilsProvider>
  );
};

export default CegiHealth;
