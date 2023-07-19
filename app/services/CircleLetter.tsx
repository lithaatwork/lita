import {
    TbCircleLetterB,
    TbCircleLetterC,
    TbCircleLetterP,
    TbCircleLetterR,
    TbCircleLetterS,
  } from "react-icons/tb";

type CircleLetterProps = {
    type: string;
  };

const CircleLetter = ({type}: CircleLetterProps) => {
    const circleLetters:  Record<string, JSX.Element> = {
        study: (
          <div className="visa-icons  bg-purple-100 ">
            <TbCircleLetterS
              className="text-purple-600 animate-pulse"
              size={40}
            />
          </div>
        ),
        permanent: (
          <div className="visa-icons  bg-red-100 ">
            <TbCircleLetterP size={40} className="text-red-600 animate-bounce" />
          </div>
        ),
        critical: (
          <div className="visa-icons  bg-sky-100 ">
            <TbCircleLetterC size={40} className="text-sky-600 animate-pulse" />
          </div>
        ),
        business: (
          <div className="visa-icons  bg-orange-100 ">
            <TbCircleLetterB size={40} className="text-orange-600 animate-bounce" />
          </div>
        ),
        relative: (
          <div className="visa-icons  bg-green-100 ">
            <TbCircleLetterR size={40} className="text-green-600 animate-pulse" />
          </div>
        ),
        spousal: (
          <div className="visa-icons  bg-teal-100 ">
            <TbCircleLetterS size={40} className="text-teal-600 animate-bounce" />
          </div>
        ),
        retired: (
          <div className="visa-icons  bg-blue-100 ">
            <TbCircleLetterR size={40} className="text-blue-600 animate-pulse" />
          </div>
        ),
      };
  
      // Retrieve the circle letter component based on the visa type
      const circleLetter = circleLetters[type];
  
      // Return the circle letter component
      return circleLetter;
}

export default CircleLetter