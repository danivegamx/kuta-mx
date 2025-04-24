import Image from "next/image";
import startEmphasis from "../../../assets/star-emphasis.png";

const images = [
  "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg",
  "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_S.jpg",
  "https://www.rawmate.com/cdn/shop/articles/dogs_with_purpose_puppy_720x.jpg",
  "https://d2zp5xs5cp8zlg.cloudfront.net/image-66559-800.jpg",
  "https://www.dogstrust.ie/images/800x600/assets/2022-07/Buster_germanshepherd_outdoors_leeds_dogstrust.jpg",
  "https://www.rspcansw.org.au/wp-content/uploads/2025/01/Robbie-and-Coco-016-1-1024x1024.jpg",
  "https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MTk2NTM5MzQxNzI2NTU4MTc1/five-ferocious-dog-breeds-your-family-must-be-afraid-of-2.jpg"
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
        <div className="overflow-hidden whitespace-nowrap bg-white py-4">
          <div className="w-max animate-marquee flex flex-row">
            {[...images, ...images].map((image: any, index: number) => {
              return (
                <div key={index} className="w-60 h-60 rounded-lg bg-cover bg-center bg-no-repeat shrink-0 mx-2" style={{backgroundImage: `url(${image})`}}> 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
