import React from "react";
import Head from "next/head";

const HeadWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tv maze browser</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.tvmaze.com" />
      </Head>
      {children}
    </>
  );
};

export default HeadWrapper;
