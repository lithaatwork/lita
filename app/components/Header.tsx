"use client";

import Image from "next/image";
import Link from "next/link";
import { CgMenuMotion } from "react-icons/cg";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { links } from "@/lib/links";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <>
      <header
        className={`grid grid-cols-2 md:grid-cols-3 py-5  max-w-[2520px]
        mx-auto
        md:px-10
        sm:px-2
        px-4 items-center sticky top-0 z-10 ${
          scrollPosition > 0 && "bg-white shadow-sm"
        }`}
      >
        <div>
          <Link href="/" className=" ">
            <Image src="/lita.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex justify-center space-x-5">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className=" text-slate-600 font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="hidden md:block font-semibold px-4 py-2  rounded-full bg-slate-900 text-white">
            Contact
          </button>
          <button className="md:hidden p-1 rounded-full bg-slate-900 text-white hover:bg-white hover:text-slate-900">
            <CgMenuMotion
              className="h-8 w-8 cursor-pointer shrink-0 "
              onClick={() => setShowSideBar(true)}
            />
          </button>
        </div>
      </header>

      <SideBar
        isVisible={showSideBar}
        onClose={() => setShowSideBar(false)}
        links={links}
      />
    </>
  );
};

export default Header;
