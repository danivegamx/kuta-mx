import { content } from "../../../assets/Content/content";
import yellowPerson from "../../../assets/yellowPersonDog.png";
import Image from "next/image";
import Requirements from "../Requirements/requirements";

const steps = [
  {
    title: content.step1Title,
    content: content.step1Content,
  },
  {
    title: content.step2Title,
    content: content.step2Content,
  },
  {
    title: content.step3Title,
    content: content.step3Content,
  },
];

export default function AdoptionSteps() {
  return (
    <>
      {
        <section>
          <div className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
            <div className="bg-gradient-to-br from-lightYellow to-lightPink rounded-lg px-10 py-10 flex flex-col gap-y-10 max-w-6xl mx-auto">
              <div className="flex flex-col justify-between max-w-6xl mx-auto items-center gap-y-14
              md:flex-row md:gap-x-20">
                <div className="md:w-1/2">
                  <Image src={yellowPerson} alt={"Person with dog"} />
                </div>
                <div className="md:w-1/2 flex flex-col gap-y-11">
                  <h3 className="kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl text-center md:text-left">
                    Pasos Para <span className="text-yellow">Adoptar</span> En
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
              <Requirements />
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
