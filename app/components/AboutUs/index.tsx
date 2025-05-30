import starEmphasis from "../../../assets/star-emphasis.png";
import yellowPaws from "../../../assets/yellowPaws.png";
import yellowWomanDog from "../../../assets/yellow-woman-dog.png";
import stepsTriangle from "../../../assets/steps-triangle.png";
import stepsLine from "../../../assets/steps-line.png";
import Image from "next/image";
import Pictures from "../Pictures/pictures";
import { content } from "../../../assets/Content/content";
import Reasons from "../Reasons/reasons";
import Help from "../Help/help";
import SocialMedia from "../Social Media/socialMedia";
import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <main>
      <section className="w-full overflow-hidden relative bg-bgYellow relative">
        <div className="flex flex-col justify-center items-center pt-[100px] pb-[60px] h-full max-w-7xl mx-auto md:px-12 sm:px-7 px-5 relative overflow-hidden">
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
                {t("aboutUs")}
              </h3>
              <Image
                src={starEmphasis}
                alt={"Emphasis"}
                className="w-[38px] h-[63px] scale-x-[-1] "
              />
            </div>
            <p className="text-slate-800 font-medium text-base inter w-3/4 text-center">
            {t("pageDesc")}
            </p>
          </div>
        </div>
        <div className="absolute top-0 z-0 hidden sm:w-2/3 sm:block md:w-1/2">
        <Image
                src={yellowPaws}
                alt={"Yellow Paws"}
                className="scale-x-[-1] scale-y-[-1]"
              />
        </div>
        <div className="bg-white h-[100px] w-full absolute bottom-0 z-20"></div>
        <div className="max-w-7xl mx-auto flex justify-center items-center relative z-30 md:px-12 sm:px-7 px-5">
          <Pictures />
        </div>
      </section>
      {/* section 2 */}
      <section id="whoWeAre" className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div
          className="w-full flex flex-col justify-between max-w-7xl mx-auto items-center gap-y-10
            md:flex-row md:gap-x-20"
        >
          <div className="gap-y-8 flex flex-col md:w-1/2">
            <DynamicTitle namespace={"AboutUs"} translationKey={"whoWeAre"}/>
            <p
              className="inter text-base text-slate-800 font-regular"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{
                __html: t("whoWeAreDesc").replace(/\n/g, "<br/><br/>"),
              }}
            >
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
      {/* section 4 */}
      <section id="whatWeDo" className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div
          className="w-full flex flex-col justify-between max-w-7xl mx-auto items-center gap-y-10
            md:flex-row md:gap-x-20"
        >
          <div className="md:w-1/2">
            <Image
              src={stepsTriangle}
              alt={"Kuta Steps"}
              className="block sm:hidden md:block "
            />
            <Image
              src={stepsLine}
              alt={"Kuta Steps"}
              className="hidden sm:block md:hidden"
            />
          </div>
          <div className="gap-y-8 flex flex-col md:w-1/2">
          <DynamicTitle namespace={"AboutUs"} translationKey={"whatWeDo"}/>
            <p
              className="inter text-base text-slate-800 font-regular"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{
                __html: t("whatWeDoDesc").replace(/\n/g, "<br/><br/>"),
              }}
            >
            </p>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <Help></Help>
      {/* section 6 */}
      <SocialMedia></SocialMedia>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
        rel="stylesheet"
      />
    </main>
  );
}
