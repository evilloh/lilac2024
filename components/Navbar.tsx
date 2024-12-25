import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 z-[1000] flex items-center justify-between w-full h-60 md:h-90 bg-primary-normal text-white">
      <nav className="md:mr-60 lg:mr-0 h-full">
        <ul className="h-full w-full flex">
          <li className={`ml-25 lg:ml-35 xl:ml-50`}>
            <div className={`bg-white`}></div>
            <Link href="/">
              <a
                className={` inline-block uppercase font-bold italic pt-6 relative w-4 md:w-6 h-8 md:h-16 mt-4`}
              >
                <Image src={"/assets/logo.png"} layout="fill"></Image>
              </a>
            </Link>
          </li>
          <li className={`ml-25 lg:ml-35 xl:ml-50`}>
            <div
              className={`bg-white ${
                router.pathname == "/" ? "h-[2px]" : "h-0"
              }`}
            ></div>
            <Link href="/">
              <a className={` inline-block uppercase font-bold italic pt-6`}>
                Home
              </a>
            </Link>
          </li>
          <li className={`ml-25 lg:ml-35 xl:ml-50`}>
            <div
              className={`bg-white ${
                router.pathname == "/about" ? "h-[2px]" : "h-0"
              }`}
            ></div>
            <Link href="/about">
              <a className={` inline-block uppercase font-bold italic pt-6`}>
                About
              </a>
            </Link>
          </li>
          <li className={`ml-25 lg:ml-35 xl:ml-50`}>
            <div
              className={`bg-white ${
                router.pathname == "/winners" ? "h-[2px]" : "h-0"
              }`}
            ></div>
            <Link href="/winners">
              <a className={` inline-block uppercase font-bold italic pt-6`}>
                Winners
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
