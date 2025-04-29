"use client";

import { useState, useEffect } from "react";
import moment from "moment";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

import './styles.sass';
import { getAdoptionsData } from '../api';
import Adoptions from "../components/Adoptions/adoptions";

function Adopciones() {
  const [metadata, setMetadata] = useState({ titulo: '', descripcion: '', mascotas: [] });

  useEffect(() => {
    const fetchMetadata = async () => {
      const data = (await getAdoptionsData()) || [];
      const { objects } = data;
      const { metadata } = objects[0];
      setMetadata(metadata);
    };
    fetchMetadata();
  }, []);

  const { titulo, descripcion, mascotas } = metadata;

  return (
    <main >
      <header>
        <Navigation />
      </header>
      <Adoptions></Adoptions>
      <Footer />
    </main>
  );
}

export default Adopciones;