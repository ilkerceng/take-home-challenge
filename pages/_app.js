import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { PLANNER_QUERY } from "../src/usePlanner";

const mocks = [
  {
    request: {
      query: PLANNER_QUERY,
    },
    result: {
      data: {
        journey: {
          recommendedTaskDefinitions: {
            edges: [
              {
                node: {
                  slug: "prepare-your-chemo-bag",
                  title: "Prepare your chemo bag",
                },
              },
              {
                node: {
                  slug: "put-lotion-on-especially-on-your-hands-and-feet",
                  title: "Put lotion on (especially on your hands and feet) ",
                },
              },
              {
                node: {
                  slug: "tip-keep-a-lint-roller-in-your-purse-or-bag-to-rol",
                  title:
                    "Tip: keep a lint roller in your purse or bag to roll over your head while hair falls out to avoid it getting places",
                },
              },
            ],
          },
          appointments: {
            edges: [
              {
                node: {
                  slug: "chemotherapy-appointment",
                  startingDate: "2020-06-12T07:36:57+00:00",
                  title: "Chemotherapy Appointment",
                  location: {
                    title: "UCSF Medical Center",
                    slug: "ucsf-medical-center",
                  },
                },
              },
              {
                node: {
                  slug: "dentist-appointment",
                  startingDate: "2020-06-14T07:36:57+00:00",
                  title: "Dentist Appointment",
                  location: {
                    title: "Dentistry School",
                    slug: "dentistry-school",
                  },
                },
              },
            ],
          },
          tasks: {
            edges: [
              {
                node: {
                  slug: "get-blood-tests-to-check-kidney-liver-and-heart-fu",
                  startingDate: "2020-06-12T07:38:36+00:00",
                  title:
                    "Get blood tests to check kidney, liver, and heart function",
                },
              },
              {
                node: {
                  slug: "stop-taking-herbal-remedies-and-other-dietary-supplements",
                  startingDate: "2020-06-12T07:38:36+00:00",
                  title:
                    "Stop taking herbal remedies and other dietary supplements",
                },
              },
              {
                node: {
                  slug: "get-an-aromatherapy-massage",
                  startingDate: "2020-06-11T07:38:57+00:00",
                  title: "Get an aromatherapy massage",
                },
              },
            ],
          },
        },
      },
    },
  },
];

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MockedProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
