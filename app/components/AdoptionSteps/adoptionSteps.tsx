import { content } from "../../../assets/Content/content";
import yellowPerson from "../../../assets/yellowPersonDog.png";
import purplePerson from "../../../assets/purple-woman-dog.png"
import Image from "next/image";
import Requirements from "../Requirements/requirements";
import { useTranslations } from "next-intl";



type AdoptionProps = {
  isLanding?: boolean; 
  isAdoption?: boolean;
};

export default function AdoptionSteps({ isLanding = false, isAdoption = false }: AdoptionProps) {
  const t = useTranslations("AdoptionSteps");

const steps = [
  {
    title: t("firstStep"),
    content: t("firstStepDesc"),
  },
  {
    title: t("secondStep"),
    content: t("secondStepDesc"),
  },
  {
    title: t("thirdStep"),
    content: t("thirdStepDesc"),
  },
];
  return (
    <>
      {
        <section id="adoptionSteps" className={`${isAdoption?"md:w-3/4":""}`}>
          <div className={`${!isAdoption ? "px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20" : "h-full"}`}>
            <div className={`bg-gradient-to-br ${isLanding || isAdoption ? "from-lightYellow to-lightPink" : "from-gradientBlue to-gradientPurple"}  
            rounded-lg px-5 py-7 sm:px-10 sm:py-10 flex flex-col gap-y-10 max-w-7xl mx-auto ${isAdoption ? "h-full" : ""}`}>
              <div className={`flex flex-col justify-between  items-center gap-y-14
              md:flex-row md:gap-x-20`}>
                <div className={`sm:w-1/2 ${isAdoption ? "hidden" : ""}`}>
                  <Image src={isLanding ? yellowPerson : purplePerson} alt={"Person with dog"} />
                </div>
                <div className={`flex flex-col gap-y-11 ${isAdoption ? "":"md:w-1/2"}`}>
                  <h3 className="kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl text-center md:text-left">
                    Pasos Para <span className={`${isLanding || isAdoption  ? "text-yellow" : "text-purple"}`}>Adoptar</span> En
                    Kuta
                  </h3>
                  <div className="relative">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex flex-row gap-x-6 relative z-10 ${
                            index !== steps.length - 1 ? 'pb-6' : ''
                          }`}
                      >
                        <div>
                          <div className="rounded-full flex justify-center items-center bg-slate-800 w-11 h-11 text-white">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-lg font-semibold inter text-slate-800">
                            {step.title}
                          </h4>
                          <p className="text-base font-normal inter text-slate-800">
                            {step.content}
                          </p>
                        </div>
                      </div>
                    ))}
                    <p
                      style={{ width: "2px" }}
                      className=" absolute top-0 bottom-5 left-5 bg-slate-500 z-0"
                    ></p>
                  </div>
                </div>
              </div>
              <div className={`${isAdoption ? "hidden" : ""}`}>
                <Requirements />
              </div>
              
            </div>
          </div>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
            rel="stylesheet"
          />
        </section>
      }
    </>
  );
}
