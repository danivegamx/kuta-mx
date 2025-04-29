
import Navigation from "../app/components/Navigation";
import Footer from "../app/components/Footer";

import "../styles/styles.sass";
import { getHomePageData } from "../app/api";
import Landing from "../app/components/Home";

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
      <Footer isPurple/>
    </main>
  );
}

export default Home;
