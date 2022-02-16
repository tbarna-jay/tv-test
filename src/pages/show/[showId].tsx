import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import useSWR from "swr";

import { fetcher } from "../../api";
import styles from "../../styles/Show.module.css";
import { Actor, Show } from "../../model/api";
import HeadWrapper from "../../components/wrappers/head";
import { Loading } from "../../components/widgets/loading";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const { showId } = router.query;

  const { data: show, error } = useSWR<Show>(
    showId ? { params: { embed: "cast" }, path: `/shows/${showId}` } : null,
    fetcher
  );

  if (error) {
    console.error(error);
    return <div>Failed to load</div>;
  }
  if (!show) {
    return <Loading />;
  }

  const {
    name,
    image,
    rating,
    summary,
    network,
    schedule,
    status,
    genres,
    _embedded,
  } = show;
  const scheduleString = (schedule?.days || []).join(", ");
  const ratingNumber = (rating?.average || 0) / 2;
  const actors: Actor[] = _embedded?.cast || [];
  return (
    <HeadWrapper>
      <div className={styles.header}>
        <Container maxWidth="xl" className={styles.headerContainer}>
          <h1>TV Bland</h1>
          <Link href="/">
            <a className={styles.back}>&lt; Back</a>
          </Link>
          <div className={styles.main}>
            <div className={styles.image}>
              {image?.medium ? (
                <img width="290" src={image?.original} alt={name} />
              ) : (
                <div className={styles.defaultImage}>
                  <img src="/placeholder.svg" alt="missing image" />
                </div>
              )}
            </div>
            <div className={styles.mainContent}>
              <div className={styles.rating}>
                <Rating
                  name="half-rating"
                  defaultValue={ratingNumber}
                  precision={0.1}
                  readOnly
                />
                <strong>{ratingNumber}/5</strong>
              </div>
              <h2>{name}</h2>
              <div dangerouslySetInnerHTML={{ __html: summary || "" }} />
            </div>
          </div>
        </Container>
      </div>
      <Container maxWidth="xl" className={styles.headerContainer}>
        <Grid container spacing={8} className={styles.lists}>
          <Grid item xs={12} sm={6}>
            <h3>Show Info</h3>
            <ul className={styles.list}>
              <li>
                <label>Streamed on</label>
                {network?.name}
              </li>
              <li>
                <label>Schedule</label>
                {scheduleString} ({schedule?.time})
              </li>
              <li>
                <label>Status</label>
                {status}
              </li>
              {!!genres?.length && (
                <li>
                  <label>Genres</label>
                  {genres?.join(", ")}
                </li>
              )}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>Starring</h3>
            <ul className={styles.list}>
              {actors?.map(({ person, character }) => (
                <li key={character?.id}>
                  <div className={styles.avatar}>
                    <img
                      src={person?.image?.medium || "/placeholder.svg"}
                      alt={person?.name}
                    />
                  </div>
                  <label>{person?.name}</label>
                  {character?.name}
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </HeadWrapper>
  );
};

export default Home;
