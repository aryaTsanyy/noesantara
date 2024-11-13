/** @format */

import { Navigationbar } from "@/components/navbar";
import { Scrollbutton } from "@/components/button";

export default function Home() {
  return (
    <div className="w-full fixed">
      <Navigationbar />
      <Scrollbutton />
    </div>
  );
}
