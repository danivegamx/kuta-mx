
import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import './styles.sass';
import '../adopciones/styles.sass';
import Questionnaire from './components/cuestionario';

const Cuestionario = () => {
  return (
    <Suspense>
      <main className="questionnaire-main">
        <header>
          <Navigation isAdoption/>
        </header>
        <Questionnaire />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Cuestionario;
