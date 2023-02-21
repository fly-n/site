import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fly-n</title>
        <meta name="description" content="Welcome to fly-n" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full">
        <Navbar />
        <section className="flex flex-col items-center justify-center gap-8 bg-blue-500 px-8 pb-8 pt-4 md:flex-row md:justify-evenly">
          <div className="flex w-[45vw] min-w-[280px] flex-col items-center gap-4 pt-4 text-white md:items-start md:py-16">
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
                height={59}
                className="pt-4"
              />
            </a>
          </div>
          <div className="h-80 overflow-visible">
            <Carousel />
          </div>
        </section>
        {/* <section className="flex flex-col items-center justify-center gap-8 bg-blue-50 px-8 pt-[13rem] pb-8 md:flex-row md:justify-evenly md:pt-0">
          <div className="flex w-[45vw] min-w-[280px] flex-col items-center gap-4 md:items-start md:py-16">
            <h1 className="text-3xl font-bold text-blue-500">Features</h1>
            <h2 className="text-xl font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              minima laborum dicta molestias iusto similique sunt modi sequi
              explicabo nobis. Sequi, libero voluptates temporibus rem dolores
            </h2>
          </div>
          <div className="h-80 w-[275px] overflow-visible"></div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
