"use client";
import { useState } from "react";
import Modal from "../components/Modal";

const SpousalVisa = () => {
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
            Study Visa
          </h1>
          <div className="p-3 bg-slate-200 text-slate-700 rounded-md">
            <p>
              If you are an international student who wishes to pursue studies
              in South Africa, you can apply for a study visa by completing Form
              BI-1738. Study visas should be applied for at the VFS Centre
              nearest to the educational institution where you plan to study, or
              at the nearest South African embassy, mission, or consulate
              abroad.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-lg">
              The following supporting documents must be submitted along with
              the BI-1738 application form:{" "}
            </h3>
            <ol className="list-disc mt-3 bg-purple-100 text-purple-900 p-5  rounded-md">
                <li>
                  A passport valid for at least 30 days after the intended visit
                  expires.
                </li>
                <li>Payment of the required fee.</li>
                <li>A vaccination certificate, if mandated by the Act.</li>
                <li>
                  Proof of financial capability to cover living expenses during
                  your stay in the country and to pay for tuition fees. This can
                  be demonstrated through bank statements, available cash, or
                  travelers&rsquo; cheques.
                </li>
                <li>Proof of medical insurance.</li>
                <li>
                  A cash deposit equivalent to the value of a return ticket.
                </li>
                <li>
                  For African students, an undertaking from the relevant
                  government to assume full responsibility for the student and
                  cover all associated costs in the event of deportation.
                </li>
                <li>Medical and radiology reports.</li>
                <li>An unabridged birth certificate for minors.</li>
                <li>
                  In the case of minors, details of the person in South Africa
                  who will act as the guardian, along with a letter from that
                  person confirming guardianship.
                </li>
                <li>
                  Consent from both parents for your stay in South Africa, or
                  from the parent with sole custody, along with proof of sole
                  custody.
                </li>
                <li>
                  An official acceptance letter from the educational institution
                  where you intend to study, confirming provisional acceptance
                  and the duration of the course.
                </li>
                <li>
                  Proof of annual medical coverage for the duration of the
                  study, obtained from a medical scheme registered under the
                  Medical Schemes Act.
                </li>
                <li>
                  If you are 18 years or older, a police clearance certificate
                  from each country where you resided for 12 months or longer
                  since turning 18 must be submitted.
                </li>
            </ol>
              <h3 className="text-lg my-3">When processing study permit applications, the following considerations are given priority:</h3>
              <ol className="list-disc my-3 bg-slate-200 text-slate-700 p-5 rounded-md">
                <li>South African citizens and residents must not be displaced by foreigners at local educational institutions.</li>
                <li>The student must demonstrate sufficient funds to cover daily living expenses, accommodation, and tuition fees throughout their stay in South Africa.</li>
                <li>The student must have adequate medical coverage from a registered South African medical scheme, with proof of such coverage.</li>
                </ol>
          </div>
          <div className="text-center md:text-end text-xs"> <p>adapted from http://www.dha.gov.za/index.php/immigration-services/types-of-visas</p> </div>
        </section>
      </Modal>
    </>
  );
};

export default SpousalVisa;
