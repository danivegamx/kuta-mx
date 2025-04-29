"use client";
import moment from "moment";
import 'moment/locale/es';
import { FaMars, FaVenus, FaPaw } from "react-icons/fa";
import Button from '../Button';
import './styles.sass';

function MascotCard(data: any) {
  moment.locale("es");
  const { mascota, klass } = data;
  const {title, metadata, slug } = mascota;
  const { raza, foto_mascota_1, fecha_de_resguardo, edad, genero, talla } = metadata;

  return (
    <div className={`mascot-card-adoption ${klass !== '' ? klass : ''}`}>
      <span className="date">{`${moment(new Date(fecha_de_resguardo)).fromNow()}`}</span>
      <div className="mascot-image" style={{ background: `url(${foto_mascota_1.imgix_url})`, backgroundSize: 'cover' }}></div>
      <div className="mascot-data grid grid-cols-2">
        <div>
          <h2>{ title }<span>{genero.value === "Hembra" ? <FaVenus className="female"/> : <FaMars className="male" />}</span></h2>
          <p>{ raza }<span>{` · ${edad} años`}</span></p>
        </div>
        <div className="buttons"><Button data={{ title: 'Aplicar', type: 'botones-primarios', metadata: { url: `/cuestionario?mascotId=${slug}`, color: 'rgb(89,76,129)', sin_border: false } }} /></div>
      </div>
    </div>
  );
}

export default MascotCard;