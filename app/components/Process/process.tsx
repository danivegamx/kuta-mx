import { content } from "../../../assets/Content/content";

const processSteps = [
  {
    icon: "pets",
    title: "Rescate",
    text: content.process1,
  },
  {
    icon: "health_and_safety",
    title: "Rehabilitación",
    text: content.process2,
  },
  {
    icon: "sound_detection_dog_barking",
    title: "Adopción",
    text: content.process3,
  },
];

export default function Process() {
  return (
    <div className="flex flex-col gap-y-5 justify-center md:flex-row md:gap-x-5">
      {processSteps.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-5 gap-x-4 flex flex-col gap-y-4 items-start flex-1 sm:flex-row sm:gap-x-4 md:flex-col md:gap-y-4" 
        >
          <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-800 shrink-0">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "36px" }}
            >
              {item.icon}
            </span>
          </div>
          <div className="flex flex-col gap-y-4">
            <text className="kulim text-slate-800 font-semibold text-xl">
              {item.title}
            </text>
            <text className="inter text-slate-800 font-normal text-base">
              {item.text}
            </text>
          </div>
        </div>
      ))}
    </div>
  );
}
