import { content } from "../../../assets/Content/content";
import purpleCat from "../../../assets/purple-cat.png";
import purpleDog from "../../../assets/purple-dog.png";
import purplePaws from "../../../assets/purplePaws.png";
import steps from "../../../assets/steps-triangle.png";
import stepsLine from "../../../assets/steps-line.png";
import Image from "next/image";
import Pet from "../Pet/pet";
import AdoptionSteps from "../AdoptionSteps/adoptionSteps";
import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";

export default function Adoptions() {
  const t = useTranslations("Adoptions");

  return (
    <>
      <section className="w-full overflow-hidden relative bg-bgPurple relative">
        <div className="flex flex-col justify-center items-center pt-[100px] h-full max-w-7xl mx-auto md:px-12 sm:px-7  px-5 relative overflow-hidden z-10">
          <div className="flex flex-col items-center py-20 gap-y-8 sm:flex-row">
            <Image
              src={purpleCat}
              alt={"Purple Cat"}
              className="w-[143px] h-[140px] sm:w-[127px] sm:h-[140px] md:w-[183px] md:h-[202px] hidden sm:block order-1"
            />
            <div className="flex flex-col order-1 gap-y-3 sm:order-2 items-center">
              <h3
                className="text-purple uppercase font-bold text-3xl text-slate-800 font-inter text-center 
                  sm:text-4xl
                  md:text-5xl"
              >
                {t("adoptions")}
              </h3>
              <p className="text-slate-800 font-medium text-base inter text-center font-inter sm:w-[70%]">
                {t("pageDesc")}
              </p>
            </div>
            <Image
              src={purpleDog}
              alt={"Purple Dog"}
              className="w-[120px] h-[146px] sm:w-[114px] sm:h-[160px] md:w-[175px] md:h-[231px] hidden sm:block order-3"
            />
            <div className="flex flex-row order-2 gap-x-6 sm:hidden">
              <Image
                src={purpleCat}
                alt={"Purple Cat"}
                className="w-[135px] h-[140px]"
              />
              <Image
                src={purpleDog}
                alt={"Purple Dog"}
                className="w-[120px] h-[146px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-0 sm:w-2/3 md:w-1/2 ">
          <Image src={purplePaws} alt={"Purple Paws"} className="" />
        </div>
        <div className="absolute top-0 left-0 z-0 sm:w-2/3 md:w-1/2 hidden md:block">
          <Image
            src={purplePaws}
            alt={"Purple Paws"}
            className="scale-x-[-1] scale-y-[-1]"
          />
        </div>
      </section>
      {/* section 2 */}
      <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div
          className="w-full flex flex-col justify-between max-w-7xl mx-auto items-center gap-y-10
            md:flex-row md:gap-x-20"
        >
          <Image src={steps} alt={"Kuta Steps"} className="sm:hidden" />
          <Image
            src={stepsLine}
            alt={"Kuta Steps"}
            className="hidden sm:block"
          />
        </div>
      </section>
      {/* section 3 */}
      <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div className="w-full flex flex-col items-start max-w-7xl mx-auto gap-y-8">
          <DynamicTitle namespace={"Adoptions"} translationKey={"petsTitle"}/>
          <Pet></Pet>
        </div>
      </section>
      {/* section 4 */}
      <AdoptionSteps></AdoptionSteps>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
        rel="stylesheet"
      />
    </>
  );
}
