/** @format */

import React from "react";

const scrollbutton = () => {
  return (
    <button className="btn-next px-4 h-full pb-3">
      <div className="text flex flex-col items-center pt-5 pb-3">
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>J</span>
        <span>U</span>
        <span>T</span>
      </div>
      <div className="circle overflow-hidden relative bg-white rounded-full flex items-center justify-center">
        <div className="circle-arrow absolute left-1/2"></div>
        <div className="circle-arrow2 absolute top-1/2 left-1/2"></div>
      </div>
    </button>
  );
};

export default scrollbutton;
