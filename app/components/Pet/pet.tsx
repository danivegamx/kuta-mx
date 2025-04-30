"use client";

import { useState, useEffect } from "react";
import { getAdoptionsData } from "../../api";
import moment from "moment";
import Button from "../../components/Button";
import "./styles.sass";
import "moment/locale/es";
import { useTranslations } from "next-intl";
import dayjs from 'dayjs';
import { QuickView } from "./quickView";

type PetProps = {
  isLanding?: boolean; // Optional, defaults to false (light background)
};

export default function Pet({ isLanding = false }: PetProps) {
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [metadata, setMetadata] = useState({
    titulo: "",
    descripcion: "",
    mascotas: [],
  });

  moment.locale("es");

  useEffect(() => {
    const fetchMetadata = async () => {
      const data = (await getAdoptionsData()) || [];
      const { objects } = data;
      const { metadata } = objects[0];
      setMetadata(metadata);
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(3); // phone
      } else if (width < 768) {
        setVisibleCount(4); // tablet
      } else {
        setVisibleCount(6); // desktop
      }
    };

    updateVisibleCount(); // initial check
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const { titulo, descripcion, mascotas } = metadata;

  const mascotasToRender = isLanding
    ? mascotas.slice(0, Math.min(visibleCount, mascotas.length))
    : mascotas;

  const t = useTranslations("Adoptions");

  const sizeMap: Record<string, string> = {
    Pequeña: 'SM',
    Mini: 'XS',
    Mediana: 'MD',
    Grande: 'LG',
  };

  function getAge(dateString: string): string {
    const birthDate = dayjs(dateString);
    const now = dayjs();

    const years = now.diff(birthDate, 'year');

    if (years >= 1) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    } else {
      if (years === 0) {
        return 'N/A'
      }
      else {
        const months = now.diff(birthDate, 'month');
        return `${months} ${months === 1 ? 'mes' : 'meses'}`;
      }
    }
  }
  

  return (
    <>
      <div className={`${isLanding ? "md:flex md:flex-row md:flex-wrap md:w-full" :
        "w-full md:grid-cols-3 lg:grid-cols-4"} 
      overflow-hidden gap-5 grid grid-cols-1 sm:grid-cols-2 w-full
      ${!isLanding ? "items-center" : "justify-center"}`}>
        {mascotasToRender.map((mascota: any, index: number) => {
          const { title, metadata, slug, descripcion_mascota } = mascota;
          const { raza, foto_mascota_1, fecha_de_resguardo, edad } = metadata;

          return (
            <div
              key={index}
              className={`rounded-lg border border-1 border-slate-300 overflow-hidden shrink-0 ${isLanding ? "sm:w-auto" : "sm:flex-1"}`}
            >
              <div className="relative group w-full overflow-hidden rounded-t-lg">
                <div className="relative transition duration-300 md:group-hover:brightness-50">
                  <div
                    className={`rounded-t-lg h-[300px] w-full ${isLanding ? "md:w-[300px] md:h-[300px]" : "md:w-[303px]"} `}
                    style={{
                      background: `url(${foto_mascota_1.imgix_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                  />
                  <div className="w-11 h-8 bg-white rounded-b-lg border border-slate-400 absolute top-0 right-3 border-t-0">
                    <div className="w-full h-full flex justify-center items-center">
                      <p className="font-inter text-slate-600">{sizeMap[metadata.talla?.value as string] || metadata.talla?.value}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute hidden inset-0 md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button onClick={() => {setQuickViewOpen(true); setSelectedIndex(index)}} className="text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 ">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px" }}
                    >
                      visibility
                    </span>
                    <p>{t("quickView")}</p>
                  </button>
                </div>
              </div>

              {isQuickViewOpen && index === selectedIndex ?
                <QuickView isOpen={isQuickViewOpen} onClose={() => setQuickViewOpen(false)} pet={mascota} metadata={metadata}>
                </QuickView> : ''
              }



              <div className="mascot-data p-5 gap-y-2 flex flex-col bg-white rounded-lg">
                <div className="flex flex-row items-center justify-between gap-x-4">
                  <h2 className="inter font-medium text-xl text-slate-800">
                    {title}
                  </h2>
                  <div className="flex flex-row gap-x-2">
                    <div className="px-3 py-1 bg-slate-200 rounded-full flex justify-center text-slate-800 inter items-center capitalize">
                      {raza}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex justify-center items-center ${metadata.genero?.value === "Hembra"
                        ? "bg-rose-300"
                        : "bg-[#8EC5FF]"
                        }`}
                    >
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontSize: "24px" }}
                      >
                        {metadata.genero?.value === "Hembra"
                          ? "female"
                          : "male"}
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
                    <p className="inter font-medium text-slate-600">{`${getAge(edad)}`}</p>
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

                <div
                  onClick={() => {
                    if (
                      localStorage.getItem("mascot-id")?.replace(/"/g, "") !==
                      slug
                    ) {
                      localStorage.removeItem("adoption-answers");
                      localStorage.removeItem("yes-no");
                    }
                  }}
                  className="buttons w-full"
                >
                  <Button
                    data={{
                      title: t("apply"),
                      type: "botones-primarios",
                      metadata: {
                        url: `/cuestionario?mascotId=${slug}`,
                        color: "#594C81",
                        sin_borde: false,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
