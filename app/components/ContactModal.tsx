"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { HiMail, HiPhone } from "react-icons/hi";
import {  RiWhatsappFill } from "react-icons/ri";

type Props = {
  title: string;
};

const ContactModal = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const OpenModal = () => setIsOpen(true);
  return (
    <>
      <button onClick={OpenModal}>{title}</button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col space-y-6 p-4 bg-blue-100 rounded-md">
          <div className="flex items-center justify-between">
          <a href="tel:275101461">+27 21 5101461</a>

            <a href="tel:275101461">
              <HiPhone size={24} />
            </a>
            </div>
            <div className="flex items-center justify-between">
            <a href="mailto:info@lithaatwork.co.za">info@lithaatwork.co.za</a>

              <a href="mailto:info@lithaatwork.co.za">
                <HiMail size={24} />
              </a>
            </div>
            <div className="flex items-center justify-between">
              <a href="https://wa.me/27719067680?text=I'm%20inquiring%20about%20your%20services"> +27 71 906 7680</a>

              <a href="https://wa.me/27719067680?text=I'm%20inquiring%20about%20your%20services">
                <RiWhatsappFill size={24} />
              </a>
            </div>
         
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;
