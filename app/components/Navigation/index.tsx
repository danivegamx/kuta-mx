import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";

import { navigation } from '../../../utils';
import landing from "../../../assets/landing.jpg";
import './styles.sass';

export default function Navigation({ data }: any) {
  return (<>
    <nav>
      <div className="container mx-auto">
        <Image
            src={landing}
            alt="Kuta"
            width={80}
            height={80}
            className="landing-logo"
          />
        <ul>
          {navigation.map((item: any, index: number) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="social-icons">
          <a><FontAwesomeIcon icon={byPrefixAndName.fab['instagram']} /></a>
          <a href="https://www.facebook.com/profile.php?id=61556841081748" target="_blank"><FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /></a>
        </div>
      </div>
    </nav>
  </>);
}