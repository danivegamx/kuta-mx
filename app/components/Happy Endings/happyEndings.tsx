import Image from "next/image";
import startEmphasis from "../../../assets/star-emphasis.png";
import emmaBefore from "../../../assets/Pets/emma-before.jpeg";
import emmaAfter from "../../../assets/Pets/emma-after.jpeg";
import freyaBefore from "../../../assets/Pets/freya-before.jpeg";
import freyaAfter from "../../../assets/Pets/freya-after.jpeg";
import ashBefore from "../../../assets/Pets/ash-before.jpeg";
import ashAfter from "../../../assets/Pets/ash-after.jpeg";
import canelaBefore from "../../../assets/Pets/canela-before.jpeg";
import canelaAfter from "../../../assets/Pets/canela-after.jpeg";
import cloeBefore from "../../../assets/Pets/cloe-before.jpeg";
import cloeAfter from "../../../assets/Pets/cloe-after.jpeg";
import gaiaBefore from "../../../assets/Pets/gaia-before.jpeg";
import gaiaAfter from "../../../assets/Pets/gaia-after.jpeg";
import gigiBefore from "../../../assets/Pets/gigi-before.jpeg";
import gigiAfter from "../../../assets/Pets/gigi-after.jpeg";
import kiaraBefore from "../../../assets/Pets/kiara-before.jpeg";
import kiaraAfter from "../../../assets/Pets/kiara-after.jpeg";
import kikaBefore from "../../../assets/Pets/kika-before.jpeg";
import kikaAfter from "../../../assets/Pets/kika-after.jpeg";
import luaBefore from "../../../assets/Pets/lua-before.jpeg";
import luaAfter from "../../../assets/Pets/lua-after.jpeg";
import maggieBefore from "../../../assets/Pets/maggie-before.jpeg";
import maggieAfter from "../../../assets/Pets/maggie-after.jpeg";
import zeusBefore from "../../../assets/Pets/zeus-before.jpeg";
import zeusAfter from "../../../assets/Pets/zeus-after.jpeg";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";
import { useTranslations } from "next-intl";

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
  {
    name: "Ash",
    before: ashBefore,
    after: ashAfter,
  },
  {
    name: "Canela",
    before: canelaBefore,
    after: canelaAfter,
  },
  {
    name: "Cloe",
    before: cloeBefore,
    after: cloeAfter,
  },
  {
    name: "Gaia",
    before: gaiaBefore,
    after: gaiaAfter,
  },
  {
    name: "Gigi",
    before: gigiBefore,
    after: gigiAfter,
  },
  {
    name: "Kiara",
    before: kiaraBefore,
    after: kiaraAfter,
  },
  {
    name: "Kika",
    before: kikaBefore,
    after: kikaAfter,
  },
  {
    name: "Lua",
    before: luaBefore,
    after: luaAfter,
  },
  {
    name: "Maggie",
    before: maggieBefore,
    after: maggieAfter,
  },
  {
    name: "Zeus",
    before: zeusBefore,
    after: zeusAfter,
  },
];

export default function HappyEndings() {
  const t = useTranslations("Home")
  return (
    <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-6">
        <div className="flex flex-row justify-center items-end gap-x-4">
          <Image
            src={startEmphasis}
            alt={"Star emphasis"}
            className="w-8 h-12"
          ></Image>
          <DynamicTitle namespace={"Home"} translationKey={"happyEndings"}/>
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
                  className="rounded-lg bg-white flex flex-col justify-center gap-y-3 mx-4"
                >
                  <div className="bg-slate-100 flex items-center justify-center p-3 rounded-lg">
                    <h4 className="font-caveat text-[22px] text-center text-slate-800">
                      {image.name}
                    </h4>
                  </div>

                  <div className="flex flex-row gap-x-3">
                    <div className="flex flex-col">
                      <div className="w-48 h-[250px] relative overflow-hidden rounded-t-lg">
                        <Image
                          src={image.before}
                          alt="Before Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-lightBlue rounded-b-lg p-3 flex items-center justify-center">
                        <h5 className="font-caveat text-slate-800 text-xl text-center">
                          {t("before")}
                        </h5>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="w-48 h-[250px] relative overflow-hidden rounded-t-lg">
                        <Image
                          src={image.after}
                          alt="After Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-lightBlue rounded-b-lg p-3 flex items-center justify-center">
                        <h5 className="font-caveat text-slate-800 text-xl text-center">
                        {t("after")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
