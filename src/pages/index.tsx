import React from "react";
import type { GetStaticPropsResult, NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import getConfig from "next/config";
import api from "../api";
import styles from "../styles/Home.module.css";
import { Container, Grid } from "@mui/material";
import { Schedule } from "../model/api";
import ScheduleCard from "../components/widgets/schedule-card";

const {
  publicRuntimeConfig: { REGENERATION_TIME },
} = getConfig();

type PageProps = {
  content: Schedule[];
  errorCode?: number;
};

const Home: NextPage<PageProps> = ({ content: schedules, errorCode }) => {
  if (errorCode && errorCode !== 200) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <Head>
        <title>Tv maze browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <Container maxWidth="xl">
          <h1>TV Bland</h1>
          <p>TV Show and web series database.</p>
          <p>
            Create personalised schedules. Episode guide, cast, crew and
            character information.
          </p>
        </Container>
      </div>
      <div className={styles.cards}>
        <Container maxWidth="xl">
          <h2>Last Added Shows</h2>
          <Grid container spacing={2}>
            {schedules.map((schedule) => (
              <Grid key={schedule.id} item xs={8} md={4} xl={2}>
                <ScheduleCard schedule={schedule} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const defaultDate = new Date().toISOString().split("T").shift();
  const { content, errorCode } = await api.getShedule({
    country: "GB",
    date: defaultDate,
  });

  if (!content) {
    return {
      revalidate: REGENERATION_TIME,
      notFound: true,
    };
  }

  return {
    props: { content, errorCode },
    revalidate: REGENERATION_TIME,
  };
}

export default Home;
