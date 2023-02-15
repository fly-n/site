import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Flt-n</title>
        <meta name="description" content="Welcome to fly-n" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-8 p-8 md:flex-row md:justify-evenly">
          <div className="flex w-[45vw] min-w-[280px] flex-col items-center gap-4 md:items-start">
            <h1 className="text-3xl font-bold">
              Travel made easy - from doorstep to destination
              {/* From your front door to your dream destination */}
            </h1>
            <h2 className="text-xl font-normal">
              Fly-n provides a hassle-free and seamless door-to-door travel
              planning and ticket booking service, covering train, tram, bus,
              and plane, to take you to your dream destination.
            </h2>
            <a
              href="https://play.google.com/store/apps/details?id=com.leonvdw.flyn"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image
                src="/googleplay.webp"
                alt="google play"
                width={200}
                height={56}
                className="pt-4"
              />
            </a>
          </div>
          <Image src="/app.webp" alt="hero" width={275} height={568} />
        </div>
      </main>
    </>
  );
};

export default Home;
