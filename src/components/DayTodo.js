import clsx from 'clsx';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import React, {useState, useEffect} from 'react';
import isWithinInterval from 'date-fns/isWithinInterval';
import {DatePicker} from '@material-ui/pickers';
import {createStyles} from '@material-ui/styles';
import {IconButton, withStyles} from '@material-ui/core';
import {startOfDay, endOfDay, isEqual} from 'date-fns';
import moment from 'moment';

const styles = createStyles(theme => ({
  dayWrapper: {
    position: 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    // background: theme.palette.primary.main,
    backgroundColor: 'black',
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    display: 'inline-block',
  },
  greenCircle: {
    backgroundColor: 'green',
  },
  blueCircle: {
    backgroundColor: 'blue',
  },
}));

function makeJSDateObject(date) {
  if (date) {
    return date.clone().toDate();
  }

  if (moment.isMoment(date)) {
    return date.clone().toDate();
  }

  if (date) {
    return date.toJSDate();
  }

  if (date) {
    return new Date(date.getTime());
  }

  return date;
}

const DayTodo = props => {
  const [selectedDate, setSelectedDate] = useState(new Date('2020-06-12'));
  const {
    activityDates: {appointmentsDates, tasksDates},
  } = props;

  const renderWrappedWeekDay = (
    date,
    selectedDate,
    dayInCurrentMonth,
    dayComponent,
  ) => {
    const {classes} = props;
    let dateClone = makeJSDateObject(date);
    let selectedDateClone = makeJSDateObject(selectedDate);

    const start = startOfDay(selectedDateClone);
    const end = endOfDay(selectedDateClone);

    const dayIsBetween = isWithinInterval(dateClone, {start, end});
    const isFirstDay = isSameDay(dateClone, start);
    const isLastDay = isSameDay(dateClone, end);

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    const hasActivity = dates => {
      return dates.some(d => {
        const dateFormat = 'YYYY-MM-DD';

        return isEqual(
          new Date(moment(d).format(dateFormat)),
          new Date(date.format(dateFormat)),
        );
      });
    };
    const hasAppointment = hasActivity(appointmentsDates);
    const hasTask = hasActivity(tasksDates);

    const greenCircle = clsx(classes.circle, classes.greenCircle);
    const blueCircle = clsx(classes.circle, classes.blueCircle);

    return (
      <div>
        <div className={wrapperClassName}>
          <IconButton className={dayClassName}>
            <div style={{textAlign: 'center'}}>
              <span> {format(dateClone, 'd')} </span>
            </div>
          </IconButton>
        </div>
        {(hasAppointment || hasTask) && (
          <div style={{textAlign: 'center'}}>
            {hasAppointment && <span className={blueCircle} />}
            <span style={{marginRight: 3}} />
            {hasTask && <span className={greenCircle} />}
          </div>
        )}
      </div>
    );
  };

  return (
    <DatePicker
      label="Week picker"
      value={selectedDate}
      fullWidth={true}
      variant="static"
      open={true}
      onChange={setSelectedDate}
      renderDay={renderWrappedWeekDay}
      textFieldStyle={{width: '100%'}}
      Props
      // ToolbarComponent={props => (
      //   <CustomToolbar
      //     {...props}
      //     onMonthChange={month => {
      //       // selectedDate.setMonth(month);
      //       setSelectedDate(new Date('2020-12-12'));
      //     }}
      //   />
      // )}
    />
  );
};

export default withStyles(styles)(DayTodo);
