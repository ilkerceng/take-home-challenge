import React from 'react';
import {gql, useQuery} from '@apollo/client';

export const PLANNER_QUERY = gql`
  {
    journey(id: "64c7580a-ba73-4635-9335-cc561953a498") {
      recommendedTaskDefinitions {
        edges {
          node {
            slug
            title
          }
        }
      }
      appointments(offset: "2020-08-01T00:00:00Z", limit: 10) {
        edges {
          node {
            slug
            startingDate
            title
            location {
              title
              slug
            }
          }
        }
      }
      tasks(offset: "2020-08-01T00:00:00Z", limit: 10) {
        edges {
          node {
            slug
            startingDate
            title
          }
        }
      }
    }
  }
`;

export function usePlanner(params) {
  return useQuery(PLANNER_QUERY);
}
