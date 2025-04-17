"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";

import { navigation } from "../../../utils";
import logo from "../../../assets/kuta-logo-py.png";
import "./styles.sass";
import NavContactButton from "../NavContactButton";

export default function Navigation({ data }: any) {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <>
      <nav className="md:mx-12 sm:mx-7 mx-5">
        <div className="flex justify-between w-full">
          <div className="flex items-center align-left">
            <Link href="/" passHref>
              <Image
                src={logo}
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
                  <a className="landing-text block px-4 py-2" href={item.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavContactButton />
            </div>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className={`md:hidden text-slate-800 mr-4 ${
                openMenu ? "ml-44" : "ml-4"
              }`}
            >
              <FontAwesomeIcon icon={byPrefixAndName.fas["bars"]} size="xl" />
            </button>
            {openMenu && (
              <ul className="fixed top-20 right-1 left-1 flex flex-col rounded-sm bg-[rgb(223,163,62)] w-full md:hidden">
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
      </nav>
    </>
  );
}
