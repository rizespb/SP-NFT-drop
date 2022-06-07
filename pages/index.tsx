import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="Hello">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Welcome to NFT DROP</h1>
    </div>
  );
};

export default Home;
