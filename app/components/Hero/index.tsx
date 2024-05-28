import Button from '../Button';

import './styles.sass';

export default function Hero({ data }: any) {
  const { metadata: { titulo, subtitulo, imagen, boton_primario, boton_secundario } } = data;
  return (<>
    <section className="hero min-h-[95vh] md:min-h-[60vh] bg-center bg-cover" style={{ backgroundImage: `url(${imagen.imgix_url})` }}>
      <div className="container mx-auto place-content-around">
        <div className="hero-group max-w-full text-white mx-4">
          <h1 className='font-bold text-3xl md:text-5xl text-center md:text-start mb-8 md:mb-0'>{titulo}</h1>
          <h2 className='text-lg md:text-3xl md:mt-4 text-center md:text-start'>{subtitulo}</h2>
          <p className='text-lg md:text-2xl text-center md:text-start md:mt-12 mt-60'><Button data={boton_primario} /><Button data={boton_secundario} /></p>
        </div>
      </div>
    </section>
  </>);
}