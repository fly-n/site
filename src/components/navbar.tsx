import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
//horizontal navbar, with logo and links
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

    </nav>
  );
}

