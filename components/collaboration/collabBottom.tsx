/** @format */
"use client";
import * as CollabIMG from "@/app/images/collab";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const CollabBottom = () => {
  return (
    <div className="containerBottom my-20 flex items-center justify-between">
      <Image src={CollabIMG.BgBatik} alt="bgBatik" objectFit="cover" className="absolute z-0" />
      <div className="left-Collab ml-14 w-1/2 z-10">
        <h1 className="text-start w-10/12">
          <Typewriter
            options={{
              strings: [`<span style="color: #59D6FF;">Sukseskan</span> <span style="color: white;">Nusantara Kota Cerdas Masa Depan Bersama Kita!</span>`],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>

      <div className="right-Collab mr-14 relative w-1/2 flex flex-col">
        <div className="top-Right flex justify-end relative h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className="lingkaran-satu absolute right-80 animate-float-slow">
            <circle cx="25" cy="25" r="25" fill="#59D6FF" />
          </svg>
          <Image src={CollabIMG.Train} alt="Train" width={250} height={250} className="kereta-collab mr-20 animate-float-medium" />
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="lingkaran-dua absolute top-40 right-5 animate-float-fast">
            <circle cx="30" cy="30" r="30" fill="#59D6FF" />
          </svg>
        </div>
        <div className="bottom-Right relative flex justify-end items-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="lingkaran-tiga mr-20 animate-float-slow">
            <circle cx="10" cy="10" r="10" fill="#59D6FF" />
          </svg>
          <Image src={CollabIMG.Tree} alt="Tree" width={200} height={200} className="pohon-collab items-end animate-float-fast" />
        </div>
      </div>
    </div>
  );
};

export default CollabBottom;
