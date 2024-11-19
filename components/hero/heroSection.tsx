/** @format */

import { IknIMG } from "@/app/images/hero-section";
import Image from "next/image";
import React from "react";
import { HeroPopup, Scrollbutton } from ".";

const heroSection = () => {
  return (
    <div className="hero-section w-full relative h-full">
      <div className="bg-hero w-full h-screen absolute bottom-0">
        <div className="absolute gradient-hero w-full h-screen z-20"></div>
        <div className="absolute bottom-0 ikn-bg z-10 mx-24">
          <Image src={IknIMG} alt="ikn" className="z-10" />
        </div>
      </div>
      <div className="hero-container z-50 h-screen flex flex-col mx-14 py-20 justify-end">
        <div className="container-top w-full h-full z-50 relative">
          <HeroPopup />
        </div>
        <div className="container-bottom flex items-center justify-between z-50">
          <div className="left-hero flex flex-col">
            <div className="title-hero flex items-center gap-4">
              <h1>Selamat Datang di</h1>
              <span>Noesantara</span>
            </div>
            <div className="desc-hero">
              <h3>Platform Smart City Ibu Kota Nusantara yang Terintegrasi </h3>
            </div>
          </div>
          <div className="right-hero">
            <Scrollbutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
