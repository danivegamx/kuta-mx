import Image from "next/image";
import dog from "../../../../assets/three-step-dog.png";
import golden from "../../../../assets/goldenRetriever.png";
import purpePawsLeft from "../../../../assets/purplePawsLeft.png";
import purpePawsRight from "../../../../assets/purplePawsRight.png";
import blueEmphasis from "../../../../assets/blueEmphasis.png";
import bluePaws from "../../../../assets/bluePaws.png";
import { content } from "../../../../assets/Content/content";
import AdoptionSteps from "../../AdoptionSteps/adoptionSteps";
import emphasis from "../../../../assets/emphasis1.png";
import Pet from "../../Pet/pet";
import Process from "../../Process/process";

export default function LandingHero() {
  return (
    <>
      {
        <div>
          <div className="w-full md:px-12 sm:px-7 bg-[url('/assets/yellow-paw-bg.png')] bg-cover bg-no-repeat bg-top h-[720px] overflow-hidden">
            <div className="flex flex-row justify-center items-end pt-[100px] h-full max-w-6xl mx-auto">
              <div className="w-[500px] gap-6 flex flex-col h-full justify-center">
                <div>
                  <div className="text-purple font-extrabold uppercase inter">
                    Kuta
                  </div>
                  <div className="text-purple uppercase font-bold text-7xl text-white kulim">
                    Mi raza favorita es{" "}
                    <span className="text-purple">adoptada</span>
                  </div>
                </div>
                <div className="text-white font-medium text-base inter w-3/4">
                  Explora mascotas en busca de un hogar lleno de amor, como el
                  tuyo.
                </div>
                <div>
                  <button className="bg-purple text-white font-normal text-sm py-3 px-4 rounded-lg ">
                    Adopta Hoy
                  </button>
                </div>
              </div>
              <div className="flex justify-right items-bottom">
                <Image src={dog} alt={"Dog"} className="w-[850px]" />
              </div>
            </div>
          </div>
          {/* section 1 */}
          <section className="md:px-12 md:py-20">
            <div className="w-full flex flex-row justify-between max-w-6xl mx-auto items-center gap-x-20">
              <div className="w-1/2 gap-y-8 flex flex-col">
                <div className="kulim font-semibold text-4xl text-slate-800">
                  Un <span className="text-blue">Hogar</span> Para Cada Patita
                </div>
                <div
                  className="inter text-base text-slate-800 font-regular"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: content.landingS1Content }}
                ></div>
                <div>
                  <button className="bg-white text-blue border border-blue font-medium text-sm py-3 px-4 rounded-lg hover:bg-blue hover:text-white hover:border-transparent transition duration-300 ease-in-out">
                    Conocer Más
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <Image src={golden} alt={"Golden Retrieveer"} />
              </div>
            </div>
          </section>
          {/* section 2 */}
          <AdoptionSteps />
          {/* section 3 */}
          <section className="md:px-12 md:py-20 relative">
            <div className="max-w-6xl mx-auto flex justify-center flex-col gap-y-14 relative z-10">
              <div>
                <div className="flex flex-row justify-center">
                  <Image
                    src={emphasis}
                    alt={"Emphasis"}
                    className="w-7 h-7 mr-3"
                  />
                  <text className="kulim font-semibold text-4xl text-slate-800">
                    Mascotas En <span className="text-purple">Adopción</span>
                  </text>
                  <Image
                    src={emphasis}
                    alt={"Emphasis"}
                    className="w-7 h-7 ml-3 scale-x-[-1]"
                  />
                </div>
                <text className="flex justify-center inter text-slate-800">
                  {content.adoptionDesc}
                </text>
              </div>
              <div className="flex justify-center">
                <Pet></Pet>
              </div>
              <div className="flex justify-center">
                <button className="bg-purple text-white font-medium text-sm py-3 px-4 rounded-lg ">
                  Conoce Más
                </button>
              </div>
            </div>
            <div className="absolute left-0 top-10 bottom-10 z-0">
              <Image
                src={purpePawsLeft}
                alt={"Purple Paws"}
                className=""
                style={{ width: "246px", height: "725px" }}
              />
            </div>
            <div className="absolute right-0 top-10 bottom-10 z-0">
              <Image
                src={purpePawsRight}
                alt={"Purple Paws"}
                className=""
                style={{ width: "280px", height: "841px" }}
              />
            </div>
          </section>
          {/* section 4 */}
          <section className="md:px-12 md:py-20 relative">
            <div className="bg-lightBlue rounded-lg p-20 flex flex-col max-w-6xl mx-auto gap-y-16 relative overflow-hidden">
              <div className="flex flex-col gap-y-4 z-10">
                <div className="flex flex-row justify-center items-center">
                  <text className="kulim font-semibold text-4xl text-slate-800">
                    Descubre Lo Que Hay{" "}
                    <span className="text-blue">Detrás</span>
                  </text>
                  <Image
                    src={blueEmphasis}
                    alt={"blue emphasis"}
                    className="w-7 h-7 ml-1 mb-6 "
                  />
                </div>
                <div className="flex justify-center">
                  <text className="flex justify-center inter text-slate-800 text-center w-2/3">
                    {content.btsDesc}
                  </text>
                </div>
              </div>
              <div className="z-10">
                <Process></Process>
              </div>
              
              <div className="absolute left top-0 bottom-0 z-0">
                <Image
                  src={bluePaws}
                  alt={"Blue Paws"}
                  className=""
                  style={{ width: "978px", height: "690px" }}
                />
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
}
