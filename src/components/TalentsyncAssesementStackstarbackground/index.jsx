import React from "react";

import { Img } from "../Img";

const TalentsyncAssesementStackstarbackground = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[19px] inset-[0] justify-center m-auto rounded-[1px] w-5"
          src="images/img_starbackground.svg"
          alt="starbackground"
        />
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-5">
          <Img
            className="h-[19px] rounded-bl-[1px] rounded-br-[1px] w-5"
            src="images/img_star.svg"
            alt="star"
          />
        </div>
      </div>
    </>
  );
};

TalentsyncAssesementStackstarbackground.defaultProps = {};

export default TalentsyncAssesementStackstarbackground;