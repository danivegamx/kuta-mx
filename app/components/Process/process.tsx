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
        <div className="flex flex-row gap-x-5 justify-center">
            {processSteps.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg p-5 gap-y-4 flex flex-col items-start flex-1"
                >
                    <div
                        className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-800"
                    >
                        <span
                            className="material-symbols-outlined text-white"
                            style={{ fontSize: "36px" }}
                        >
                            {item.icon}
                        </span>
                    </div>
                    <text className="kulim text-slate-800 font-semibold text-xl">
                        {item.title}
                    </text>
                    <text className="inter text-slate-800 font-normal text-base">
                        {item.text}
                    </text>
                </div>
            ))}
        </div>
    );
}