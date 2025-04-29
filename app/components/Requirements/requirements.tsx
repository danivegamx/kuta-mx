import { useTranslations } from "next-intl";
import { content } from "../../../assets/Content/content";

const requirements = [
    {
      icon: "attach_money",
      bgColor: "#6993E2",
      text: content.requirement1,
    },
    {
      icon: "moon_stars",
      bgColor: "#E27769",
      text: content.requirement2,
    },
    {
      icon: "card_membership",
      bgColor: "#E2A669",
      text: content.requirement3,
    },
    {
      icon: "favorite",
      bgColor: "#977CE7",
      text: content.requirement2,
    },
  ];

type RequirementsProps = {
    isAdoption?: boolean;
}

export default function Requirements({isAdoption = false }: RequirementsProps) {
  const t = useTranslations("AdoptionSteps")
  const requirements = [
    {
      icon: "attach_money",
      bgColor: "#6993E2",
      text: t("requirement1"),
    },
    {
      icon: "moon_stars",
      bgColor: "#E27769",
      text: t("requirement2"),
    },
    {
      icon: "card_membership",
      bgColor: "#E2A669",
      text: t("requirement3"),
    },
    {
      icon: "favorite",
      bgColor: "#977CE7",
      text: t("requirement4"),
    },
  ];
  
  return (
      <>
        {
          <div className={`flex flex-col gap-4 sm:grid sm:grid-cols-2 md:flex md:flex-row md:gap-x-4 `}>
          {requirements.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 gap-y-6 flex flex-col items-center flex-1 ${isAdoption ? "border border-slate-300" : ""}`}
            >
              <div
                className="w-16 h-16 rounded-full flex justify-center items-center"
                style={{ backgroundColor: item.bgColor }}
              >
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: "36px" }}
                >
                  {item.icon}
                </span>
              </div>
              <p className="inter text-slate-800 font-medium text-sm text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        }
      </>
    );
  }