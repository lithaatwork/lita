import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";


type Props = {
  testimony: string;
  pic: string;
  testifier: string;
  country: string;
};

const UserTestimonies = ({ testimony, pic, testifier, country }: Props) => {
  return (
    <div className="min-w-full px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ">
    <figure className=" ">
      <BiSolidQuoteAltLeft className=" mx-auto mb-3 text-gray-400" size={28} />
      <blockquote>
        <p className=" text-lg md:text-xl text-center font-medium text-white">{testimony}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <Image
          className="w-6 h-6 rounded-full"
          width={25}
          height={25}
          src={pic}
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-700 ">
          <div className="pr-3 font-medium text-white">{testifier}</div>
          <div className="pl-3 text-sm font-light text-gray-500 ">
            {country}
          </div>
        </div>
      </figcaption>
    </figure>
    </div>
    
  );
};

export default UserTestimonies;
