import "./styles.sass";
import kutaLogoWhite from "../../../assets/kutaLogoWhite.png";
import kutaLogoPurple from "../../../assets/kuta-logo-py.png"
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import Image from "next/image";
import Link from "next/link";

const footerElements = [
  {
    Title: "Kuta",
    Links: [
      { name: "Misión", url: "/#mision" },
      { name: "Detras de Kuta", url: "/#behindKuta" },
      { name: "Proceso", url: "/#process" },
    ],
  },
  {
    Title: "Nosotros",
    Links: [
      { name: "Conoce Kuta", url: "/nosotros" },
      { name: "¿Quiénes somos?", url: "/nosotros#whoWeAre" },
      { name: "¿Qué hacemos?", url: "/nosotros#whatWeDo" },
      { name: "Historias", url: "/#stories" },
    ],
  },
  {
    Title: "Adopción",
    Links: [
      { name: "Requerimientos", url: "/#adoptionSteps" },
      { name: "Adopciones", url: "/adopciones" },
    ],
  },
];

type FooterProps = {
  isPurple?: boolean; // Optional, defaults to false (light background)
};

export default function Footer({ isPurple = false }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={`px-5 py-10 sm:px-7 md:pt-14 md:pb-8 md:px-12 ${!isPurple ? "border-t border-slate-300" : ""}`} style={{ backgroundColor: isPurple ? "#594C81" : "#FFFFFF" }}>
        <div className=" max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-5 justify-between sm:flex-row">
            <div>
              <Image
                src={isPurple ? kutaLogoWhite : kutaLogoPurple}
                alt={"Kuta"}
                className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
              />
            </div>
            <div className="flex flex-col gap-y-5 w-3/4 sm:flex-row">
              {footerElements.map((item, index) => (
                <div key={index} className={`mr-4 flex-1 ${isPurple ? "text-white" : "text-slate-800"}`}>
                  <p className="md:text-lg kulim text-bold mb-3">
                    {item.Title}
                  </p>
                  <ul className="mt-0">
                    {item.Links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} className="text-nowrap text-sm inter">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <p className={`md:text-lg kulim text-bold mb-3 ${isPurple ? "text-white" : "text-slate-800"}`}>Siguenos</p>
              <div className="flex flex-row gap-x-2 mt-0 justify-start md:justify-end">
                <a
                  href="https://www.facebook.com/people/Kuta-Mx/61556841081748/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={facebook}
                    alt={"Facebook"}
                    className={`${isPurple ? "invert saturation-0" : ""}`}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/kutamx?igsh=MXNvb2V5ZGF1N3lpaQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={instagram}
                    alt={"Instagram"}
                    className={`${isPurple ? "invert saturation-0" : ""}`}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className=" w-full bg-slate-300 my-8"
            style={{ height: "1px" }}
          ></div>
          <div className={`copyright w-full mb-4 md:mb-0 ${isPurple ? "text-slate-300" : "text-slate-500"}`}>
            Creado con mucho 🤍 por{" "}
            <a href="https://www.quantumstudios.dev">Quantum Studios</a> ©{" "}
            {year}
          </div>
        </div>
      </div>
    </footer>
  );
}
