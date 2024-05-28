import Image from "next/image";

import Button from "../Button";
import './styles.sass';

export default function TwoColumns({ data }: any) {
  const { title, type, metadata: { descripcion, imagen, video, imagen_a_la_derecha, boton } } = data;
  return (<section className="two-columns container mx-auto grid sm:grid-cols-1 md:grid-cols-2">
    {
      imagen_a_la_derecha ? (
        <>
          <article className="py-12 md:py-32">
            <h3 className="text-3xl md:text-5xl text-center md:text-start leading-10 md:leading-tight mx-4">{title}</h3>
            <p className="text-lg md:text-3xl text-center md:text-start mt-4 md:mt-8 mx-4">{descripcion}</p>
            <div className="cta-group text-lg md:text-2xl text-center md:text-start mx-4">
              {
                boton && (<Button data={boton} />)
              }
            </div>
          </article>
          <article className="text-center pb-12 md:py-32">
            <figure>
              <Image
                src={imagen?.imgix_url}
                width={200}
                height={200}
                alt="title"
              />
            </figure>
          </article>
        </>
      ) : (
        <>
          <article className="text-center py-12 md:py-32">
            <figure>
              <Image
                src={imagen?.imgix_url}
                width={200}
                height={200}
                alt="title"
              />
            </figure>
          </article>
          <article className="py-12 md:py-32">
            <h3 className="text-3xl md:text-5xl text-center md:text-start leading-10 md:leading-tight mx-4">{title}</h3>
            <p className="text-lg md:text-3xl text-center md:text-start mt-4 md:mt-8 mx-4">{descripcion}</p>
            <div className="cta-group text-lg md:text-2xl text-center md:text-start mx-4">
              {
                boton && (<Button data={boton} />)
              }
            </div>
          </article>
        </>
      )
    }
  </section>);
}