import React from "react";
import Container from "./Container";
import Link from "next/link";
import {
  TbCircleLetterC,
  TbCircleLetterP,
  TbCircleLetterS,
} from "react-icons/tb";
import { HiChevronRight } from "react-icons/hi2";

const OurServices = () => {
  return (
    <Container>
      <section className="my-16 ">
        <div className=" py-8 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6">
          <div className=" mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 ">
              What we do to serve you best
            </h2>
            <p className="text-slate-500 text-center sm:text-xl ">
              Our focus is to facilitate a smooth & simple process of sorting
              your papers, no hustles , no fuss
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="space-y-3">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 ">
                <TbCircleLetterS
                  className="text-purple-600 animate-ping"
                  size={28}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Study Visas</h3>
              <p className="text-slate-500 ">
                Foreign students wishing to study in South Africa can apply for
                a study visa by completing Form BI-1738. The visa can be
                obtained at a VFS...
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-900 "
              >
                Read More
                <HiChevronRight />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center items-center mb-4 w-10 h-10  rounded-full bg-blue-100 lg:h-12 lg:w-12 ">
                <TbCircleLetterC
                  className="text-blue-600 animate-bounce "
                  size={28}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Critial Skills Visa</h3>
              <p className="text-slate-500 ">
                The Critical Skills Work Visa, introduced by the Department of
                Home Affairs, supports the objectives of programs like the
                National Deve...{" "}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-900 "
              >
                Read More
                <HiChevronRight />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center items-center bg-red-100 mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                <TbCircleLetterP
                  className="text-red-600 animate-spin"
                  size={28}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Permanent Residency</h3>
              <p className="text-slate-500 ">
                To apply for permanent residency in South Africa, there are two
                categories: Direct Residency Permits and
                Residency-on-Other-Grounds Permits.{" "}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-900 "
              >
                Read More
                <HiChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurServices;
