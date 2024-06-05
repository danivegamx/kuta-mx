"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";
import moment from "moment";

import Loading from './loading';
import Sending from './sending';
// import Journey from './journey';
import { getQuestionnaireData, getMascotData, postForm } from '../../api';
import { metadataInitialState, mascotdataInitialState } from '../../../utils';

const Questionnaire = () => {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const mascotId = searchParams.get('mascotId');
  // * State handling
  const [metadata, setMetadata] = useState(metadataInitialState);
  const [mascotData, setMascotdata] = useState(mascotdataInitialState);
  // * Section handling
  const [currentSection, setCurrentSection] = useState(0);
  const [hasChildren, setHasChildren] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sent, setSent] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(10);
  // * Form handling
  const [validations, setValidations] = useState([{},{},{},{},{},{},{}]);
  const [answers, setAnswers] = useState({
    seccion1: {},
    seccion2: {},
    seccion3: {},
    seccion4: {},
    seccion5: {},
    seccion6: {},
    seccion7: {},
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      const data = await getQuestionnaireData();
      const { objects } = data;
      const { metadata } = objects[0];
      setMetadata(metadata);
      createValidationLayer(metadata.secciones);
    };

    const fetchMascotData = async (id: string) => {
      const data = await getMascotData(id);
      const { objects } = data;
      const { metadata, title } = objects[0];
      setMascotdata({ ...metadata, title });
      setIsLoading(false);
    };

    if (mascotId) {
      fetchMetadata();
      fetchMascotData(mascotId);
    }
  }, [mascotId]);

  const { titulo, introduccion, secciones, gracias } = metadata;
  const { edad, raza, title } = mascotData;

  const createValidationLayer = (sections: any) => {
    let validations: any = [];
    sections.forEach((section: any, i: number) => {
      let sectionValidations: any = {};
      section.metadata.preguntas[0].pregunta.forEach((question: any) => {
        sectionValidations[question.slug] = question.metadata.requerido;
      });
      validations.push(sectionValidations);
    });
    setValidations(validations);
  }

  const handleChanges = (event: any, section: number, question: string, displayQuestion: string) => {
    let currentSection: any = answers[`seccion${section}` as keyof typeof answers];
    currentSection[question] = {question: displayQuestion, response: event.target.value};

    setAnswers({...answers, [`seccion${section}`]: currentSection});
  }

  const validateSection = (section: number) => {
    const seccion = section - 1;
    let currentSection: any = answers[`seccion${seccion}` as keyof typeof answers];
    let sectionValidations = validations[seccion - 1];
    for (let key in sectionValidations) {
      if (sectionValidations[key as keyof typeof sectionValidations] && !currentSection[key]) {
        return { validated: false, field: key };
      }
    }
    return { validated: true };
  };

  const startQuestionnaire = () => {
    setCurrentSection(1);
    (ref.current as unknown as HTMLElement)?.scrollIntoView({behavior: 'smooth'});
  };

  const handlePhaseChange = (index: number) => {
    (ref.current as unknown as HTMLElement)?.scrollIntoView({behavior: 'smooth'});
    document.querySelectorAll('.questions input').forEach((input: any) => {
      input.classList.remove('error');
    });
    document.querySelectorAll('.questions textarea').forEach((input: any) => {
      input.classList.remove('error');
    });
    document.querySelectorAll('.option-wrapper').forEach((input: any) => {
      input.classList.remove('error');
    });
    const go = validateSection(index);
    if (go.validated) {
      setCurrentSection(index);
    } else {
      const element = document.getElementById(go.field as string);
      if (element) { // It means that the field is an input, text area
        element?.classList.add('error');
        element?.focus();
      } else { // radio
        document.querySelectorAll(`.${go.field}`).forEach((input: any) => {
          input.classList.add('error');
        });
      }
    }
  };

  const sendForm = async () => {
    setSent(true);
    const ok = await postForm(answers, title, secciones);
    if (ok) {
      setCurrentSection(9); // Final phase
    }
    setSent(false);
  };

  const renderMultiOptions: any = (options: any, slug: string, required: boolean, index: number, displayQuestion: string) => {
    return options.map((option: any) => {
      return (
        <fieldset key={option.id} className={`option-wrapper ${slug}`}>
          <input data-required={required} type="radio" id={option.slug} name={slug} value={option.slug} onChange={(e: any) => handleChanges(e, index, slug, displayQuestion)} />
          <label htmlFor={option.slug}>{ option.title }</label>
        </fieldset>
      );
    });
  };

  const renderInput: any = (type: string, index: number, slug: string, options: any, required: boolean, displayQuestion: string) => {
    let input = null;
    switch (type) {
      case 'preguntas-texto-largos':
          input = <textarea id={slug} data-required={required} onChange={(e: any) => handleChanges(e, index, slug, displayQuestion)} placeholder="Respuesta" />;
        break;
      case 'preguntas-texto-sencillos':
          input = <input id={slug} data-required={required} type="text" onChange={(e: any) => handleChanges(e, index, slug, displayQuestion)} placeholder="Respuesta" />;
        break;
      case 'pregunta-fechas':
          input = <input id={slug} data-required={required} type="date" onChange={(e: any) => handleChanges(e, index, slug, displayQuestion)} placeholder="Respuesta" />;
        break;
      case 'preguntas-multiopcion':
          input = <form className="grid grid-cols-3 gap-2">{ renderMultiOptions(options, slug, required, index, displayQuestion) }</form>;
        break;
    }
    return input;
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="questionnaire-wrapper container mx-auto relative">
        <div ref={ref} className="mascot-indicator-banner grid grid-cols-12 block md:hidden">
          <div className="col-span-10 info">
            <h2>{ title }<span>{` · ${edad} años`}</span></h2>
            <p>{ raza }</p>
          </div>
          <div className="col-span-2 mascot-icon"><FontAwesomeIcon icon={byPrefixAndName.fas['dog']} size="xl" /></div>
        </div>
        {/* <Journey sections={secciones} currentSection={currentSection} /> */}
        <section className={`questionnaire-section ${currentSection === 0 ? 'current' : 'md:my-4'}`}>
          <h1>{ titulo }</h1>
          <article className="adoptions-header grid grid-cols-1 gap-4">
            <div className="intro" dangerouslySetInnerHTML={{__html: introduccion}} />

            <div className="mascot-card col-span-12 md:col-span-3 hidden md:block">
              <div className="mascot-data">
                <div className="grid grid-cols-10">
                  <div className="mascot-basic col-span-8">
                    <h2>{ title }<span>{` · ${edad} años`}</span></h2>
                    <p>{ raza }</p>
                  </div>
                  <div className="col-span-2 mascot-icon"><FontAwesomeIcon icon={byPrefixAndName.fas['dog']} size="xl" /></div>
                </div>
                <div className="buttons">
                <button onClick={startQuestionnaire} className="main-primary" >
                  Comenzar
                </button>
                </div>
              </div>
            </div>

          </article>
          <div className="start-wrapper block md:hidden">
            <button onClick={startQuestionnaire} className="main-primary" >
              Comenzar
            </button>
          </div>
        </section>
        {
          secciones.map((seccion, i) => {
            const index = i + 1;
            const { title, metadata: { preguntas, texto_opcional } } = seccion;
            const questions = preguntas[0].pregunta;
            if (!hasChildren && currentSection === 5) {
              return (
                <section key={index} className={`md:my-8 questionnaire-section ${currentSection === index ? 'current' : ''}`}>
                  <h2>{ title }</h2>
                  <p>{ texto_opcional }</p>
                  <div className="buttons grid grid-cols-2 gap-4 mt-8">
                    <button onClick={() => handlePhaseChange(index + 1)} className="main-secondary" >
                      No
                    </button>
                    <button onClick={() => setHasChildren(true)} className="main-primary" >
                      Si
                    </button>
                  </div>
                </section>
              );
            } else if (currentSection === 8) {
              return (
                <section key={index} className={`md:my-8 questionnaire-section ${currentSection === index ? 'current' : ''}`}>
                  <h2>{ title }</h2>
                  <p>{ texto_opcional }</p>
                  <div className="buttons grid grid-cols-2 gap-4 mt-8">
                    <button onClick={() => handlePhaseChange(index - 1)} className="main-secondary" >
                      Atrás
                    </button>
                    <button onClick={() => sendForm()} className="main-primary" >
                      {!sent ? 'Acepto, Enviar' : <Sending />}
                    </button>
                  </div>
                </section>
              );
            } else {
              return (
                <section key={index} className={`md:my-8 questionnaire-section ${currentSection === index ? 'current' : ''}`}>
                  <h2>{ title }</h2>
                  <div className="questions grid grid-cols-2 gap-4">
                    {
                      questions.map((question) => {
                        return (
                          <div key={question.id} className={question.type === 'preguntas-texto-largos' ? 'col-span-2' : 'col-span-2 md:col-span-1'}>
                            <label className="label">{ question.metadata.etiqueta_de_pregunta }<span>{!question.metadata.requerido || '*'}</span></label>
                            { renderInput(question.type, index, question.slug, question.metadata.opciones, question.metadata.requerido, question.metadata.etiqueta_de_pregunta) }
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="buttons grid grid-cols-2 gap-4 mt-8">
                    <button onClick={() => handlePhaseChange(index - 1)} className="main-secondary" >
                      Atrás
                    </button>
                    <button onClick={() => handlePhaseChange(index + 1)} className="main-primary" >
                      Siguiente
                    </button>
                  </div>
                </section>
              );
            }
          })
        }
        <section className={`md:my-8 questionnaire-section ${currentSection === 9 ? 'current' : ''}`}>
          <p dangerouslySetInnerHTML={{ __html: gracias }} />
          <button onClick={() => router.push('/')} className="main-primary" >
            Regresar al inicio
          </button>
        </section>
      </div>
    );
  }
};

export default Questionnaire;
