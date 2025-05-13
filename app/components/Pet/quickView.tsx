"use client"
import moment from "moment";
import Button from "../Button";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import 'moment/locale/es';

type QuickViewModalProps = {
    isOpen: boolean;
    onClose: () => void;
    // pet: {
    //   name: string;
    //   images: [];
    //   age: string;
    //   breed: string;
    //   description?: string;
    // }
    pet: {
        title: string,
        slug: string
    },
    metadata: {
        foto_mascota_1: {
            imgix_url: string
        },
        fotos_mascota: []
        genero: {
            value: string
        },
        descripcion_mascota: string,
        descripcion_ingles: string,
        fecha_de_resguardo: string,
        edad: string,
        "edad-numero": number,
        raza: string,
        talla: {
            value: string
        }
    }
};

export function QuickView({ isOpen, onClose, pet, metadata }: QuickViewModalProps) {
    const t = useTranslations("Adoptions");
    const [selectedImage, setSelectedImage] = useState(metadata.foto_mascota_1.imgix_url)

    const locale = useLocale();
    moment.locale(locale);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!isOpen) return null;

    const sizeMap: Record<'es' | 'en', Record<string, string>> = {
        es: {
            pequeña: 'SM - Pequeño',
            mini: 'XS - Mini',
            mediana: 'MD - Mediano',
            grande: 'LG - Grande',
            extragrande: 'XL - Extra Grande'
        },
        en: {
            pequeña: 'SM - Small',
            mini: 'XS - Extra Small',
            mediana: 'MD - Medium',
            grande: 'LG - Large',
            extragrande: 'XL - Extra Large'
        },
    };

    const language = locale.split('-')[0] as 'en' | 'es';
    const personalityMap: Record<'en' | 'es', string> = {
        es: metadata.descripcion_mascota,
        en: metadata.descripcion_ingles
    }

    const personality =
        language === 'en' && !metadata.descripcion_ingles
            ? metadata.descripcion_mascota
            : personalityMap[language];

    const images = [
        metadata.foto_mascota_1.imgix_url,
        ...(metadata.fotos_mascota || []).map((item: any) => item.foto.imgix_url),
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/15 " onClick={onClose}>
            <div className="bg-white rounded-lg w-full md:w-[920px] h-full md:h-auto py-10 px-7 sm:p-10 relative shadow-xl overflow-y-auto max-h-screen"
                onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                >
                    <span
                        className="material-symbols-outlined text-slate-800"
                        style={{ fontSize: "24px" }}
                    >
                        close
                    </span>
                </button>

                <div className="flex flex-col md:flex-row gap-x-10 gap-y-8">
                    <div className="flex flex-col-reverse gap-y-2 sm:flex-row gap-x-5">
                        {metadata.fotos_mascota.length !== 0 ?
                            <div className="flex flex-row sm:flex-col gap-y-3 gap-x-2 sm:h-[400px] overflow-auto justify-center sm:justify-start">
                                {images.map((image: any, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(image)}
                                            className={`rounded-md w-[70px] h-[70px] sm:h-[150px] sm:w-[120px] shrink-0 cursor-pointer ${selectedImage !== image ? 'opacity-50' : ''}`}
                                            style={{
                                                background: `url(${image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                    )
                                })}
                            </div> : ''
                        }

                        <div className="rounded-md h-[340px] w-full sm:flex-1 md:w-[300px] sm:h-[400px] overflow-auto">
                            <img
                                src={selectedImage}
                                alt="Selected pet"
                                className="w-auto h-auto min-h-full min-w-full"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-between gap-y-4">
                        <div className="flex flex-row justify-between items-center">
                            <h4 className="font-inter font-medium text-3xl text-slate-800">{pet.title}</h4>
                            <div
                                className={`w-11 h-11 rounded-full flex justify-center items-center ${metadata.genero?.value === "Hembra"
                                    ? "bg-rose-300"
                                    : "bg-[#8EC5FF]"
                                    }`}
                            >
                                <span
                                    className="material-symbols-outlined text-white"
                                    style={{ fontSize: "30px" }}
                                >
                                    {metadata.genero?.value === "Hembra"
                                        ? "female"
                                        : "male"}
                                </span>
                            </div>
                        </div>
                        {metadata.descripcion_mascota ?
                            <div className="flex flex-col">
                                <h5 className="font-inter font-medium text-lg text-slate-500">{t('personality')}</h5>
                                <p className="font-inter text-slate-800" dangerouslySetInnerHTML={{
                                    __html: personality,
                                }}></p>
                            </div> : ''}
                        <div className="w-full rounded-md border border-slate-300 grid grid-cols-2 divide-solid divide-x divide-slate-300">
                            <div className="flex justify-center items-center gap-x-2 p-3">
                                <span
                                    className="material-symbols-outlined text-slate-600"
                                    style={{ fontSize: "22px" }}
                                >
                                    cake
                                </span>
                                <p className="inter font-medium text-slate-600">{moment().diff(metadata.edad, 'years')} {moment().diff(metadata.edad, 'years') !== 1 ? t('years') : t('year')}</p>
                            </div>
                            <div className="flex justify-center items-center gap-x-2 p-3">
                                <span
                                    className="material-symbols-outlined text-slate-600"
                                    style={{ fontSize: "22px" }}
                                >
                                    calendar_month
                                </span>
                                <p className="inter font-medium text-slate-600">
                                    <span className="date">{`${moment(
                                        new Date(metadata.fecha_de_resguardo)
                                    ).fromNow()}`}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-5">
                            <div className="flex flex-col gap-y-2">
                                <h5 className="font-inter text-slate-500 font-medium">{t('breed')}</h5>
                                <div className="px-4 py-2 bg-slate-200 rounded-full flex justify-center text-slate-800 inter items-center capitalize">
                                    {metadata.raza}
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h5 className="font-inter text-slate-500 font-medium">{t('size')}</h5>
                                <div className="px-4 py-2 bg-slate-200 rounded-full flex justify-center text-slate-800 inter items-center capitalize">
                                    {sizeMap[language][metadata.talla?.value.toLowerCase().replace(/\s+/g, '') as string]}
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                if (
                                    localStorage.getItem("mascot-id")?.replace(/"/g, "") !==
                                    pet.slug
                                ) {
                                    localStorage.removeItem("adoption-answers");
                                    localStorage.removeItem("yes-no");
                                }
                            }}
                            className="buttons w-full"
                        >
                            <Button
                                data={{
                                    title: t('apply'),
                                    type: "botones-primarios",
                                    metadata: {
                                        url: `/cuestionario?mascotId=${pet.slug}`,
                                        color: "#594C81",
                                        sin_borde: false,
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}