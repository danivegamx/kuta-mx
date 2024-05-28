'use client'

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";

import { navigation } from '../../../utils';
import landing from "../../../assets/landing.jpg";
import './styles.sass';

export default function Navigation({ data }: any) {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false)

  return (<>
    <nav>
      <div className="container mx-auto">

        <button onClick={() => setOpenMenu(!openMenu)} className={`md:hidden text-white mr-4 ${openMenu ? 'ml-44' : 'ml-4'}`}>
          <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} size="lg" />
        </button>

        <Image
          src={landing}
          alt="Kuta"
          width={80}
          height={80}
          className={`landing-logo w-14 h-14 md:w-20 md:h-20 mx-auto md:mx-0`}
        />

        <ul className={`md:inline-flex ${openMenu ? 'fixed flex flex-col z-20 inset-y-0 left-0 bg-[rgb(223,163,62)] h-full w-40' : 'hidden'}`}>
          {navigation.map((item: any, index: number) => (
            <li key={index} className={`${openMenu ? 'mt-10' : 'mt-0'}`}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className={`social-icons mt-3 md:mt-6 mr-4 ${openMenu && 'sticky z-20'}`}>
          <a ><FontAwesomeIcon icon={byPrefixAndName.fab['instagram']} size="lg" /></a>
          <a href="https://www.facebook.com/profile.php?id=61556841081748" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} size="lg" /></a>
        </div>
      </div>
    </nav>
  </>);
}