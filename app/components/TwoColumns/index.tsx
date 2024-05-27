import Image from "next/image";

import Button from "../Button";
import './styles.sass';

export default function TwoColumns({ data }: any) {
  const { title, type, metadata: { descripcion, imagen, video, imagen_a_la_derecha, boton } } = data;
  return (<section className="two-columns container mx-auto grid sm:grid-cols-1 md:grid-cols-2">
    {
      imagen_a_la_derecha ? (
        <>
          <article>
            <h3>{title}</h3>
            <p>{descripcion}</p>
            <div className="cta-group">
              {
                boton && (<Button data={boton} />)
              }
            </div>
          </article>
          <article className="text-center">
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
          <article className="text-center">
            <figure>
              <Image
                src={imagen?.imgix_url}
                width={200}
                height={200}
                alt="title"
              />
            </figure>
          </article>
          <article>
            <h3>{title}</h3>
            <p>{descripcion}</p>
            <div className="cta-group">
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