/** @format */
"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Logo } from "@/app/images/navbar";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LanguageDropdown from "./languageDropdown";

const Navigationbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<"ID" | "EN">("ID");
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("Visi-Misi");
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({});

  const handleLanguageChange = (language: "ID" | "EN") => {
    setSelectedLanguage(language);
  };

  const handleScroll = useCallback(() => {
    const sections = ["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"];
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);

    // Improved section detection logic
    for (const section of sections) {
      const sectionElement = sectionsRef.current[section];
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // More precise section detection
        if (
          rect.top <= windowHeight * 0.3 && 
          rect.bottom >= windowHeight * 0.3
        ) {
          setActive(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    const sections = ["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"];
    
    // Store references to section elements
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        sectionsRef.current[section] = element;
      }
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      setActive(section);  // Immediately set active state
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Disclosure as="nav" className={`navigationbar fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="w-full px-4 sm:px-14 py-10 sm:py-6">
          <div className="w-full relative flex items-center justify-between self-stretch">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-start">
              <div className={`text-lg flex items-center gap-1 font-semibold sm:ml-0 ml-auto transition-colors duration-300 ${isScrolled ? 'text-[#074B5B]' : 'text-white'}`}>
                <Image src={Logo} alt="Logo" width={30} height={24} />
                Noesantara
              </div>
            </div>

            <div className="nav-center hidden sm:flex absolute left-2/4 transform -translate-x-1/2 items-center rounded-full sm:items-stretch">
              <div className="hidden sm:block">
                <div className={`flex rounded-full transition-colors duration-300 ${isScrolled ? 'bg-[#EFEFFA]' : ''}`}>
                  {["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"].map((item) => (
                    <button
                      key={item}
                      className={`text-sm px-5 py-3 transition-colors duration-300 
                        ${active === item 
                          ? (isScrolled ? 'bg-[#007399] text-white' : 'active')
                          : (isScrolled ? '!text-[#007399]' : '')}`
                      }
                      onClick={() => scrollToSection(item)}
                    >
                      {item.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-0 flex items-center gap-3 sm:static sm:ml-6 sm:pr-0 sm:gap-3">
              <LanguageDropdown 
                selectedLanguage={selectedLanguage} 
                onSelectLanguage={handleLanguageChange} 
                isScrolled={isScrolled} 
              />
              <button className={`btn-login font-semibold transition-colors duration-300 
                ${isScrolled 
                  ? 'bg-[#007399] !text-white hover:bg-[#005d7a]'
                  : 'bg-white text-[#074B5B] hover:bg-gray-200'}`}
              >
                Masuk
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"].map((item) => (
              <button
                key={item}
                className={`bg-gray-900 ${active === item ? "active" : ""}`}
                onClick={() => scrollToSection(item)}
              >
                {item.replace("-", " ")}
              </button>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navigationbar;