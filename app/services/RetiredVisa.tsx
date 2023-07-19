"use client";
import { useState } from "react";
import Modal from "../components/Modal";

const RetiredVisa = () => {
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
            Permanent Residency
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
              If any of the following conditions apply to you, you may be
              classified as a prohibited person:
            </h3>
            <ol className="list-disc mt-3 bg-red-100 text-red-900 p-5  rounded-md">
              <li>
                You have contagious diseases that are easily transmissible, such
                as cholera, pestilence, yellow fever, or any other diseases
                specified by the Department of Health.
              </li>
              <li>
                There is an outstanding warrant for your arrest or a conviction
                for offenses including genocide, torture, drug trafficking,
                money laundering, kidnapping, terrorism, or murder, obtained in
                South Africa or any country with which South Africa maintains
                regular diplomatic relations.
              </li>
              <li>
                You are associated with or support an organization that promotes
                racial hatred or engages in social violence.
              </li>
              <li>
                You are a member of an organization that employs crime or
                terrorism to achieve its objectives.
              </li>
              <li>
                You have previously been deported and have not undergone
                rehabilitation in accordance with the Department&apos;s
                prescribed procedure.
              </li>
            </ol>

            <h3 className="text-lg my-3">
              Here are some of the common documents required for permanent
              residency
            </h3>
            <ol className="list-disc my-3 bg-slate-200 text-slate-700 p-5 rounded-md">
              <li>A full set of fingerprints.</li>
              <li>
                A marriage certificate or proof of spousal relationship if
                applicable.
              </li>
              <li>
                A divorce decree or proof of legal separation if applicable.
              </li>
              <li>Proof of custody of a minor if applicable.</li>
              <li>A death certificate for a deceased spouse if applicable.</li>
              <li>Parental consent in the case of minors.</li>
              <li>Proof of judicial adoption of a minor if applicable.</li>
              <li>
                Police clearance certificates from all countries where you
                resided for one year or longer since turning 18.
              </li>
              <li>
                A valid temporary residency permit (if already in South Africa).
              </li>
            </ol>
          </div>
          <div className="text-center md:text-end text-xs">
            {" "}
            <p>
              adapted from
              http://www.dha.gov.za/index.php/immigration-services/types-of-visas
            </p>{" "}
          </div>
        </section>
      </Modal>
    </>
  );
};

export default RetiredVisa;
