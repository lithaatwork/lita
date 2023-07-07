import { Fragment, createElement } from "react";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import {
  HiOutlineXMark,
  HiPhone,
} from "react-icons/hi2";
import { BsFacebook,  BsLinkedin } from "react-icons/bs";
import {} from "react-icons/tb";
import { MdEmail,  MdLocationOn } from "react-icons/md";
import Link from "next/link";
import React from "react";

type Props = {
  isVisible: boolean;
  links: { title: string; url: string }[];
  onClose: () => void;
};

const SideBar = ({ isVisible, onClose, links }: Props) => {
  if (!isVisible) return null;

  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0  z-50  "
        open={isVisible}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50"></div>
        </Transition.Child>

        <div className="flex flex-col w-64 h-full bg-white relative z-10 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="overflow-y-auto flex-1 transition-all">
              <div className="flex justify-end mt-3">
                <button
                  className="p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white"
                  onClick={onClose}
                >
                  <HiOutlineXMark className="cursor-pointer h-6 w-6 " />
                </button>
              </div>

              <div className="flex flex-col gap-y-6 px-6 pt-8  ">
                <div className="flex justify-center my-3">
                  <Link href="/" className="outline-none">
                    <Image src="/lita.png" width={70} height={70} alt="logo" />
                  </Link>
                </div>

                <div className="flex flex-col space-y-3 ">
                  {links.map((link, index) => (
                    <Link
                      href={link.url}
                      className="flex flex-col items-center text-slate-600  transition-all font-semibold "
                      key={index}
                    >
                      {link.title}
                    </Link>
                  ))}

                  <button className=" p-2 font-semibold rounded-full  text-slate-600 ">
                    Contact
                  </button>
                </div>

                <div className="flex flex-col space-y-4 justify-center border-t p-5 ">
                  <h3 className="text-lg ">Contact Information</h3>
                  <p className="flex items-center space-x-2"> <HiPhone className="text-red-600"/> <span className="text-xs">+27 21 510 1461</span> </p>
                  <p className="flex items-center space-x-2"> <MdEmail className="text-red-600"/> <span className="text-xs">info@litaatwork.co.za</span> </p>
                  <p className="flex items-center space-x-2"> <MdLocationOn className="text-red-600"/> <span className="text-xs">27B Main Road , Cape Town</span> </p>
                </div>

                <div className="flex space-x-4 justify-center border-t p-5 ">
                  <Link href="/facebook.com" className="text-slate-900 ">
                    <BsFacebook size={24} />
                  </Link>
                  <Link href="/linkedIn.com" className="text-slate-900 ">
                    <BsLinkedin size={24}/>
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideBar;
