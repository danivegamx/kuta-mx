import starEmphasis from "../../../assets/star-emphasis.png";
import yellowPaws from "../../../assets/yellowPaws.png";
import yellowWomanDog from "../../../assets/yellow-woman-dog.png";
import Image from "next/image";
import Pictures from "../Pictures/pictures";
import { content } from "../../../assets/Content/content";
import Reasons from "../Reasons/reasons";

export default function AboutUs() {
  return (
    <main>
      <section className="w-full overflow-hidden relative bg-bgYellow relative">
        <div
          className="flex flex-col justify-center items-center pt-[100px] pb-[60px] h-full max-w-6xl mx-auto md:px-12 sm:px-7 px-5 relative overflow-hidden
              "
        >
          <div
            className="w-full gap-2 flex flex-col h-full justify-center items-center pt-10 z-10
             md:w-[500px] "
          >
            <div className="flex flex-row items-end justify-center">
              <Image
                src={starEmphasis}
                alt={"Emphasis"}
                className="w-[38px] h-[63px] "
              />
              <h3
                className="text-purple uppercase font-bold text-3xl text-slate-800 font-inter text-center 
                  sm:text-4xl
                  md:text-5xl"
              >
                Nosotros
              </h3>
              <Image
                src={starEmphasis}
                alt={"Emphasis"}
                className="w-[38px] h-[63px] scale-x-[-1] "
              />
            </div>
            <p className="text-slate-800 font-medium text-base inter w-3/4 text-center">
              Conoce más sobre Kuta!
            </p>
          </div>
        </div>
        <div className="bg-white h-[100px] w-full absolute bottom-0 z-20"></div>
        <div className="max-w-6xl mx-auto flex justify-center items-center relative z-30 md:px-12 sm:px-7 px-5">
          <Pictures />
        </div>
      </section>
      {/* section 2 */}
      <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div
          className="w-full flex flex-col justify-between max-w-6xl mx-auto items-center gap-y-10
            md:flex-row md:gap-x-20"
        >
          <div className="gap-y-8 flex flex-col md:w-1/2">
            <h3 className="font-kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl">
              Quienes <span className="text-yellow">Somos</span>
            </h3>
            <p
              className="inter text-base text-slate-800 font-regular"
              style={{ whiteSpace: "pre-line" }}
            >
              {content.whoWeAre}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={yellowWomanDog}
              alt={"Woman with dog against yellow background"}
            />
          </div>
        </div>
      </section>
      {/* section 3 */}
      <Reasons></Reasons>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
        rel="stylesheet"
      />
    </main>
  );
}
