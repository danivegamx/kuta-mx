import Image from "next/image";
import startEmphasis from "../../../assets/star-emphasis.png";
import emmaBefore from "../../../assets/emma-before.jpeg";
import emmaAfter from "../../../assets/emma-after.jpeg";
import freyaBefore from "../../../assets/freya-before.jpeg";
import freyaAfter from "../../../assets/freya-after.jpeg";

// const images = [
//   "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg",
//   "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg",
//   "https://www.rawmate.com/cdn/shop/articles/dogs_with_purpose_puppy_720x.jpg",
//   "https://d2zp5xs5cp8zlg.cloudfront.net/image-66559-800.jpg",
//   "https://www.dogstrust.ie/images/800x600/assets/2022-07/Buster_germanshepherd_outdoors_leeds_dogstrust.jpg",
//   "https://www.rspcansw.org.au/wp-content/uploads/2025/01/Robbie-and-Coco-016-1-1024x1024.jpg",
//   "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MTk2NTM5MzQxNzI2NTU4MTc1/five-ferocious-dog-breeds-your-family-must-be-afraid-of-2.jpg"
// ];

const images = [
  {
    name: "Emma",
    before: emmaBefore,
    after: emmaAfter,
  },
  {
    name: "Freya",
    before: freyaBefore,
    after: freyaAfter,
  },
];

export default function HappyEndings() {
  return (
    <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-6">
        <div className="flex flex-row justify-center items-end gap-x-4">
          <Image
            src={startEmphasis}
            alt={"Star emphasis"}
            className="w-8 h-12"
          ></Image>
          <h3 className="text-nowrap font-kulim font-semibold text-2xl text-slate-800 sm:text-3xl md:text-4xl">
            Finales <span className="text-blue">Felices</span>
          </h3>
          <Image
            src={startEmphasis}
            alt={"Star emphasis"}
            className="scale-x-[-1] w-8 h-12"
          ></Image>
        </div>
        <div className="overflow-hidden whitespace-nowrap py-4">
          <div className="w-max animate-marquee flex flex-row">
            {[...images, ...images].map((image: any, index: number) => {
              return (
                <div
                  key={index}
                  className="rounded-lg p-6 bg-white border border-slate-300 flex flex-col justify-center gap-y-6 mx-4"
                >
                  <h4 className="font-caveat text-[22px] text-center text-slate-800">
                    {image.name}
                  </h4>
                  <div className="flex flex-row gap-x-4">
                    <div className="flex flex-col gap-y-4">
                        <div className="w-48 h-[250px] relative overflow-hidden rounded-md">
                          <Image
                            src={image.before}
                            alt="Before Image"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h5 className="font-caveat text-slate-800 text-xl text-center">Antes</h5>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="w-48 h-[250px] relative overflow-hidden rounded-md">
                          <Image
                            src={image.after}
                            alt="After Image"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h5 className="font-caveat text-slate-800 text-xl text-center">Despues</h5>
                    </div>
                  </div>
                </div>
                // <div key={index} className="w-60 h-60 rounded-lg bg-cover bg-center bg-no-repeat shrink-0 mx-2" style={{backgroundImage: `url(${image})`}}>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
