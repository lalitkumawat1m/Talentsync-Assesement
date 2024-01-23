import React from "react";

import { Img } from "../Img";

const TalentsyncAssesementMobileappstore1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-between w-[92%] md:w-full">
          <Img
            className="h-[25px] md:h-auto object-cover"
            src="images/img_googleplaylogo.png"
            alt="googleplaylogo"
          />
          <div className="flex flex-col items-start justify-start">
            <Img
              className="h-1.5"
              src="images/img_settings_white_a700_6x38.svg"
              alt="settings_Two"
            />
            <Img
              className="h-[17px] mt-[3px]"
              src="images/img_settings_white_a700_17x84.svg"
              alt="settings_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementMobileappstore1.defaultProps = {};

export default TalentsyncAssesementMobileappstore1;