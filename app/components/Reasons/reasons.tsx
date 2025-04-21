import { icon } from "@fortawesome/fontawesome-svg-core";
import { content } from "../../../assets/Content/content";

const reasons = [
  {
    title: "Cada vida importa",
    content: content.reasons1,
    icon: "pets",
    bg: "#6993E2"
  },
  {
    title: "Contra el abandono",
    content: content.reasons2,
    icon: "sentiment_sad",
    bg: "#6981E2"
  },
  {
    title: "Adopción responsable",
    content: content.reasons3,
    icon: "lightbulb",
    bg: "#6973E2"
  },
  {
    title: "Juntos cambiamos",
    content: content.reasons4,
    icon: "diversity_1",
    bg: "#B07CE7"
  },
];

export default function Reasons() {
  return (
    <>
    <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div className="bg-gradient-to-br from-gradientBlue to-gradientPurple rounded-lg px-5 py-7 sm:px-10 sm:py-10 flex flex-col gap-y-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-3 justify-center items-center">
            <h3 className="font-kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl text-center">
              ¿Por Qué Lo <span className="text-purple">Hacemos</span>?
            </h3>
            <p
              className="inter text-base text-slate-800 font-regular text-center md:w-[80%]"
              style={{ whiteSpace: "pre-line" }}
            >
              {content.reasonsDesc}
            </p>
          </div>
          <div className="flex flex-col gap-y-5 gap-x-5 sm:grid sm:grid-cols-2 md:flex md:flex-row">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-5 relative z-10 p-6 bg-white rounded-lg"
              >
                <div className={`rounded-full flex justify-center items-center w-16 h-16 text-white shrink-0`}
                style={{ backgroundColor: reason.bg }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "38px" }}>
                    {reason.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-y-5">
                  <h4 className="text-lg font-bold font-kulim text-slate-800">
                    {reason.title}
                  </h4>
                  <p className="text-base font-normal font-inter text-slate-800">
                    {reason.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
}
