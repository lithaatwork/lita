"use client";
import { useState } from "react";
import Modal from "../components/Modal";

const BusinessVisa = () => {
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
        title={"Business Visa"}
        closeModal={closeModal}
        sizeLg
      >
        <section className="p-5">
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
              For a business permit application, the following documents are
              required:
            </h3>
            <ol className="list-disc mt-3 bg-orange-100 text-orange-900 p-5  rounded-md">
              <li>
                Duly completed online form. Handwritten forms will not be
                accepted by the Department of Home Affairs.
              </li>
              <li>
                Valid passport which expires in no less than 30 days after the
                intended date of departure from the Republic.
              </li>
              <li>
                The application should be submitted in person, no less than 60
                days prior to the expiry date of the applicant’s visa. If the
                visa was issued for less than 30 days, it should be submitted
                not later than seven working days before the expiry of the visa.
              </li>
              <li>
                A yellow fever vaccination certificate if the person travelled
                or intends to travel from or transit through a yellow fever
                endemic area. The certificate is not required for direct transit
                through such an area.
              </li>
              <li>
                Original Police clearance certificate issued by the police or
                security authority in each country where the relevant applicant
                resided for 12 months or longer after attaining the age of 18
                years, except for South Africa, in respect of criminal records
                or the character of that applicant. The certificate should not
                be older than six months at the time of its submission.
              </li>
              <li>Biometric enrolment fee is applicable.</li>
              <li>
                A medical report not older than 6 months at the time of
                submission.
              </li>
              <li>
                A radiological report is not required for children under the age
                of 12 years or pregnant women and should not be older than 6
                months at the time of submission.
              </li>
              <li>
                Marriage certificate or proof of official recognition of a
                foreign spousal relationship issued by the authorities of the
                foreign country of the applicant (where applicable).
              </li>
              <li>
                An affidavit for a spousal relationship to a South African
                citizen or resident, along with documentation proving
                cohabitation and the extent to which the related financial
                responsibilities are shared by the parties and setting out the
                particulars of children in the spousal relationship.
              </li>
              <li>Divorce decree, where applicable.</li>
              <li>
                Court order granting full or specific parental responsibilities
                and rights, where applicable.
              </li>
              <li>
                Death certificate, in respect of the late spouse, where
                applicable.
              </li>
              <li>
                Written consent from both parents and full parental
                responsibilities, where applicable.
              </li>
              <li>Proof of adoption, where applicable.</li>
              <li>Legal separation order, where applicable.</li>
              <li>Proof of payment of the applicable fee.</li>
            </ol>

            <h2 className="text-lg my-3">
              Additional Supporting Documents for Business Visa Application
            </h2>
            <p>
              In addition to the documents mentioned above, applicants intending
              to establish a business or invest in a business that is not yet
              established in South Africa must provide:
            </p>
            <ol className="list-disc my-3 bg-slate-200 text-slate-700 p-5 rounded-md">
              <li>
                A certificate issued by a chartered accountant or a professional
                accountant registered with the relevant institute, confirming
                the availability of the required cash investment in the
                Republic. The amount is determined by the Minister, in
                consultation with the Minister of Trade and Industry, by notice
                in the Gazette.
              </li>
              <li>
                An undertaking by the applicant that at least 60% of the total
                staff compliment employed in the operations of the business
                shall be South African citizens or permanent residents employed
                permanently in various positions. Proof of compliance with this
                undertaking should be submitted within 12 months of issuance of
                the visa.
              </li>
              <li>
                An undertaking to register with various South African
                authorities, including the South African Revenue Service,
                Unemployment Insurance Fund, Compensation Fund for Occupational
                Injuries and Diseases, Companies and Intellectual Properties
                Commission (CPIC), and the relevant professional body, board, or
                council recognized by SAQA (where applicable).
              </li>
              <li>
                A letter of recommendation from the Department of Trade and
                Industry regarding the feasibility of the business and its
                contribution to the national interest of the Republic.
              </li>
            </ol>

            <p>
              For a business visa application by a foreigner who has established
              a business or invested in an existing business in South Africa,
              the following additional supporting documents are required:
            </p>
            <ol className="list-disc my-3 p-5 rounded-md bg-orange-100 text-orange-900">
              <li>
                A certificate issued by a chartered accountant or a professional
                accountant confirming the availability of the required cash
                investment or capital contribution in the Republic.
              </li>
              <li>
                Proof that at least 60% of the total staff complement employed
                in the operations of the business are South African citizens or
                permanent residents employed permanently in various positions.
              </li>
              <li>
                Proof of registration with various South African authorities,
                including the South African Revenue Service, Unemployment
                Insurance Fund, Compensation Fund for Occupational Injuries and
                Diseases, Companies and Intellectual Properties Commission
                (CPIC), and the relevant professional body, board, or council
                recognized by the South African Qualifications Authority (SAQA).
              </li>
              <li>
                A letter of recommendation from the Department of Trade and
                Industry regarding the continued feasibility of the business and
                its contribution to the national interest of the Republic.
              </li>
              <li>Financial statements for the preceding financial year.</li>
              <li>
                A letter of confirmation from the Department of Labour regarding
                the continued employment of at least 60% of the staff complement
                as South African citizens or permanent residents.
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

export default BusinessVisa;
