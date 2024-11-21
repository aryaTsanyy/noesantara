/** @format */

import React from "react";
import ScrollingCollab from "./scrollingCollab";

const collabSection = () => {
  return (
    <div className="colab-container h-full mx-14 overflow-hidden pt-5 pb-10 my-3 bg-white rounded-3xl flex flex-col gap-14 items-center justify-center">
      <div className="collab-title flex flex-col gap-6 w-2/5">
        <h1 className="mx-auto px-4 py-2 text-center">Kolaborasi</h1>
        <h3 className="text-berbagai">Berbagai perusahaan yang berkolaborasi dalam mewujudkan Smart City IKN</h3>
      </div>
      <ScrollingCollab />
    </div>
  );
};

export default collabSection;
