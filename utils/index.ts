import React, { ReactNode } from 'react';

import TwoColumns from '../app/components/TwoColumns';
import ThreeColumns from '../app/components/ThreeColumns';
import InfoBanner from '../app/components/InfoBanner';

export const navigation = [
  { label: 'Nosotros', link: '/nosotros' },
  { label: 'Historias', link: '/historias' },
  { label: 'Adopciones', link: '/contacto' },
];

export const getContentType = (type: string): (({ data }: any) => React.JSX.Element) => {
  let Component = TwoColumns;
  switch (type) {
    case 'dos-columnas':
      Component = TwoColumns;
      break;
    case 'tres-columnas':
      Component = ThreeColumns;
      break;
    case 'info-banners':
      Component = InfoBanner;
      break;
    default:
      break;
  }
  return Component;
};

export const metadataInitialState = {
  titulo: '',
  gracias: {},
  introduccion: '',
  secciones: [{
    title: '',
    metadata: {
      preguntas: [{
        pregunta: [{
          id: '-1',
          metadata: {
            etiqueta_de_pregunta: '',
            requerido: false,
            opciones: []
          },
          type: '',
          slug: ''
        }]
      }],
      texto_opcional: ''
    }
  }]
};

export const mascotdataInitialState = {
  title: '',
  foto_mascota_1: {
    imgix_url: ''
  },
  edad: '',
  raza: '',
  fecha_de_resguardo: '',
  genero: ''
};