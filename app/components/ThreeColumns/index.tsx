import Image from "next/image";

import Button from "../Button";
import './styles.sass';

// grid sm:grid-cols-1 md:grid-cols-2 

export default function ThreeColumns({ data }: any) {
  const { title, type, metadata: { descripcion, color_de_fondo, color_del_texto, tarjeta1, tarjeta2, tarjeta3 } } = data;
  return (<section className="three-columns" style={{backgroundColor: color_de_fondo}}>
    <article className="container mx-auto py-12 md:py-24">
      <h3 className="text-3xl md:text-5xl mx-4" style={{color: color_del_texto}}>{title}</h3>
      <p className="text-lg md:text-3xl mt-6 md:mt-12 mx-4" style={{color: color_del_texto}}>{descripcion}</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-8 md:mt-16">
        {tarjeta1 && (<div className="card text-center">
          <figure>
            <Image
              src={tarjeta1.metadata?.imagen.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 className="text-2xl md:text-4xl mt-4 md:mt-8" style={{color: color_del_texto}}>{tarjeta1.metadata?.titulo}</h4>
          <p className="my-4 md:mb-0" style={{color: color_del_texto}}>{tarjeta1.metadata?.descripcion}</p>
        </div>)}
        {tarjeta2 && (<div className="card text-center">
          <figure>
            <Image
              src={tarjeta2.metadata?.imagen.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 className="text-2xl md:text-4xl mt-4 md:mt-8" style={{color: color_del_texto}}>{tarjeta2.metadata?.titulo}</h4>
          <p className="my-4 md:mb-0" style={{color: color_del_texto}}>{tarjeta2.metadata?.descripcion}</p>
        </div>)}
        {tarjeta3 && (<div className="card text-center">
          <figure>
            <Image
              src={tarjeta3.metadata?.imagen.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 className="text-2xl md:text-4xl mt-4 md:mt-8" style={{color: color_del_texto}}>{tarjeta3.metadata?.titulo}</h4>
          <p className="my-4 md:mb-0" style={{color: color_del_texto}}>{tarjeta3.metadata?.descripcion}</p>
        </div>)}
      </div>
    </article>
  </section>);
}