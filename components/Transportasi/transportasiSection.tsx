/** @format */
"use client";
// components/TransportationSection.tsx
import React, { useState } from "react";

const TransportationSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<"ART" | "MLO">("ART");
  const [description, setDescription] = useState<string>(
    `<span class="highlight">Autonomous Rail Transit</span> adalah sistem transportasi publik cerdas berbasis kendaraan otonom yang menyerupai bus namun beroperasi tanpa rel dan tanpa pengemudi. Kendaraan ini dirancang untuk memberikan layanan transportasi yang efisien, ramah lingkungan, dan membantu menghubungkan berbagai titik penting secara cepat menggunakan teknologi modern kecerdasan buatan.`
  );

  const handleButtonClick = (button: "ART" | "MLO") => {
    setActiveButton(button);
    if (button === "ART") {
      setDescription(
        `<span class="highlight">Autonomous Rail Transit</span> adalah sistem transportasi publik cerdas berbasis kendaraan otonom yang menyerupai bus namun beroperasi tanpa rel dan tanpa pengemudi. Kendaraan ini dirancang untuk memberikan layanan transportasi yang efisien, ramah lingkungan, dan membantu menghubungkan berbagai titik penting secara cepat menggunakan teknologi modern kecerdasan buatan.`
      );
    } else {
      setDescription(
        `<span class="highlight">Mobil Listrik Otonom</span> adalah kendaraan ramah lingkungan yang menggunakan teknologi listrik dan kecerdasan buatan untuk bergerak secara otomatis tanpa pengemudi. Kendaraan ini dirancang untuk mengurangi emisi karbon dan memberikan pengalaman berkendara yang aman dan efisien.`
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
                <p className="typing">{description}</p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-cover rounded-full border-4 border-gray-600" style={{ backgroundImage: `url('https://example.com/image1.jpg')` }}></div>
              <div className="w-20 h-20 bg-cover rounded-full border-4 border-gray-600" style={{ backgroundImage: `url('https://example.com/image2.jpg')` }}></div>
            </div>
            <div className="w-56 h-32 bg-cover rounded-lg" style={{ backgroundImage: `url('https://example.com/image3.jpg')` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationSection;
