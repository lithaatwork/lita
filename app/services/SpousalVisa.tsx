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
      <Modal
        isOpen={isOpen}
        title={"Spousal Visa"}
        closeModal={closeModal}
        sizeLg
      >
        <section className="p-5">
          <div className="p-3 bg-slate-200 text-slate-700 rounded-md">
            <p>
              Applicants seeking a permanent residence permit may need to
              provide evidence of being married to a citizen or permanent
              resident for at least five years. They must also submit a
              declaration of support from their citizen or permanent resident
              spouse, along with the spouse&apos;s identity document. If the
              spouse is a permanent resident, a copy of their permanent
              residence permit is also required.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-lg">
              The following are the documents required for applicants applying
              for a permanent residence permit based on being a spouse of a
              citizen or permanent resident for at least five years:
            </h3>
            <ol className="list-disc mt-3 bg-teal-100 text-teal-900 p-5  rounded-md">
              <li>
                Renewed temporary resident visa while awaiting the permanent
                residence permit outcome.
              </li>
              <li>VFS appointment letter.</li>
              <li>
                Duly completed DHA-947 form online (handwritten forms not
                accepted).
              </li>
              <li>
                Payment receipt of the application fee (R1550) if paid through
                Electronic Fund Transfer (EFT).
              </li>
              <li>Valid original passport and passport photograph.</li>
              <li>
                Valid spousal visa for temporary sojourn if applying within the
                Republic.
              </li>
              <li>Unabridged birth certificate or birth record extract.</li>
              <li>Deed poll (name, surname, or sex change) if applicable.</li>
              <li>
                Original police clearance certificate from countries of
                residence for over 12 months since turning 18 (not older than
                six months at submission, except for South Africa).
              </li>
              <li>Medical report not older than six months.</li>
              <li>Yellow fever vaccination certificate if applicable.</li>
              <li>
                Marriage certificate, notarial agreement, customary union
                certificate, or civil union certificate as proof of being a
                spouse for five years.
              </li>
              <li>
                Notarial agreement confirming the permanent spousal relationship
                for at least two years before the visa application and five
                years at the time of permanent residence permit application, and
                that neither party is in another marriage or relationship.
              </li>
              <li>
                Divorce decree or death certificate of the deceased spouse if
                applicable.
              </li>
              <li>
                Declaration of support from the citizen or permanent resident
                spouse.
              </li>
              <li>Proof of financial support between spouses.</li>
              <li>
                Copy of the identity document of the citizen or permanent
                resident spouse.
              </li>
              <li>
                Copy of the permanent residence permit if the spouse is a
                permanent resident.
              </li>
              <li>
                Present yourself for biometrics at the visa facilitation centre.
              </li>
            </ol>
          </div>
          <div className="text-center md:text-end text-xs">
            {" "}
            <p>
              adapted from
              https://visa.vfsglobal.com/one-pager/dha/southafrica/english/index.html#spouse
            </p>{" "}
          </div>
        </section>
      </Modal>
    </>
  );
};

export default SpousalVisa;
