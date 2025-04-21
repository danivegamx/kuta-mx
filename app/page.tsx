import qs from "../assets/qs.svg";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import "../styles/styles.sass";
import { getHomePageData } from "./api";
import Landing from "./components/Home";

async function Home() {
  const data = (await getHomePageData()) || [];
  const { objects } = data;
  const { metadata } = objects[0];
  const sectionsLength = Object.keys(metadata).length - 4;
  const sections = [];
  for (let i = 1; i <= sectionsLength; i++) {
    const section = metadata[`seccion_${i}`];
    sections.push(section);
  }
  return (
    <main>
      <header>
        <Navigation />
      </header>
      <Landing/>
      {/* <Hero data={objects[0]?.metadata?.hero} /> */}
      {/* {sections.map((section: any, index: number) => {
        if (section) {
          const { type } = section;
          const Component = getContentType(type);
          return <Component key={index} data={section} />;
        }
      })} */}
      <Footer isPurple/>
    </main>
  );
}

export default Home;
