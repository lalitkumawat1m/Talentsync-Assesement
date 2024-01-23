import React from "react";

import { Img } from "../Img";

const TalentsyncAssesementMobileappstore = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[3px] w-[81%] md:w-full">
          <Img className="h-[21px]" src="images/img_user.svg" alt="user" />
          <div className="flex flex-col items-start justify-start w-[76%]">
            <Img
              className="h-1.5"
              src="images/img_settings.svg"
              alt="settings"
            />
            <Img
              className="h-[15px] mt-0.5"
              src="images/img_settings_white_a700.svg"
              alt="settings_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementMobileappstore.defaultProps = {};

export default TalentsyncAssesementMobileappstore;