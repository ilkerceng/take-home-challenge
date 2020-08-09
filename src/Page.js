import {useQuery} from '@apollo/client';
import Container from '@material-ui/core/Container';
import React from 'react';
import {PLANNER_QUERY} from './usePlanner';
import CegiHealth from 'views';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        // backgroundColor: lightBlue.A200,
        backgroundColor: 'white',
      },
    },
    MuiPickersToolbarButton: {
      toolbarBtn: {},
      toolbarTxt: {},
    },
    MuiTouchRipple: {
      root: {
        color: 'black',
        // overflowX: "unset"
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: 'black',
      },
      toolbarBtnSelected: {
        color: 'black',
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        maxWidth: '500px',
        overflowX: 'initial',
      },
    },
  },
});

export default function Page() {
  const {data, error, loading} = useQuery(PLANNER_QUERY);

  return (
    <ThemeProvider theme={materialTheme}>
      <Container maxWidth="xs">
        <CegiHealth />
      </Container>
    </ThemeProvider>
  );
}
