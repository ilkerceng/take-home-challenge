import React from 'react';
import {Grid, Typography, Divider} from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import {parseDateAndTime} from 'utils/dateUtil';

export default function AppointmentItem({
  todo: {
    node: {
      slug,
      title,
      startingDate,
      location: {title: locationTitle, slug: locationSlug},
    },
  },
}) {
  const [date, time, meridiem] = parseDateAndTime(startingDate);
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>{<CalendarTodayIcon />}</Grid>
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
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{marginTop: 20, marginBottom: 20}} />
      {[
        {icon: <ScheduleIcon fontSize="small" />, name: date},
        {icon: <CalendarTodayIcon fontSize="small" />, name: time + meridiem},
        {icon: <RoomOutlinedIcon fontSize="small" />, name: locationTitle},
      ].map(({icon, name}, index) => (
        <Grid container wrap="nowrap" spacing={2} key={index}>
          <Grid item>{icon}</Grid>
          <Grid item xs zeroMinWidth>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={10}>
                {name}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
