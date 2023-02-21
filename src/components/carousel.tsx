import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [image, setImage] = useState<number>(0);

  useEffect(() => {
    const element = document.getElementById("scrollObject");

    setInterval(() => {
      console.log(image);
      setImage(image + 1);
      element?.scroll(image * 275, 0);
    }, 4000);
  }, [image]);

  return (
    <div
      id="scrollObject"
      className="flex w-[275px] overflow-y-hidden scroll-smooth"
    >
      <Image src="/app.webp" alt="hero" width={275} height={568} />
      <Image src="/app2.webp" alt="hero" width={275} height={568} />
      <Image src="/app3.webp" alt="hero" width={275} height={568} />
      <Image src="/app4.webp" alt="hero" width={275} height={568} />
      <Image src="/app5.webp" alt="hero" width={275} height={568} />
    </div>
  );
}
