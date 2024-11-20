/** @format */

// LanguageDropdown.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowBottom, ArrowTop } from "@/app/images/navbar";

type Language = "ID" | "EN";

interface LanguageDropdownProps {
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
  isScrolled?: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ selectedLanguage, onSelectLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language: Language) => {
    onSelectLanguage(language);
    setIsOpen(false);
  };
  const flagSrc = (language: Language) => {
    return `/flags/${language}.svg`;
  };

  return (
    <div className="relative w-full dropdown-language rounded-full">
      <button onClick={toggleDropdown} className="text-white text-center rounded-full flex items-center justify-center focus:outline-none">
        <Image src={flagSrc(selectedLanguage)} alt={`${selectedLanguage} flag`} width={20} height={20} className="mr-1 flex items-center justify-center" />
        <span className="flex items-center justify-center text-center">{selectedLanguage}</span>
        <Image
          src={isOpen ? ArrowTop : ArrowBottom}
          alt="Dropdown arrow"
          width={30} // Sesuaikan ukuran arrow
          height={30}
          className="ml-2"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
          <button onClick={() => handleSelect("ID")} className={`flex items-center px-4 py-2 w-full text-left ${selectedLanguage === "ID" ? "bg-gray-100" : ""} hover:bg-gray-200`}>
            <Image src={flagSrc("ID")} alt="Indonesian flag" width={20} height={20} className="mr-2" />
            <span>ID</span>
            {selectedLanguage === "ID" && <span className="ml-auto">✔️</span>}
          </button>
          <button onClick={() => handleSelect("EN")} className={`flex items-center px-4 py-2 w-full text-left ${selectedLanguage === "EN" ? "bg-gray-100" : ""} hover:bg-gray-200`}>
            <Image src={flagSrc("EN")} alt="US flag" width={20} height={20} className="mr-2" />
            <span>EN</span>
            {selectedLanguage === "EN" && <span className="ml-auto">✔️</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
