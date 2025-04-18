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

export default function Requirements() {
    return (
      <>
        {
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-x-4">
          {requirements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 gap-y-6 flex flex-col items-center flex-1"
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
              <text className="inter text-slate-800 font-medium text-sm text-center">
                {item.text}
              </text>
            </div>
          ))}
        </div>
        }
      </>
    );
  }