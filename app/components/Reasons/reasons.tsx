import { icon } from "@fortawesome/fontawesome-svg-core";
import { content } from "../../../assets/Content/content";
import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";



export default function Reasons() {
  const t = useTranslations("WhyWeDoIt");

  const reasons = [
    {
      title: t("reason1"),
      content: t("reason1Desc"),
      icon: "pets",
      bg: "#6993E2"
    },
    {
      title: t("reason2"),
      content: t("reason2Desc"),
      icon: "sentiment_sad",
      bg: "#6981E2"
    },
    {
      title: t("reason3"),
      content: t("reason3Desc"),
      icon: "lightbulb",
      bg: "#6973E2"
    },
    {
      title: t("reason4"),
      content: t("reason4Desc"),
      icon: "diversity_1",
      bg: "#B07CE7"
    },
  ]

  return (
    <>
    <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20">
        <div className="bg-gradient-to-br from-gradientBlue to-gradientPurple rounded-lg px-5 py-7 sm:px-10 sm:py-10 flex flex-col gap-y-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-3 justify-center items-center">
            <DynamicTitle namespace={"WhyWeDoIt"} translationKey={"title"}/>
            <p
              className="inter text-base text-slate-800 font-regular text-center md:w-[80%]"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{
                __html: t("whyWeDoIt").replace(/\n/g, "<br/><br/>"),
              }}
            >
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
