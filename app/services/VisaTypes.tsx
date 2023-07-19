import { visaData } from "@/data/visaData";

import StudyVisa from "./StudyVisa";
import PermanentRes from "./PermanentRes";
import CriticalSkills from "./CriticalSkills";
import CircleLetter from "./CircleLetter";
import BusinessVisa from "./BusinessVisa";
import RelativeVisa from "./RelativeVisa";
import SpousalVisa from "./SpousalVisa";
import RetiredVisa from "./RetiredVisa";

type CircleLetters = {
  [key: string]: JSX.Element;
};

const VisaTypes = () => {
 
  return (
    <>
      {visaData.map((visa) => (
        <div
          className="flex flex-row space-x-4 space-y-5 items-center"
          key={visa.type}
        >
          <div>
            <CircleLetter type={visa.type} />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-semibold ">{visa.title}</h3>
            <p>{visa.shortDescr}</p>
            {visa.type === "study" && <StudyVisa />}
            {visa.type === "permanent" && <PermanentRes />}
            {visa.type === "critical" && <CriticalSkills />}
            {visa.type === "business" && <BusinessVisa />}
            {visa.type === "relative" && <RelativeVisa />}
            {visa.type === "spousal" && <SpousalVisa />}
            {visa.type === "retired" && <RetiredVisa />}
          </div>
        </div>
      ))}
    </>
  );
};

export default VisaTypes;
