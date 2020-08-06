import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PLANNER_QUERY } from "./usePlanner";

export default function Page() {
  const { data, error, loading } = useQuery(PLANNER_QUERY);

  console.log(data, error, loading);

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>
        A Calendar UI
      </Typography>
      <Typography variant="body1" gutterBottom>
        Try to implement the below UI relying on @material-ui library, writing
        as minimal local CSS as possible. You should try to utilize properties,
        and the overrides.{" "}
        <a href="https://v1.material-ui.com/customization/overrides/">
          https://v1.material-ui.com/customization/overrides/
        </a>{" "}
        is your friend, as well as{" "}
        <a href="https://material-ui.com/components/box/">
          https://material-ui.com/components/box/
        </a>
        .
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ideally the datepicker should work so that when a date is picked, only
        the tasks and appointments for that date should be visible. Just assume
        current date is June 12th. Try to limit the amount of time you spent
        around ~3 hours, and let's see how much you get done. Remember,
        functionality > pixel perfection. It is completely ok if you won't
        finish the whole thing.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Here is how the UI should look like:
      </Typography>
      <Box align="center">
        <img src="mockup.svg" alt="Mockup" />
      </Box>
      <Typography variant="h6" gutterBottom>
        Here is the mock data you are getting at <code>src/Page.js:8</code>:
      </Typography>
      {!error && !loading && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </Container>
  );
}
