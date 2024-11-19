/** @format */
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Logo } from "@/app/images/navbar";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LanguageDropdown from "./languageDropdown";

const Navigationbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<"ID" | "EN">("ID");

  const handleLanguageChange = (language: "ID" | "EN") => {
    setSelectedLanguage(language);
  };
  const [active, setActive] = useState<string>("Visi-Misi");

  const handleScroll = useCallback(() => {
    const sections = ["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"];
    let currentSection = sections[0];

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });

    setActive(currentSection);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Disclosure as="nav" className="navigationbar bg-transparent w-full fixed top-0 left-0 z-50">
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
              <div className="text-lg flex items-center gap-1 font-semibold text-white sm:ml-0 ml-auto">
                <Image src={Logo} alt="Logo" width={30} height={24} />
                Noesantara
              </div>
            </div>

            <div className="nav-center hidden sm:flex absolute left-2/4 transform -translate-x-1/2 items-center rounded-full sm:items-stretch ">
              <div className="hidden sm:block">
                <div className="flex">
                  {["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"].map((item) => (
                    <button key={item} className={`text-sm px-5 py-3 ${active === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
                      {item.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-0 flex items-center gap-3 sm:static sm:ml-6 sm:pr-0 sm:gap-3">
              <LanguageDropdown selectedLanguage={selectedLanguage} onSelectLanguage={handleLanguageChange} />
              <button className="btn-login bg-white font-semibold hover:bg-gray-200">Masuk</button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {["Visi-Misi", "Kolaborasi", "Layanan", "Transportasi", "Informasi"].map((item) => (
              <button key={item} className={`bg-gray-900 !text-red-700 ${active === item ? "active" : ""}`} onClick={() => scrollToSection(item)}>
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
