import { links } from "@/lib/links";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <footer className="p-4 bg-slate-200 md:p-8 lg:p-10 ">
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="flex justify-center items-center ">
            <Link href="/" className="outline-none">
              <Image src="/lita.png" width={100} height={100} alt="logo" />
            </Link>
          </div>

          <p className="my-6 text-gray-500 dark:text-gray-400">
            Lita at work, your immigration services at ease.
          </p>
          <div className="flex flex-wrap space-x-5 justify-center items-center mb-6 ">
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
          <span className="text-sm text-gray-500 sm:text-center ">
            © {Year} <span className="hover:underline">Litha At Work™</span>.
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
