import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="Hello">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome to NFT DROP</h1>
        <Link href="/nft/collection1">
          <a className="mt-7 rounded-full bg-rose-300 py-2 px-5 font-bold text-white">Start great...</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
