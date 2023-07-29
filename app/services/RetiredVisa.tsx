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
      <Modal
        isOpen={isOpen}
        title={"Retired Visa"}
        closeModal={closeModal}
        sizeLg
      >
        <section className="p-5">
          <div className="p-3 bg-slate-200 text-slate-700 rounded-md">
            <p>
              To retire in South Africa, individuals can apply for a retired
              person visa if they receive at least R37,000 per month from a
              pension fund or have a net worth or a combination of assets
              generating a minimum monthly income of R37,000. The application
              requires various documents, including a completed online form,
              passport, medical and radiological reports, marriage/divorce
              certificates, custody-related documents (if applicable), police
              clearance certificates, and proof of payment for fees.
            </p>
          </div>
          <div className="my-5">
            <h3 className="text-lg">Documents Required:</h3>
            <ol className="list-disc mt-3 bg-blue-100 text-blue-900 p-5  rounded-md">
              <li>
                Duly completed online form. Handwritten forms will not be
                accepted by the Department of Home Affairs.
              </li>
              <li>
                Passport valid for no less than 30 calendar days after the
                intended visit&apos;s expiry.
              </li>
              <li>A medical report.</li>
              <li>A radiological report.</li>
              <li>
                Marriage certificate or proof of official recognition in the
                case of a foreign spousal relationship (if applicable).
              </li>
              <li>
                Affidavit and documentation proving cohabitation and financial
                responsibilities for spousal relationship with a South African
                citizen or resident, including details of children (if
                applicable).
              </li>
              <li>
                Proof of a union recognized under the Recognition of Customary
                Marriages Act, 1998 (Act No. 120 of 1998) (if applicable).
              </li>
              <li>Divorce decree (if applicable).</li>
              <li>Proof of court order awarding custody (if applicable).</li>
              <li>Death certificate of late spouse (if applicable).</li>
              <li>
                Written consent from both parents and/or sole custody parent,
                with proof of sole custody (if applicable).
              </li>
              <li>Proof of legal adoption (if applicable).</li>
              <li>Legal separation order (if applicable).</li>
              <li>
                Original Police clearance certificate from each country where
                the applicant resided for 12 months or longer after turning 18,
                except for South Africa (the certificate should not be older
                than six months at the time of submission; not required for visa
                renewal or extension).
              </li>
              <li>Biometric enrolment fee applicable: Yes.</li>
              <li>
                A yellow fever vaccination certificate if traveling from or
                transiting through a yellow fever endemic area (not required for
                direct transit through such area).
              </li>
              <li>
                Proof of having the right to a pension or an irrevocable annuity
                or retirement account providing a minimum monthly payment of
                R37,000 for life from the applicant&apos;s country of origin; or
              </li>
              <li>
                A minimum prescribed net worth of R37,000, which may include a
                combination of assets, realizing per month.
              </li>
              <li>Proof of payment of the applicable fee.</li>
            </ol>

            <h3 className="text-lg my-3">RETIRED PERSON – RENEWAL</h3>
            <ol className="list-disc my-3 bg-slate-200 text-slate-700 p-5 rounded-md">
              <li>
                Duly completed online form. Handwritten forms will not be
                accepted by the Department of Home Affairs.
              </li>
              <li>
                Passport valid for no less than 30 calendar days after the
                intended visit&apos;s expiry.
              </li>
              <li>A medical report.</li>
              <li>A radiological report.</li>
              <li>
                Marriage certificate or proof of official recognition in the
                case of a foreign spousal relationship (if applicable).
              </li>
              <li>
                Affidavit and documentation proving cohabitation and financial
                responsibilities for spousal relationship with a South African
                citizen or resident, including details of children (if
                applicable).
              </li>
              <li>
                Proof of a union recognized under the Recognition of Customary
                Marriages Act, 1998 (Act No. 120 of 1998) (if applicable).
              </li>
              <li>Divorce decree (if applicable).</li>
              <li>Proof of court order awarding custody (if applicable).</li>
              <li>Death certificate of late spouse (if applicable).</li>
              <li>
                Written consent from both parents and/or sole custody parent,
                with proof of sole custody (if applicable).
              </li>
              <li>Proof of legal adoption (if applicable).</li>
              <li>Legal separation order (if applicable).</li>
              <li>
                Original Police clearance certificate from each country where
                the applicant resided for 12 months or longer after turning 18,
                except for South Africa (the certificate should not be older
                than six months at the time of submission; not required for visa
                renewal or extension).
              </li>
              <li>Biometric enrolment fee applicable: Yes.</li>
              <li>
                A yellow fever vaccination certificate if traveling from or
                transiting through a yellow fever endemic area (not required for
                direct transit through such area).
              </li>
              <li>
                Proof of having the right to a pension or an irrevocable annuity
                or retirement account providing a minimum monthly payment of
                R37,000 for life from the applicant&apos;s country of origin; or
              </li>
              <li>
                A minimum prescribed net worth of R37,000, which may include a
                combination of assets, realizing per month.
              </li>
              <li>Proof of payment of the applicable fee.</li>
            </ol>
          </div>
          <div className="text-center md:text-end text-xs">
            {" "}
            <p>
              adapted from
              https://visa.vfsglobal.com/one-pager/dha/southafrica/english/index.html#retired-person-visa
            </p>{" "}
          </div>
        </section>
      </Modal>
    </>
  );
};

export default RetiredVisa;
