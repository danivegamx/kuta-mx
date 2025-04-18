"use client";

import { useState, useEffect } from "react";
import { getAdoptionsData } from "../../api";
import moment from "moment";
import Button from "../../components/Button";
import "./styles.sass";
import "moment/locale/es";

export default function Pet() {
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

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 overflow-hidden gap-5 justify-center sm:grid-cols-2 sm:grid-rows-2 md:flex md:flex-row md:flex-wrap">
        {mascotas.slice(0, Math.min(visibleCount, mascotas.length)).map((mascota: any, index: number) => {
          const { title, metadata, slug } = mascota;
          const { raza, foto_mascota_1, fecha_de_resguardo, edad } = metadata;

          return (
            <div
              key={index}
              className={`rounded-lg border border-1 border-slate-300 overflow-hidden`}
            >
              <div
                className="mascot-image h-[300px] w-[300px] bg-cover rounded-t-lg md:w-[300px] md:h-[300px]"
                style={{
                  background: `url(${foto_mascota_1.imgix_url})`,
                  backgroundSize: "cover",
                }}
              />
              <div className="mascot-data p-5 gap-y-2 flex flex-col bg-white rounded-lg">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="inter font-medium text-xl text-slate-800">
                    {title}
                  </h2>
                  <div className="flex flex-row gap-x-2">
                    <div className="px-3 py-1 bg-slate-200 rounded-full flex justify-center text-slate-800 inter items-center">
                      {raza}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex justify-center items-center ${
                        metadata.genero?.value === "Hembra"
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
                    <p className="inter font-medium text-slate-600">{`${edad} ${
                      edad !== 1 ? "años" : "año"
                    }`}</p>
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
                      title: "Aplicar",
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
