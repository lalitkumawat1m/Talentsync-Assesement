import React from "react";

import { Img} from "../Img";
import {Text} from "../Text"

const TalentsyncAssesementRowsearch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-7 items-center justify-start rounded-[50%] w-7">
          <Img
            className="h-7 rounded-[50%] w-7"
            src="images/img_search_blue_800_28x28.svg"
            alt="search"
          />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl w-full"
            size="txtInterRegular24Bluegray700"
          >
            {props?.durationtext}
          </Text>
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementRowsearch.defaultProps = {
  durationtext: "30 days free trial",
};

export default TalentsyncAssesementRowsearch;