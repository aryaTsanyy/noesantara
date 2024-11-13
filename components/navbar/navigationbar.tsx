/** @format */
"use client";
import React, { useState } from "react";
import { Logo } from "@/app/images/navbar";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LanguageDropdown from "./languageDropdown";

const navigation = [
  { name: "Visi Misi", href: "#", current: false },
  { name: "Kolaborasi", href: "#", current: false },
  { name: "Layanan", href: "#", current: false },
  { name: "Transportasi", href: "#", current: false },
  { name: "Informasi", href: "#", current: false },
];

function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navigationbar() {
  const [selectedLanguage, setSelectedLanguage] = useState<"ID" | "EN">("ID");

  const handleLanguageChange = (language: "ID" | "EN") => {
    setSelectedLanguage(language);
  };
  return (
    <Disclosure as="nav" className="navigationbar bg-transparent w-full fixed top-0 left-0 z-20">
      <div className="w-full">
        <div className="w-full relative flex h-20 py-6 items-center justify-between self-stretch border-b border-black">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {/* Left Section with Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-lg flex items-center gap-1 font-semibold text-white">
              <Image src={Logo} alt="Logo" width={30} height={24} />
              Noesantara
            </div>
          </div>

          <div className="nav-center flex items-center rounded-full sm:items-stretch ">
            <div className="hidden sm:block">
              <div className="flex gap-10">
                {navigation.map((item) => (
                  <a className="menu-list" key={item.name} href={item.href}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right Section with Language Dropdown and Login */}
          <div className="flex items-center gap-3">
            <LanguageDropdown selectedLanguage={selectedLanguage} onSelectLanguage={handleLanguageChange} />
            <button className="btn-login bg-white font-semibold hover:bg-gray-200">Masuk</button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
