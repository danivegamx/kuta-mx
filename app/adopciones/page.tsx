
import moment from "moment";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';

import './styles.sass';
import { getAdoptionsData } from '../api';

async function Adopciones() {
  const data = (await getAdoptionsData()) || [];
  const { objects } = data;
  const { metadata } = objects[0];
  const { titulo, descripcion, mascotas } = metadata;

  return (
    <main className="adoptions-main">
      <header>
        <Navigation />
      </header>
      <section className="adoptions-section container mx-auto relative">
        <div className="adoptions-header grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6"><h1>{ titulo }</h1></div>
          <div className="col-span-12 md:col-span-6"><p className="adoptions description">{ descripcion }</p></div>
        </div>
        <article className="grid lg:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            mascotas.map((mascota: any, index: number) => {
              const { title, metadata, slug } = mascota;
              const { raza, foto_mascota_1, fecha_de_resguardo, edad } = metadata;
              return (
                <div key={index} className="mascot-card">
                  <span className="date">{`${moment(new Date(fecha_de_resguardo)).fromNow()}`}</span>
                  <div className="mascot-image" style={{ background: `url(${foto_mascota_1.imgix_url})`, backgroundSize: 'cover' }}></div>
                  <div className="mascot-data grid grid-cols-2">
                    <div>
                      <h2>{ title }<span>{` · ${edad} años`}</span></h2>
                      <p>{ raza }</p>
                    </div>
                    <div className="buttons"><Button data={{ title: 'Aplicar', type: 'botones-primarios', metadata: { url: `/cuestionario?mascotId=${slug}`, color: 'rgb(89,76,129)', sin_border: false } }} /></div>
                  </div>
                </div>
              );
            })
          }
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default Adopciones;