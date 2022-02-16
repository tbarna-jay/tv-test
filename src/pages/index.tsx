import React from "react";
import type { NextPage } from "next";
import useSWR from "swr";

import { fetcher } from "../api";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Schedule } from "../model/api";
import ScheduleCard from "../components/widgets/schedule-card";
import HeadWrapper from "../components/wrappers/head";
import { Loading } from "../components/widgets/loading";

const Home: NextPage = () => {
  const defaultDate = new Date().toISOString().split("T").shift() || "";
  const params = {
    country: "GB",
    date: defaultDate,
  };

  const { data: schedules, error } = useSWR<Schedule[]>(
    { params, path: "/schedule" },
    fetcher
  );

  if (error) {
    console.error(error);
    return <div>Failed to load</div>;
  }
  if (!schedules) {
    return <Loading />;
  }

  return (
    <HeadWrapper>
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
          <Grid container spacing={4}>
            {schedules.map((schedule) => (
              <Grid item key={schedule.id} sm={6} md={4} lg={3} xl={2}>
                <ScheduleCard schedule={schedule} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </HeadWrapper>
  );
};

export default Home;
