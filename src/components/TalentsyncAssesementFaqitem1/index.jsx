import React from "react";

import { Img } from "../Img";
import {Text} from "../Text";


const TalentsyncAssesementFaqitem1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <Text
              className="text-gray-900 text-xl w-full"
              size="txtInterSemiBold20"
            >
              {props?.questiontext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_pluscircle.svg"
              alt="pluscircle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementFaqitem1.defaultProps = {
  questiontext: "Can I use ClearLink on multiple devices?",
};

export default TalentsyncAssesementFaqitem1;