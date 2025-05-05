"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";

import { navigation } from "../../../utils";
import logo from "../../../assets/kuta-logo-py.png";
import whiteLogo from "../../../assets/kutaLogoWhite.png";
import "./styles.sass";
import NavContactButton from "../NavContactButton";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type NavigationProps = {
  isAdoption?: boolean;
};

export default function Navigation({ isAdoption = false }: NavigationProps) {
  const [locale, setLocale] = useState<string>("es");
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("KUTAAPP_LOCALE="))
      ?.split("=")[1];
      if(cookieLocale){
        setLocale(cookieLocale);
      } else {
        const browserLocale = navigator.language.slice(0,2);
        setLocale(browserLocale);
        document.cookie = `KUTAAPP_LOCALE=${browserLocale};`;
        router.refresh();
      }
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    setIsOpen(false);
    document.cookie = `KUTAAPP_LOCALE=${newLocale};`;
    router.refresh();
  }

  const currentLabel = locale === "es" ? "Español" : "English";
  const alternateLabel = locale === "es" ? "English" : "Español";
  const alternateCode = locale === "es" ? "en" : "es";
  const t = useTranslations("Navigation");

  return (
    <>
      <nav
        className={`md:mx-12 sm:mx-7 mx-5 ${
          isAdoption ? "bg-purple" : "bg-white"
        }`}
      >
        <div className="flex justify-between w-full">
          <div className="flex items-center align-left">
            <Link href="/" passHref>
              <Image
                src={isAdoption ? whiteLogo : logo}
                alt="Kuta"
                width={50}
                height={50}
                className={`w-10 h-10 mx-auto md:mx-0 flex align-left`}
              />
            </Link>
            {/* Desktop Menu (always visible on md+) */}
            <ul className="hidden md:inline-flex md:flex-row md:gap-2">
              {navigation.map((item: any, index: number) => (
                <li key={index}>
                  <a
                    className={`landing-text block px-4 py-2 font-inter font-normal ${
                      isAdoption ? "text-white" : "text-slate-800"
                    }`}
                    href={item.link}
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-x-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full border   flex items-center justify-between py-3 px-4 text-inter font-normal gap-x-2 
                  ${isAdoption ? "bg-purple border-white text-white" : "border-slate-600 text-slate-600 bg-white"}`}
              >
                {currentLabel}
                <span
                  className={`material-symbols-outlined ${isAdoption ? "text-white" : "text-slate-600"}`}
                  style={{ fontSize: "24px" }}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {isOpen && (
                <div className="absolute mt-2 right-0 bg-white border border-slate-300 rounded-md shadow-md w-full z-10">
                  <button
                    onClick={() => changeLocale(alternateCode)}
                    className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-100 font-normal"
                  >
                    {alternateLabel}
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <NavContactButton isPurple={isAdoption} />
              </div>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className={`md:hidden ${
                  isAdoption ? "text-white" : "text-slate-800"
                }  mr-4 ${openMenu ? "ml-44" : "ml-4"}`}
              >
                <FontAwesomeIcon icon={byPrefixAndName.fas["bars"]} size="xl" />
              </button>
              {openMenu && (
                <ul className="fixed top-20 right-1 left-1 flex flex-col rounded-lg bg-white w-full md:hidden">
                  {navigation.map((item: any, index: number) => (
                    <li key={index} className="my-2">
                      <a
                        className="landing-text block px-4 py-2"
                        href={item.link}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
          rel="stylesheet"
        />
      </nav>
    </>
  );
}
