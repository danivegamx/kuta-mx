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

  const [metadata, setMetadata] = useState({
    titulo: '',
    introduccion: '',
    secciones: [{
      title: '',
      metadata: {
        preguntas: [{
          pregunta: [{
            id: '-1',
            metadata: {
              etiqueta_de_pregunta: ''
            },
            type: ''
          }]
        }]
      }
    }]
  });

  const [mascotData, setMascotdata] = useState({
    title: '',
    foto_mascota_1: {
      imgix_url: ''
    },
    edad: '',
    raza: '',
    fecha_de_resguardo: ''
  });
  const [currentSection, setCurrentSection] = useState(-1);
  const [answers, setAnswers] = useState();

  const handleChanges = (event: any, section: number) => {

  }

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
      setMascotdata({ ...metadata, title });
    };

    if (mascotId) {
      fetchMetadata();
      fetchMascotData(mascotId);
    }
  }, [mascotId]);

  const startQ = (index: number) => {
    setCurrentSection(index);
  };

  const renderMultiOptions: any = (options: any, index: number) => {};

  const renderInput: any = (type: string, index: number) => {
    let input = null;
    switch (type) {
      case 'preguntas-texto-largos':
          input = <input type="text" onChange={(e: any) => handleChanges(e, index)} placeholder="Respuesta" />;
        break;
      case 'preguntas-texto-sencillos':
          input = <input type="text" onChange={(e: any) => handleChanges(e, index)} placeholder="Respuesta" />;
        break;
      case 'pregunta-fechas':
          input = <input type="date" onChange={(e: any) => handleChanges(e, index)} placeholder="Respuesta" />;
        break;
      case 'preguntas-multiopcion':
          input = <input type="text" onChange={(e: any) => handleChanges(e, index)} placeholder="Respuesta" />;
        break;
    }
    return input;
  };

  const { titulo, introduccion, secciones } = metadata;
  const { foto_mascota_1, edad, raza, fecha_de_resguardo, title } = mascotData;

  return (
    <main className="questionnaire-main">
      <header>
        <Navigation />
      </header>
      <div className="questionnaire-wrapper container mx-auto relative">
        <div className="mascot-indicator-banner grid grid-cols-12 block md:hidden">
          <div className="col-span-10 info">
            <h2>{ title }<span>{` · ${edad} años`}</span></h2>
            <p>{ raza }</p>
          </div>
          <figure className="col-span-2"><img alt={title} src={foto_mascota_1.imgix_url} /></figure>
        </div>
        <section className={`questionnaire-section ${currentSection === -1 ? 'current' : ''}`}>
          <h1>{ titulo }</h1>
          <article className="adoptions-header grid grid-cols-12 gap-4">
            <div className="intro col-span-12 md:col-span-9" dangerouslySetInnerHTML={{__html: introduccion}} />
            <div className="mascot-card col-span-12 md:col-span-3 hidden md:block">
              <span className="date">{`${moment(new Date(fecha_de_resguardo)).fromNow()}`}</span>
              <div className="mascot-image" style={{ background: `url(${foto_mascota_1.imgix_url})` }}></div>
              <div className="mascot-data grid grid-cols-2">
                <div>
                  <h2>{ title }<span>{` · ${edad} años`}</span></h2>
                  <p>{ raza }</p>
                </div>
                <div className="buttons">
                <button onClick={() => startQ(0)} className="main-primary" >
                  Comenzar
                </button>
                </div>
              </div>
            </div>
          </article>
          <div className="start-wrapper block md:hidden">
            <button onClick={() => startQ(0)} className="main-primary" >
              Comenzar
            </button>
          </div>
        </section>
        {
          secciones.map((seccion, index) => {
            const { title, metadata: { preguntas } } = seccion;
            const questions = preguntas[0].pregunta;
            return (
              <section key={index} className={`questionnaire-section ${currentSection === index ? 'current' : ''}`}>
                <h2>{ title }</h2>
                <div className="questions">
                  {
                    questions.map((question) => {
                      return (
                        <div key={question.id}>
                          <label>{ question.metadata.etiqueta_de_pregunta }</label>
                          { renderInput(question.type, index) }
                        </div>
                      )
                    })
                  }
                </div>
                <div className="buttons grid grid-cols-2 gap-4">
                  <button onClick={() => startQ(index - 1)} className="main-secondary" >
                    Atrás
                  </button>
                  <button onClick={() => startQ(index + 1)} className="main-primary" >
                    Siguiente
                  </button>
                </div>
              </section>
            );
          })
        }
      </div>
      <Footer />
    </main>
  );
};

export default Cuestionario;
