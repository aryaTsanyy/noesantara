/** @format */
"use client";
import { Train, Tree } from "@/app/images/collab";
import { ikntrain, traintwo } from "@/app/images/transportasi";
import Image from "next/image";
// components/TransportationSection.tsx
import React, { useState } from "react";

const TransportationSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<"ART" | "MLO">("ART");
  const [description, setDescription] = useState<string>(
    `Autonomous Rail Transit adalah sistem transportasi publik cerdas berbasis kendaraan otonom yang menyerupai bus namun beroperasi tanpa rel dan tanpa pengemudi. Kendaraan ini dirancang untuk memberikan layanan transportasi yang efisien, ramah lingkungan, dan membantu menghubungkan berbagai titik penting secara cepat menggunakan teknologi modern kecerdasan buatan.`
  );

  const handleButtonClick = (button: "ART" | "MLO") => {
    setActiveButton(button);
    if (button === "ART") {
      setDescription(
        `Autonomous Rail Transit adalah sistem transportasi publik cerdas berbasis kendaraan otonom yang menyerupai bus namun beroperasi tanpa rel dan tanpa pengemudi. Kendaraan ini dirancang untuk memberikan layanan transportasi yang efisien, ramah lingkungan, dan membantu menghubungkan berbagai titik penting secara cepat menggunakan teknologi modern kecerdasan buatan.`
      );
    } else {
      setDescription(
        `Mobil Listrik Otonom adalah kendaraan ramah lingkungan yang menggunakan teknologi listrik dan kecerdasan buatan untuk bergerak secara otomatis tanpa pengemudi. Kendaraan ini dirancang untuk mengurangi emisi karbon dan memberikan pengalaman berkendara yang aman dan efisien.`
      );
    }
  };

  return (
    <div className="transportasi min-h-screen flex items-center text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="transportasi-head mb-6">
          <span className="text-sm px-3 py-1 rounded-full">Transportasi</span>
          <h2 className="mt-2">Transportasi Cerdas Ibu Kota Nusantara</h2>
          <p className="mt-2">Ingin merasakan pengalaman transportasi umum IKN yang cerdas dan inovatif? Temukan selengkapnya di sini..</p>
        </div>

        <div className="bottom-container flex">
          <div className="left-transport w-full">
            <div className="left-container flex flex-col items-start">
              {/* Left */}
              <div className="buttons-transport">
                <button className={`button-transport ${activeButton === "ART" ? "active" : ""}`} onClick={() => handleButtonClick("ART")}>
                  Autonomous Rail Transit (ART)
                </button>
                <button className={`button-transport ${activeButton === "MLO" ? "active" : ""}`} onClick={() => handleButtonClick("MLO")}>
                  Mobil Listrik Otonom
                </button>
              </div>
              <div className="description">
                <p className="typing text-justify">{description}</p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="right-Collab mr-14 relative w-1/2 flex -m-52 flex-col">
            <div className="top-Right flex justify-end items-start relative h-full ">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className="absolute right-80 animate-float-slow">
                <circle cx="25" cy="25" r="25" fill="#59D6FF" />
              </svg>
              <Image src={traintwo} alt="Train" width={250} height={250} className="mr-20 animate-float-medium" />
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute top-40 right-5 animate-float-fast">
                <circle cx="30" cy="30" r="30" fill="#59D6FF" />
              </svg>
            </div>
            <div className="bottom-Right relative flex justify-end items-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-20 animate-float-slow">
                <circle cx="10" cy="10" r="10" fill="#59D6FF" />
              </svg>
              <Image src={ikntrain} alt="Tree" width={200} height={200} className="items-end animate-float-fast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationSection;
