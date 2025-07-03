'use client'
import Image from "next/image";
import dog from "../../../assets/three-step-dog.png";
import golden from "../../../assets/goldenRetriever.png";
import purpePawsLeft from "../../../assets/purplePawsLeft.png";
import purpePawsRight from "../../../assets/purplePawsRight.png";
import blueEmphasis from "../../../assets/blueEmphasis.png";
import bluePaws from "../../../assets/bluePaws.png";
import catPhone from "../../../assets/catPhone.png";
import arrowRight from "../../../assets/arrow-right.png"
import AdoptionSteps from "../AdoptionSteps/adoptionSteps";
import emphasis from "../../../assets/emphasis1.png";
import Pet from "../Pet/pet";
import Process from "../Process/process";
import Videos from "../Videos/videos";
import BehindKuta from "../BehindKuta/behindKuta";
import Link from "next/link";
import SocialMedia from "../Social Media/socialMedia";
import HappyEndings from "../Happy Endings/happyEndings";
import MusicPlayer from "../Music Player/musicPlayer";
import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";
import Statistics from "../Statistics";
import { useEffect, useState } from "react";


export default function Landing() {
  const t = useTranslations("Home");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
      {
        <div>
          <section
            className="w-full md:px-12 sm:px-7 px-5 bg-[url('/assets/yellow-paw-bg.png')] bg-cover bg-no-repeat bg-top  overflow-hidden
          md:h-[720px]"
          >
            <div
              className="flex flex-col justify-center items-center pt-[100px] h-full max-w-7xl mx-auto
              md:flex-row md:items-end"
            >
              <div
                className="w-full gap-6 flex flex-col h-full justify-center items-center pt-10
              md:items-start md:w-[500px] md:pt-0"
              >
                <div>
                  <h4 className="text-purple font-extrabold uppercase inter text-center md:text-start">
                    Kuta
                  </h4>
                  <h3
                    className="text-purple uppercase font-bold text-5xl text-white kulim text-center md:text-start
                  sm:text-6xl
                  md:text-7xl"
                  >
                    {t('sloganP1')}{" "}
                    <span className="text-purple">{t("sloganP2")}</span>
                  </h3>
                </div>
                <p className="text-white font-medium text-base inter w-3/4 text-center md:text-start">
                  {t("heroText")}
                </p>
                <div>
                  <Link href={"/adopciones"}>
                    <button className="bg-purple text-white font-normal text-sm py-3 px-4 rounded-lg ">
                      {t("adoptToday")}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-right items-bottom">
                <Image src={dog} alt={"Dog"} className="w-[850px]" />
              </div>
            </div>
          </section>
          {/* music */}
          <section className="px-5 pt-6 sm:px-7 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-x-6 gap-y-6">
              <h4 className="font-caveat text-[26px] text-wrap text-slate-800 leading-none">{t("musicExperience")}</h4>
              <Image src={arrowRight} alt="Arrow Right" width={70} height={24} className="shrink-0 hidden md:block" style={{ height: '30px', width: 'auto' }} />
              <MusicPlayer></MusicPlayer>
            </div>
          </section>
          {/* section 1 */}
          <section
            id="mision"
            className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20"
          >
            <div
              className="w-full flex flex-col justify-between max-w-7xl mx-auto items-center gap-y-10
            md:flex-row md:gap-x-20"
            >
              <div className="gap-y-8 flex flex-col md:w-1/2">
                {/* <h3 className="kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl">
                  Un <span className="text-blue">Hogar</span> Para Cada Patita
                </h3> */}
                <DynamicTitle translationKey="home4PawsTitle" namespace="Home" />
                <p
                  className="inter text-base text-slate-800 font-regular"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("home4PawsDesc").replace(/\n/g, "<br/><br/>"),
                  }}
                ></p>
                <div>
                  <Link href={"/nosotros"}>
                    <button className="bg-white text-blue border border-blue font-medium text-sm py-3 px-4 rounded-lg hover:bg-blue hover:text-white hover:border-transparent transition duration-300 ease-in-out">
                      {t("knowMore")}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image src={golden} alt={"Golden Retrieveer"} />
              </div>
            </div>
          </section>
          {/* section 2 */}
          <AdoptionSteps isLanding />
          {/* section 3 */}
          <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative">
            <div className="max-w-7xl mx-auto flex justify-center flex-col gap-y-14 relative z-10">
              <div>
                <div className="flex flex-row justify-center">
                  <Image
                    src={emphasis}
                    alt={"Emphasis"}
                    className="w-7 h-7 mr-3 hidden sm:block"
                  />
                  <DynamicTitle namespace={"Home"} translationKey={"adoptionTitle"} />
                  <Image
                    src={emphasis}
                    alt={"Emphasis"}
                    className="w-7 h-7 ml-3 scale-x-[-1] hidden sm:block"
                  />
                </div>
                <p className="flex justify-center inter text-slate-800 text-center">
                  {t("petsInAdoption")}
                </p>
              </div>
              <div className="flex justify-center">
                <Pet isLanding></Pet>
              </div>
              <div className="flex justify-center">
                <Link href={"/adopciones"}>
                  <button className="bg-purple text-white font-medium text-sm py-3 px-4 rounded-lg ">
                    {t('knowMore')}
                  </button>
                </Link>
              </div>
            </div>
            <div className="absolute left-0 top-10 bottom-10 z-0">
              <Image
                src={purpePawsLeft}
                alt={"Purple Paws"}
                className="invisible sm:visible sm:w-[153px] sm:h-[567px] md:w-[246px] md:h-[725px]"
              />
            </div>
            <div className="absolute right-0 top-10 bottom-10 z-0">
              <Image
                src={purpePawsRight}
                alt={"Purple Paws"}
                className="invisible sm:visible sm:w-[187px] sm:h-[660px] md:w-[280px] md:h-[841px]"
              />
            </div>
          </section>
          {/* section 4 */}
          <section
            id="process"
            className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative"
          >
            <div className="bg-lightBlue rounded-lg p-5 flex flex-col max-w-7xl mx-auto gap-y-5 relative overflow-hidden sm:p-12 md:p-20 md:gap-y-16">
              <div className="flex flex-col gap-y-2 md:z-10 md:gap-y-4">
                <div className="flex flex-row justify-center items-center">
                  <DynamicTitle namespace={"Home"} translationKey={"processTitle"} />
                  <Image
                    src={blueEmphasis}
                    alt={"blue emphasis"}
                    className="w-5 h-5 ml-1 mb-6 hidden md:block"
                  />
                </div>
                <div className="flex justify-center">
                  <p className="flex justify-center inter text-slate-800 text-center md:w-2/3">
                    {t("kutaProcess")}
                  </p>
                </div>
              </div>
              <div className="md:z-10">
                <Process></Process>
              </div>

              <div className="absolute left-0 top-0 bottom-0 z-0 invisible md:visible">
                <Image
                  src={bluePaws}
                  alt={"Blue Paws"}
                  className=""
                  style={{ width: "978px", height: "690px" }}
                />
              </div>
            </div>
          </section>
          {/* Statistics */}
          <section id="statistics" className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative">
            <Statistics petCount={count}/>
          </section>
          {/* section 5 */}
          <section
            id="stories"
            className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative"
          >
            <div className="flex flex-row max-w-7xl mx-auto gap-x-20">
              <Image
                src={catPhone}
                alt={"Cat Phone"}
                className="hidden md:w-1/2 md:block h-auto shrink-0"
              />
              <div className="flex flex-col gap-y-5 md:w-1/2">
                <DynamicTitle namespace={"Home"} translationKey={"storiesTitle"} />
                <p
                  className="inter text-slate-800 font-normal"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("successStories").replace(/\n/g, "<br/><br/>"),
                  }}
                >
                </p>
                <div>
                  <Videos></Videos>
                </div>
              </div>
            </div>
          </section>
          {/* section 6 */}
          <HappyEndings></HappyEndings>
          {/* section 7 */}
          <section
            id="behindKuta"
            className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative"
          >
            <div className="flex flex-col max-w-7xl mx-auto gap-y-6">
              <div className="flex flex-col gap-y-3 justify-center items-center">
                <DynamicTitle namespace={"Home"} translationKey={"behindTitle"} />
                <p className="text-center text-slate-800 md:w-2/3">
                  {t("behindKuta")}
                </p>
              </div>
              <BehindKuta></BehindKuta>
            </div>
          </section>
          {/* section 7 */}
          <SocialMedia></SocialMedia>
        </div>
      }
    </>
  );
}
