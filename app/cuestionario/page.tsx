"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';
import moment from "moment";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import './styles.sass';
import '../adopciones/styles.sass';
import { getQuestionnaireData, getMascotData } from '../api';

const Cuestionario = () => {
  const searchParams = useSearchParams();
  const mascotId = searchParams.get('mascotId');

  const [metadata, setMetadata] = useState({ titulo: '', introduccion: '' });
  const [mascotData, setMascotData] = useState({
    title: '',
    foto_mascota_1: { imgix_url: '' },
    edad: '',
    raza: '',
    fecha_de_resguardo: '',
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      const data = await getQuestionnaireData();
      const { objects } = data;
      const { metadata } = objects[0];
      setMetadata(metadata);
    };

    const fetchMascotData = async (id: string) => {
      const data = await getMascotData(id);
      const { objects } = data;
      const { metadata, title } = objects[0];
      setMascotData({ ...metadata, title });
    };

    if (mascotId) {
      fetchMetadata();
      fetchMascotData(mascotId);
    }
  }, [mascotId]);

  const startQ = () => {
    console.log('yeah');
  };

  const { titulo, introduccion } = metadata;
  const { foto_mascota_1, edad, raza, fecha_de_resguardo, title } = mascotData;

  return (
    <Suspense>
      <main className="questionnaire-main">
        <header>
          <Navigation />
        </header>
        <div className="questionnaire-wrapper container mx-auto">
          <section className="questionnaire-section">
            <h1>{titulo}</h1>
            <article className="adoptions-header grid grid-cols-12 gap-4">
              <div className="intro col-span-12 md:col-span-9" dangerouslySetInnerHTML={{ __html: introduccion }} />
              <div className="mascot-card col-span-12 md:col-span-3">
                <span className="date">{`${moment(new Date(fecha_de_resguardo)).fromNow()}`}</span>
                <div className="mascot-image bg-center bg-cover" style={{
                  backgroundImage: `url(${foto_mascota_1.imgix_url})`,
                  backgroundSize: 'cover'
                }}></div>
                <div className="mascot-data grid grid-cols-2">
                  <div>
                    <h2>{title}<span>{` · ${edad} años`}</span></h2>
                    <p>{raza}</p>
                  </div>
                  <div className="buttons">
                    <button onClick={startQ} className="primary">
                      Comenzar
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Cuestionario;
