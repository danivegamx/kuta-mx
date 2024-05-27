import Image from "next/image";

import Button from "../Button";
import './styles.sass';

// grid sm:grid-cols-1 md:grid-cols-2

export default function InfoBanner({ data }: any) {
  const { metadata: { color_de_fondo, color_del_texto, imagen1, imagen2, imagen3, texto1, texto2, texto3 } } = data;
  return (<section className="info-banner" style={{backgroundColor: color_de_fondo}}>
    <article className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        {imagen1 && (<div className="card text-center">
          <figure>
            <Image
              src={imagen1?.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 style={{color: color_del_texto}}>{texto1}</h4>
        </div>)}
        {imagen2 && (<div className="card text-center">
          <figure>
            <Image
              src={imagen2?.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 style={{color: color_del_texto}}>{texto2}</h4>
        </div>)}
        {imagen3 && (<div className="card text-center">
          <figure>
            <Image
              src={imagen3?.imgix_url}
              width={200}
              height={200}
              alt="title"
            />
          </figure>
          <h4 style={{color: color_del_texto}}>{texto3}</h4>
        </div>)}
      </div>
    </article>
  </section>);
}