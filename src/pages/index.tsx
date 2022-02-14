import React from "react";
import type { GetStaticPropsResult, NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import getConfig from "next/config";
import styles from "../styles/Home.module.css";
import api from "../api";

const {
  publicRuntimeConfig: { REGENERATION_TIME },
} = getConfig();

type PageProps = {
  content?: any; // move to model?...
  errorCode?: number;
};

const Home: NextPage<PageProps> = ({ content, errorCode }) => {
  console.log(content);
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tv maze browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      - {content.title} -
    </div>
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
      props: { content: {} },
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
