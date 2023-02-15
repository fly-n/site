import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flt-n</title>
        <meta name="description" content="Welcome to fly-n" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-800 min-h-screen">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
