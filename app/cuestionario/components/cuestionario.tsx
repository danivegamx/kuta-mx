"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-e994b6ac63/icons";
import moment from "moment";
import { content } from "../../../assets/Content/content";
import Loading from "./loading";
import Sending from "./sending";
import benchDog from "../../../assets/benchDog.png"
import Image from "next/image";
// import Journey from './journey';
import { getQuestionnaireData, getMascotData, postForm } from "../../api";
import { metadataInitialState, mascotdataInitialState } from "../../../utils";
import { useLocalStorage } from "@/app/context/useLocalStorage";
import AdoptionSteps from "@/app/components/AdoptionSteps/adoptionSteps";
import Requirements from "@/app/components/Requirements/requirements";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";

const Questionnaire = () => {
  const t = useTranslations("AdoptionProcess")
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const mascotId = searchParams.get("mascotId");
  // * State handling
  const [metadata, setMetadata] = useState(metadataInitialState);
  const [mascotData, setMascotdata] = useState(mascotdataInitialState);
  const { item: mascot, saveItem: saveMascot } = useLocalStorage(
    "mascot-id",
    mascotId
  );
  const { item: yesNo, saveItem: saveYesNo } = useLocalStorage("yes-no", "");
  // * Section handling
  const [currentSection, setCurrentSection] = useState(0);
  const [hasChildren, setHasChildren] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sent, setSent] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(10);
  // * Form handling
  const [validations, setValidations] = useState([{}, {}, {}, {}, {}, {}, {}]);

  // const [answers, setAnswers] = useState({
  //   seccion1: {},
  //   seccion2: {},
  //   seccion3: {},
  //   seccion4: {},
  //   seccion5: {},
  //   seccion6: {},
  //   seccion7: {},
  // });

  // * Using useLocalStorage hook

  type Answers = {
    [key: string]: any | string | null | undefined;
  };

  const {
    item: answers,
    saveItem: saveAnswers,
    loading: loadingAnswers,
  } = useLocalStorage<Answers>("adoption-answers", {
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
      saveMascot(mascotId);
      if (localStorage.getItem("adoption-answers")) {
        saveAnswers(
          JSON.parse(localStorage.getItem("adoption-answers") || "{}")
        );
      }
      if (localStorage.getItem("yes-no")) {
        saveYesNo(JSON.parse(localStorage.getItem("yes-no") || ""));
      }
    }
  }, [mascotId]);

  const { titulo, introduccion, secciones, gracias } = metadata;
  const { edad, raza, title, genero, fecha_de_resguardo, foto_mascota_1, talla } =
    mascotData;

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
  };

  const handleChanges = (
    event: any,
    section: number,
    question: string,
    displayQuestion: string
  ) => {
    let currentSection: any =
      answers[`seccion${section}` as keyof typeof answers];
    currentSection[question] = {
      question: displayQuestion,
      response: event.target.value,
    };

    //setAnswers({ ...answers, [`seccion${section}`]: currentSection });
    const updatedAnswers = {
      ...answers,
      [`seccion${section}`]: currentSection,
    };
    saveAnswers(updatedAnswers);
  };

  const validateSection = (section: number) => {
    const seccion = section - 1;
    let currentSection: any =
      answers[`seccion${seccion}` as keyof typeof answers];
    let sectionValidations = validations[seccion - 1];
    for (let key in sectionValidations) {
      if (
        sectionValidations[key as keyof typeof sectionValidations] &&
        !currentSection[key]
      ) {
        return { validated: false, field: key };
      }
    }
    return { validated: true };
  };

  const startQuestionnaire = () => {
    setCurrentSection(1);
    (ref.current as unknown as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePhaseChange = (index: number) => {
    (ref.current as unknown as HTMLElement)?.scrollIntoView({
      behavior: "smooth",
    });
    document.querySelectorAll(".questions input").forEach((input: any) => {
      input.classList.remove("error");
    });
    document.querySelectorAll(".questions textarea").forEach((input: any) => {
      input.classList.remove("error");
    });
    document.querySelectorAll(".option-wrapper").forEach((input: any) => {
      input.classList.remove("error");
    });
    const go = validateSection(index);
    if (go.validated) {
      setCurrentSection(index);
    } else {
      const element = document.getElementById(go.field as string);
      if (element) {
        // It means that the field is an input, text area
        element?.classList.add("error");
        element?.focus();
      } else {
        // radio
        document.querySelectorAll(`.${go.field}`).forEach((input: any) => {
          input.classList.add("error");
        });
      }
    }
  };

  const sizeMap: Record<string, string> = {
    Pequeña: 'SM',
    Mini: 'XS',
    Mediana: 'MD',
    Grande: 'LG',
  };

  moment.locale("es");

  function getAge(dateString: string): string {
      const birthDate = dayjs(dateString);
      const now = dayjs();
  
      const years = now.diff(birthDate, 'year');
  
      if (years >= 1) {
        return `${years} ${years === 1 ? 'año' : 'años'}`;
      } else {
        if(years === 0){
          return 'N/A'
        }
        else{
          const months = now.diff(birthDate, 'month');
        return `${months} ${months === 1 ? 'mes' : 'meses'}`;
        }
      }
    }

  const sendForm = async () => {
    setSent(true);
    const ok = await postForm(answers, title, secciones);
    if (ok) {
      setCurrentSection(9); // Final phase
    }
    setSent(false);
  };

  const renderMultiOptions: any = (
    options: any,
    slug: string,
    required: boolean,
    index: number,
    displayQuestion: string
  ) => {
    return options.map((option: any) => {
      const isChecked =
        answers[`seccion${index}`]?.[slug]?.response === option.slug;
      return (
        <fieldset key={option.id} className={`option-wrapper ${slug}`}>
          <input
            checked={isChecked}
            data-required={required}
            type="radio"
            id={option.slug}
            name={slug}
            value={option.slug}
            onChange={(e: any) =>
              handleChanges(e, index, slug, displayQuestion)
            }
          />
          <label htmlFor={option.slug}>{option.title}</label>
        </fieldset>
      );
    });
  };

  const renderInput: any = (
    type: string,
    index: number,
    slug: string,
    options: any,
    required: boolean,
    displayQuestion: string
  ) => {
    let input = null;
    let answer = answers[`seccion${index}`]?.[slug]?.response || "";
    switch (type) {
      case "preguntas-texto-largos":
        input = (
          <textarea
            id={slug}
            data-required={required}
            value={answer}
            onChange={(e: any) =>
              handleChanges(e, index, slug, displayQuestion)
            }
            placeholder="Respuesta"
          />
        );
        break;
      case "preguntas-texto-sencillos":
        input = (
          <input
            id={slug}
            data-required={required}
            value={answer}
            type="text"
            onChange={(e: any) =>
              handleChanges(e, index, slug, displayQuestion)
            }
            placeholder="Respuesta"
          />
        );
        break;
      case "pregunta-fechas":
        input = (
          <input
            id={slug}
            data-required={required}
            value={answer}
            type="date"
            onChange={(e: any) =>
              handleChanges(e, index, slug, displayQuestion)
            }
            placeholder="Respuesta"
          />
        );
        break;
      case "preguntas-multiopcion":
        input = (
          <form className="grid grid-cols-3 gap-2">
            {renderMultiOptions(
              options,
              slug,
              required,
              index,
              displayQuestion
            )}
          </form>
        );
        break;
    }
    return input;
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className={`questionnaire-wrapper mx-auto relative md:bg-[url('/assets/paw-pattern.png')] bg-repeat bg-top bg-white ${currentSection !== 0 ? "flex justify-center" : ""}`}>
        {/* <Journey sections={secciones} currentSection={currentSection} /> */}
        <section
          className={`pt-[120px]  px-5 sm:px-7 md:px-12 ${currentSection !== 0 ? "hidden" : "block"
            }`}
        >
          <article className="flex flex-col sm:flex-row gap-y-6 gap-x-6 max-w-7xl mx-auto">
            <AdoptionSteps isAdoption></AdoptionSteps>

            <div className="flex-1">
              <div className="mascot-data">
                <div
                  className={`rounded-lg border border-1 border-slate-300 overflow-hidden shrink-0`}
                >
                  <div className="relative">
                    <div
                      className={`rounded-t-lg h-[300px] md:w-[300px] lg:w-full`}
                      style={{
                        background: `url(${foto_mascota_1.imgix_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                      }}
                    />
                    <div className="w-11 h-8 bg-white rounded-b-lg border border-slate-400 absolute top-0 right-3 border-t-0">
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="font-inter text-slate-600">{sizeMap[talla?.value as string] || talla?.value}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mascot-data p-5 gap-y-2 flex flex-col bg-white rounded-b-lg">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="inter font-medium text-xl text-slate-800">
                        {title}
                      </h2>
                      <div className="flex flex-row gap-x-2">
                        <div className="px-3 py-1 bg-slate-200 rounded-full flex justify-center text-slate-800 inter items-center capitalize">
                          {raza}
                        </div>
                        <div
                          className={`w-10 h-10 rounded-full flex justify-center items-center ${genero === "Hembra"
                            ? "bg-rose-300"
                            : "bg-[#8EC5FF]"
                            }`}
                        >
                          <span
                            className="material-symbols-outlined text-white"
                            style={{ fontSize: "24px" }}
                          >
                            {genero === "Hembra" ? "female" : "male"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex items-center gap-x-2">
                        <span
                          className="material-symbols-outlined text-slate-600"
                          style={{ fontSize: "22px" }}
                        >
                          cake
                        </span>
                        <p className="inter font-medium text-slate-600">{getAge(edad)}</p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span
                          className="material-symbols-outlined text-slate-600"
                          style={{ fontSize: "22px" }}
                        >
                          calendar_month
                        </span>
                        <p className="inter font-medium text-slate-600">
                          <span className="date">{`${moment(
                            new Date(fecha_de_resguardo)
                          ).fromNow()}`}</span>
                        </p>
                      </div>
                    </div>
                    <div className="buttons">
                      <button
                        onClick={startQuestionnaire}
                        className={`w-full bg-white bg-transparent border border-purple hover:bg-gradient-to-r from-purple to-violet-900 hover:text-white hover:border-transparent 
                      transition duration-300 ease-in-out flex flex-1 rounded-md py-2 justify-center font-inter text-purple font-normal`}
                      >
                        {t("start")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className={`px-5 py-6 sm:px-7 md:px-12 ${currentSection !== 0 ? "hidden" : "block"
          }`} >
          <div className="max-w-7xl mx-auto">
            <Requirements isAdoption></Requirements>
          </div>
        </section>
        <section className={`px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 ${currentSection !== 0 ? "hidden" : "block"
          }`}>
          <div className="flex flex-col md:flex-row gap-x-20 gap-y-20 max-w-7xl mx-auto">
            <div className="flex flex-col w-full sm:flex-col gap-y-8 md:w-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-kulim">
                {t("important")}
              </h3>
              <div className="text-slate-700 whitespace-pre-line">
                <p
                  dangerouslySetInnerHTML={{ __html: t('importantContent').replace(/\n/g, "<br/><br/>") }}></p>
                <br></br>
                <a className="font-medium" href="https://www.quantumstudios.dev/privacy-policy">{t("privacyPolicy")}</a>
              </div>

            </div>
            <div className="md:w-1/2 flex items-center justify-end">
              <Image src={benchDog} alt={"Dog on a bench"} />
            </div>
          </div>
        </section>
        {secciones.map((seccion, i) => {
          const index = i + 1;
          const {
            title,
            metadata: { preguntas, texto_opcional },
          } = seccion;
          const questions = preguntas[0].pregunta;
          if (!hasChildren && currentSection === 5 && yesNo === "") {
            return (
              <section
                key={index}
                className={`my-8 px-5 pb-10 sm:px-7 sm:pb-7 md:px-12 md:pb-20 w-full questionnaire-section ${currentSection === index ? "current" : ""
                  }`}
              >
                <h2>{title}</h2>
                <p>{texto_opcional}</p>
                <div className="buttons grid grid-cols-2 gap-4 mt-8">
                  <button
                    onClick={() => {
                      handlePhaseChange(index + 1);
                      saveYesNo("no");
                    }}
                    className="main-secondary rounded-lg"
                  >
                    No
                  </button>
                  <button
                    onClick={() => {
                      setHasChildren(true);
                      saveYesNo("yes");
                    }}
                    className="main-primary rounded-lg"
                  >
                    Si
                  </button>
                </div>
              </section>
            );
          } else if (currentSection === 8) {
            return (
              <section
                key={index}
                className={`my-8 px-5 pb-10 sm:px-7 sm:pb-7 md:px-12 md:pb-20 w-full questionnaire-section ${currentSection === index ? "current" : ""
                  }`}
              >
                <h2>{title}</h2>
                <p>{texto_opcional}</p>
                <div className="buttons grid grid-cols-2 gap-4 mt-8">
                  <button
                    onClick={() => handlePhaseChange(index - 1)}
                    className="main-secondary rounded-lg"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => {
                      sendForm();
                      localStorage.clear();
                    }}
                    className="main-primary rounded-lg"
                  >
                    {!sent ? "Acepto, Enviar" : <Sending />}
                  </button>
                </div>
              </section>
            );
          } else {
            return (
              <section
                key={index}
                className={`my-8 px-5 pb-10 sm:px-7 sm:pb-7 md:px-12 md:pb-20 w-full questionnaire-section ${currentSection === index ? "current" : ""
                  }`}
              >
                <h2>{title}</h2>
                <div className="questions grid grid-cols-2 gap-4">
                  {questions.map((question) => {
                    return (
                      <div
                        key={question.id}
                        className={
                          question.type === "preguntas-texto-largos"
                            ? "col-span-2"
                            : "col-span-2 md:col-span-1"
                        }
                      >
                        <label className="label">
                          {question.metadata.etiqueta_de_pregunta}
                          <span>{!question.metadata.requerido || "*"}</span>
                        </label>
                        {renderInput(
                          question.type,
                          index,
                          question.slug,
                          question.metadata.opciones,
                          question.metadata.requerido,
                          question.metadata.etiqueta_de_pregunta
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="buttons grid grid-cols-2 gap-4 mt-8">
                  <button
                    onClick={() => {
                      if (yesNo === "no" && index === 6) {
                        handlePhaseChange(index - 2);
                      } else {
                        handlePhaseChange(index - 1);
                      }
                    }}
                    className="main-secondary rounded-lg"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => {
                      if (yesNo === "no" && index === 4) {
                        handlePhaseChange(index + 2);
                      } else {
                        handlePhaseChange(index + 1);
                      }
                    }}
                    className="main-primary rounded-lg"
                  >
                    Siguiente
                  </button>
                </div>
              </section>
            );
          }
        })}
        <section
          className={`md:my-8 questionnaire-section ${currentSection === 9 ? "current" : ""
            }`}
        >
          <p dangerouslySetInnerHTML={{ __html: gracias }} />
          <button onClick={() => router.push("/")} className="main-primary">
            Regresar al inicio
          </button>
        </section>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
          rel="stylesheet"
        />
      </div>
    );
  }
};

export default Questionnaire;
