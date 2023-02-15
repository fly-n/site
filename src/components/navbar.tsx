import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [device, setDevice] = useState("" as "android" | "ios" | "web");

  useEffect(() => {
    if (window.navigator.userAgent.includes("Android")) {
      setDevice("android");
    } else if (
      window.navigator.userAgent.includes("iPhone" || "iPad" || "iPod" || "Mac")
    ) {
      setDevice("ios");
    } else {
      setDevice("web");
    }
  }, []);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-4 lg:px-8">
      <Link href="/">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={100}
          height={45}
          className="flex flex-shrink-0 items-center text-white"
        />
      </Link>
      {/* {device === "ios" ? (
        <div className="rounded-2xl bg-primary/40 p-4 font-bold text-white">
          not available on iOS
        </div>
      ) : (
        <a
          href="https://play.google.com/store/apps/details?id=com.leonvdw.flyn"
          className="rounded-full bg-secondary p-4 font-bold text-white"
          target={"_blank"}
          rel="noreferrer"
        >
          DOWNLOAD NOW
        </a>
      )} */}
    </nav>
  );
}
