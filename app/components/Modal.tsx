"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { HiOutlineXMark } from "react-icons/hi2";

type ModalProps = {
  isOpen: boolean;
  title?: string
  closeModal: () => void;
  sizeLg?: boolean
  children: React.ReactNode;
};

const Modal = ({ isOpen,title, closeModal, sizeLg, children }: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full ${sizeLg ? 'max-w-[72rem] ': 'max-w-lg '} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                  <div className="flex justify-end">
                    <HiOutlineXMark
                      className="cursor-pointer h-6 w-6 "
                      onClick={closeModal}
                    />
                  </div>
                  <Dialog.Title
                    as="h3" 
                    className=" mb-4 text-xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl "
                  >
                    {title}
                  </Dialog.Title>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;