"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";

const CriticalSkills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const OpenModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button className="primary-btn" onClick={OpenModal}>
        View Requirements
      </button>
      <Modal isOpen={isOpen} title={""} closeModal={closeModal} sizeLg>
        <section className="p-5">
          <h1 className="mb-4 text-xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
            Critical Skills
          </h1>
          <div className="p-3 bg-slate-200 text-slate-700 rounded-md">
            <p>
              Applications for permanent residency in South Africa are assessed
              under Section 26 (Direct Residency Permits) and Section 27
              (Residency-on-Other-Grounds Permits) of the Immigration Act 2002
              (Act No 13 of 2002), in conjunction with Regulation 33 of the
              Immigration Regulations.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-lg">
              For the initial Critical Skills Visa application, the following
              documents are required:
            </h3>
            <ol className="list-disc mt-3 bg-sky-100 text-sky-900 p-5  rounded-md">
              <li>
                Duly completed online form (handwritten forms not accepted).
              </li>
              <li>
                Passport valid for at least 30 days after the intended visit.
              </li>
              <li>
                Medical and radiological reports (not older than 6 months).
              </li>
              <li>
                Marriage certificate or proof of foreign spousal relationship,
                if applicable.
              </li>
              <li>
                Affidavit and documentation proving cohabitation and financial
                responsibilities for a spousal relationship.
              </li>
              <li>Proof of customary marriage, if applicable.</li>
              <li>
                Divorce decree, court order for custody, or death certificate,
                where relevant.
              </li>
              <li>
                Written consent and proof of sole custody from parents, if
                applicable.
              </li>
              <li>Proof of legal adoption, if applicable.</li>
              <li>
                Police clearance certificates from countries of residence (not
                older than 6 months).
              </li>
              <li>
                Yellow fever vaccination certificate if traveling from or
                transiting through an endemic area.
              </li>
              <li>
                Undertaking by the employer for deportation costs or proof of
                sufficient financial means.
              </li>
              <li>
                Proof of critical skills category, occupation, and evaluation of
                foreign qualification by SAQA.
              </li>
            </ol>

            <h3 className="text-lg my-3">
              For Critical Skills Visa renewal, the following additional
              requirements may apply:
            </h3>
            <ol className="list-disc my-3 bg-slate-200 text-slate-700 p-5 rounded-md">
              <li>
                Proof of employment or employer contact (except for specific
                occupations).
              </li>
              <li>Proof of financial means for certain occupations.</li>
              <li>
                Proof of critical skills category and evaluation of foreign
                qualification.
              </li>
            </ol>
          </div>
          <div className="text-center md:text-end text-xs">
            {" "}
            <p>
              adapted from
              https://visa.vfsglobal.com/one-pager/dha/southafrica/english/index.html#critical-skills-visa
            </p>{" "}
          </div>
        </section>
      </Modal>
    </>
  );
};

export default CriticalSkills;
