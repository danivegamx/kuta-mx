import starEmphasis from "../../../assets/star-emphasis.png";
import yellowPaws from "../../../assets/yellowPaws.png";
import Image from "next/image";
import Pictures from "../Pictures/pictures";

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
                className="text-purple uppercase font-bold text-3xl text-slate-800 kulim text-center 
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
            <Pictures/>
        </div>
      </section>
    </main>
  );
}
