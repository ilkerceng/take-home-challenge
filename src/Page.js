import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PLANNER_QUERY } from "./usePlanner";
import CegiHealth from "views";

export default function Page() {
  const { data, error, loading } = useQuery(PLANNER_QUERY);

  console.log(data, error, loading);

  return (
    <Container maxWidth="md">
      <CegiHealth />
    </Container>
  );
}
