import Image from "next/image";
import dog from "../../../../assets/three-step-dog.png";

export default function LandingHero() {
    return (
        <>
          {
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
                  Explora mascotas en busca de un hogar lleno de amor, como el tuyo.
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
          }
        </>
      );
}