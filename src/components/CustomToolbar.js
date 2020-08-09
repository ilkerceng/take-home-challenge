import React, {useState} from 'react';
import PickerToolbar from '@material-ui/pickers/_shared/PickerToolbar';
import ToolbarButton from '@material-ui/pickers/_shared/ToolbarButton';
import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const CustomToolbar = function (props) {
  const {
    date,
    isLandscape,
    openView,
    setOpenView,
    title,
    onMonthChange,
  } = props;

  const handleChangeViewClick = view => e => {
    setOpenView(view);
  };

  const classes = useStyles();

  return (
    <PickerToolbar
      className={classes.toolbar}
      title={title}
      isLandscape={isLandscape}
    >
      <ToolbarButton
        onClick={handleChangeViewClick('year')}
        variant="h6"
        label={date.format('YYYY')}
        selected={openView === 'year'}
      />
      <ToolbarButton
        onClick={handleChangeViewClick('date')}
        variant="h4"
        selected={openView === 'date'}
        label={date.format('LL')}
      />
      <select name="month" onChange={e => onMonthChange(e.target.value)}>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </PickerToolbar>
  );
};

export default CustomToolbar;
