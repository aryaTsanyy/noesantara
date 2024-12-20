/** @format */

// LanguageDropdown.tsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowTopWhite, ArrowBottomWhite, ArrowTopGreen, ArrowBottomGreen } from "@/app/images/navbar";

type Language = "ID" | "EN";

interface LanguageDropdownProps {
  selectedLanguage: Language;
  onSelectLanguage: (language: Language) => void;
  isScrolled?: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ 
  selectedLanguage, 
  onSelectLanguage, 
  isScrolled = false 
}) => {
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

  const getArrowIcon = () => {
    if (isScrolled) {
      return isOpen ? ArrowTopGreen : ArrowBottomGreen;
    }
    return isOpen ? ArrowTopWhite : ArrowBottomWhite;
  };

  return (
    <div 
      className={`relative w-full dropdown-language rounded-full transition-colors duration-300 
        ${isScrolled ? '!bg-[#EFEFFA]' : ''}`}
    >
      <button 
        onClick={toggleDropdown} 
        className={`text-center rounded-full flex items-center justify-center focus:outline-none ${
          isScrolled ? '!text-[#007399]' : 'text-white'
        }`}
      >
        <Image 
          src={flagSrc(selectedLanguage)} 
          alt={`${selectedLanguage} flag`} 
          width={22} 
          height={22} 
          className="mr-1 flex items-center justify-center" 
        />
        <span className="flex items-center justify-center text-center">{selectedLanguage}</span>
        <Image
          src={getArrowIcon()}
          alt="Dropdown arrow"
          width={14}
          height={14}
          className="ml-2"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
          <button 
            onClick={() => handleSelect("ID")} 
            className={`flex items-center px-4 py-2 w-full text-left ${selectedLanguage === "ID" ? "bg-gray-100" : ""} hover:bg-gray-200 text-[#074B5B]`}
          >
            <Image src={flagSrc("ID")} alt="Indonesian flag" width={22} height={22} className="mr-2" />
            <span>ID</span>
            {selectedLanguage === "ID" && <span className="ml-auto">✔️</span>}
          </button>
          <button 
            onClick={() => handleSelect("EN")} 
            className={`flex items-center px-4 py-2 w-full text-left ${selectedLanguage === "EN" ? "bg-gray-100" : ""} hover:bg-gray-200 text-[#074B5B]`}
          >
            <Image src={flagSrc("EN")} alt="US flag" width={22} height={22} className="mr-2" />
            <span>EN</span>
            {selectedLanguage === "EN" && <span className="ml-auto">✔️</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;