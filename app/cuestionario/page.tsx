/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import './styles.sass';
import '../adopciones/styles.sass';
import { getQuestionnaireData, getMascotData } from '../api';

function Cuestionario({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  metadata: { titulo: string; introduccion: string };
}) {
  const { mascotId } = searchParams || {};
  const [metadata, setMetadata] = useState({ titulo: '', introduccion: '' });
  const [mascotData, setMascotdata] = useState({ title: '', foto_mascota_1: '', edad: '', raza: '', fecha_de_resguardo: '', title: '' });

  useEffect(() => {
    const getMetadata = async () => {
      const data = await getQuestionnaireData();
      const { objects } = data;
      const { metadata } = objects[0];
      setMetadata(metadata);
    };
    const getMascotdata = async (slug: string) => {
      const data = await getMascotData(`${slug}`);
      const { objects } = data;
      const { metadata, title } = objects[0];
      setMascotdata({...metadata, title});
    };
    getMetadata();
    getMascotdata(`${mascotId}`);
  }, [mascotId]);

  const startQ = () => {
    console.log('yeah')
  };

  const { titulo, introduccion } = metadata;
  const { foto_mascota_1, edad, raza, fecha_de_resguardo, title } = mascotData;
  return (
    <main className="questionnaire-main">
      <header>
        <Navigation />
      </header>
      <div className="questionnaire-wrapper container mx-auto">
        <section className="questionnaire-section">
          <h1>{ titulo }</h1>
          <article className="adoptions-header grid grid-cols-12 gap-4">
            <div className="intro col-span-12 md:col-span-9" dangerouslySetInnerHTML={{__html: introduccion}} />
            <div className="mascot-card col-span-12 md:col-span-3">
              <span className="date">{`${moment(new Date(fecha_de_resguardo)).fromNow()}`}</span>
              <div className="mascot-image" style={{ background: `url(${foto_mascota_1.imgix_url})`, backgroundSize: 'cover' }}></div>
              <div className="mascot-data grid grid-cols-2">
                <div>
                  <h2>{ title }<span>{` · ${edad} años`}</span></h2>
                  <p>{ raza }</p>
                </div>
                <div className="buttons">
                <button onClick={startQ} className="primary" >
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
  );
}

export default Cuestionario;