/** @format */

import React from "react";
interface ButtonProps {
  activeTab: "art" | "electric"; // Nilai tombol aktif
  setActive: () => void; // Fungsi untuk mengatur tombol sebagai aktif
  isActive: boolean; // Apakah tombol ini aktif
  children: React.ReactNode;
}

const ButtonTransportasi: React.FC<ButtonProps> = ({ isActive, setActive, children }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const circle = button.querySelector(".hover-circle") as HTMLElement;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log({ x, y });

    if (circle) {
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    }
  };

  return (
    <button className={`button-transportasi px-4 py-2 rounded-full border relative overflow-hidden transition-all ${isActive ? "bg-white text-gray-800" : "text-white"}`} onMouseMove={handleMouseMove} onClick={setActive}>
      {children}
      <span className="hover-circle absolute top-0 left-0 w-0 h-0 bg-white opacity-50 rounded-full pointer-events-none transform scale-0 transition-transform duration-300" style={{ transform: "scale(0)" }}></span>
    </button>
  );
};

export default ButtonTransportasi;
