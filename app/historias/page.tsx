"use client";

import { useEffect }  from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import './styles.sass';

function Historias() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <main className="adoptions-main">
      <header>
        <Navigation />
      </header>
      <section className="stories-section container mx-auto relative">
        <div className="elfsight-app-f578e2c8-7317-4b52-bca8-4ce79eafa59b" data-elfsight-app-lazy></div>
      </section>
      <Footer />
    </main>
  );
}

export default Historias;