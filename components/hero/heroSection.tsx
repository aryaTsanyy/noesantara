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
          <Image src={IknIMG} alt="ikn" className="img-hero z-10" />
        </div>
      </div>
      <div className="hero-container z-30 h-screen flex flex-col mx-14 py-20 justify-end">
        <div className="container-top w-full h-full z-30 relative">
          <HeroPopup />
        </div>
        <div className="container-bottom flex items-left justify-between z-30">
        <div className="left-hero flex flex-col mt-20">
          <div className="title-hero text-left">
            <h1 className="selamatDatang text-left">
              Selamat Datang di<span className="text-blue-500 ml-2.5 md:ml-2.5 sm:ml-1">Noesantara</span>
            </h1>
          </div>
          <div className="desc-hero text-left mt-4">
            <h3>Platform Smart City Ibu Kota Nusantara yang Terintegrasi</h3>
          </div>
        </div>
        <div className="right-hero hidden md:block">
            <Scrollbutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
