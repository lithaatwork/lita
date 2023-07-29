"use client";
import { useState } from "react";
import Modal from "../components/Modal";

const RelativeVisa = () => {
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
      <Modal isOpen={isOpen} title={"Relative Visa"} closeModal={closeModal} sizeLg>
        <section className="p-5">
          <div className="p-3 bg-slate-200 text-slate-700 rounded-md">
            <p>
            If you are an immediate family member of a South African citizen or permanent resident, you can apply for a relative&apos;s permit after meeting the financial requirements stated in the Immigration Act, 2002. These permits are initially valid for 24 months and can be extended. The application process can be done at a Visa & Permit Facilitation Centre near your place of residence. Spouses and dependent children of South African citizens or permanent residents receive the permit for free, while other relatives are required to pay a fee to join their family members in South Africa.
            </p>
          </div>
          <div className="my-5">
            <ol className="list-disc mt-3 bg-green-100 text-green-900 p-5  rounded-md">
              <li>
              There are four types of Relative&apos;s Permits available for immediate family members of South African citizens or permanent residents: 
              Spouse, Permanent  Relationship, Brother/Sister, and Minor/Major Child.
              </li>
              <li>
              The permits are valid for a minimum of 24 months and can be extended.
              </li>
              <li>
              Various documents are required for each type of Relative&apos;s Permit application, including a completed online form, valid passport, yellow fever vaccination certificate (if applicable), police clearance certificate, biometric enrolment fee, medical report,
               radiological report (if applicable), marriage certificate or proof of spousal relationship, financial documents, and proof of payment of the applicable fee.
              </li>
              <li>
              For the Relative&apos;s Visa Renewal, similar documents are required, along with additional affidavits and documentation to prove the continued existence of the relationship.
              </li>
              <li>
              In cases of relationships concluded between two foreigners in a foreign country, official recognition of the relationship by the relevant authorities is required.
              </li>
              <li>
              The financial assurance amount is determined by the Minister and must be proven by current salary advice or a certified bank statement.
              </li>
            </ol>

           
          </div>
          <div className="text-center md:text-end text-xs">
            {" "}
            <p>
              adapted from
              https://visa.vfsglobal.com/one-pager/dha/southafrica/english/index.html#relative-visa-content
            </p>{" "}
          </div>
        </section>
      </Modal>
    </>
  );
};

export default RelativeVisa;
