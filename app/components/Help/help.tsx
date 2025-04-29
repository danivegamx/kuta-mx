import graySquiggle from "../../../assets/gray-squiggle.png";
import { content } from "../../../assets/Content/content";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";

const help = [
  {
    title: "Adopta",
    content: content.howToHelp1,
    color: "#F7DEBA",
    icon: "pets",
  },
  {
    title: "Sé casa puente",
    content: content.howToHelp2,
    color: "#D4CFE3",
    icon: "cottage",
  },
  {
    title: "Dona",
    content: content.howToHelp3,
    color: "#C4E3EE",
    icon: "attach_money",
  },
  {
    title: "Sé voluntario",
    content: content.howToHelp4,
    color: "#ADD3FF",
    icon: "person_raised_hand",
  },
  {
    title: "Difunde",
    content: content.howToHelp5,
    color: "#FFB2B4",
    icon: "share",
  },
];

export default function Help() {
  const t = useTranslations("HowToHelp")

  const help = [
    {
      title: t("help1"),
      content: t("help1Desc"),
      color: "#F7DEBA",
      icon: "pets",
    },
    {
      title: t("help2"),
      content: t("help2Desc"),
      color: "#D4CFE3",
      icon: "cottage",
    },
    {
      title: t("help3"),
      content: t("help3Desc"),
      color: "#C4E3EE",
      icon: "attach_money",
    },
    {
      title: t("help4"),
      content: t("help4Desc"),
      color: "#ADD3FF",
      icon: "person_raised_hand",
    },
    {
      title: t("help5"),
      content: t("help5Desc"),
      color: "#FFB2B4",
      icon: "share",
    },
  ];

  return (
    <>
      <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto items-center flex flex-col gap-y-8 relative z-10">
          <div className="gap-y-3 flex flex-col items-center">
            <DynamicTitle namespace={"HowToHelp"} translationKey={"title"}/>
            <p
              className="inter text-base text-slate-800 font-regular text-center md:w-[80%]"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("howToHelp")}
            </p>
          </div>
          <div className="flex flex-col gap-y-5 gap-x-5 sm:flex-row sm:flex-wrap md:flex-nowrap justify-center">
            {help.map((item, index) => (
              <div
                className={`p-5 flex flex-col rounded-lg items-center gap-y-5 sm:w-[225px] md:w-full ${index % 2 === 0 ? "md:mb-20" : "md:mt-20"}`}
                style={{ backgroundColor: item.color }}
                key={index}
              >
                <div className="w-20 h-20 flex justify-center items-center rounded-full shrink-0 bg-slate-800">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "50px", color: item.color }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h4 className="text-lg font-bold font-kulim text-slate-800 text-center">
                    {item.title}
                  </h4>
                  <p className="text-base font-normal font-inter text-slate-800 text-center">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image src={graySquiggle}
              alt={`Gray Squiggle`}
              className="absolute left-0 right-0 top-[250px] z-0 hidden md:block"/>
      </section>
    </>
  );
}
