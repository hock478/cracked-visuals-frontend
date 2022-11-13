/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Head from 'next/head'

const DarkTheme = ({ children }) => {
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="/css/dark.css" />
      </Head>
      {children}
      
    </>
  );
};

export default DarkTheme