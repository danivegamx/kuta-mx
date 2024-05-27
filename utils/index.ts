import React, { ReactNode } from 'react';

import TwoColumns from '../app/components/TwoColumns';
import ThreeColumns from '../app/components/ThreeColumns';
import InfoBanner from '../app/components/InfoBanner';

export const navigation = [
  { label: 'Inicio', link: '/' },
  { label: 'Nosotros', link: '/nosotros' },
  { label: 'Historias', link: '/historias' },
  { label: 'Contacto', link: '/contacto' },
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