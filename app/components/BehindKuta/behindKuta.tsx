import { content } from "../../../assets/Content/content";
import rescue from "../../../assets/rescue.png";
import halfwayHouse from "../../../assets/halfwayHouse.png";
import volunteers from "../../../assets/volunteers.png";
import Image from "next/image";

const behindKutaContent = [
  {
    title: "Rescatistas",
    content: content.rescue,
    image: rescue,
  },
  {
    title: "Casa Puente",
    content: content.halfwayHouse,
    image: halfwayHouse,
  },
  {
    title: "Voluntarios",
    content: content.volunteers,
    image: volunteers,
  },
];

export default function BehindKuta() {
  return (
    <>
      {
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-9">
          {behindKutaContent.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 gap-y-4 flex flex-col items-start flex-1 flex items-center"
            >
              <div className="flex justify-center items-center">
                <Image src={item.image} alt={"Person with dog"} className="w-[300px] h-[300px] md:w-full md:h-full"/>
              </div>
              <h4 className="kulim text-slate-800 font-bold text-2xl">
                {item.title}
              </h4>
              <p className="inter text-slate-800 font-normal text-base text-center">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      }
    </>
  );
}
