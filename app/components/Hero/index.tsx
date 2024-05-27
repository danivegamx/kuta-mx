import Button from '../Button';

import './styles.sass';

export default function Hero({ data }: any) {
  const { metadata: { titulo, subtitulo, imagen, boton_primario, boton_secundario } } = data;
  return (<>
    <section className="hero" style={{ background: `url(${imagen.imgix_url})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto place-content-around">
        <div className="hero-group">
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <p><Button data={boton_primario} /><Button data={boton_secundario} /></p>
        </div>
      </div>
    </section>
  </>);
}