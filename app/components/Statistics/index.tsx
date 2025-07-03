import { useTranslations } from "next-intl";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";
import Image from "next/image";
import mexicoGraphic from '@/assets/mexico-graphic.png'

interface StatisticsProps {
  petCount: number;
}

export default function Statistics({petCount}: StatisticsProps) {
    const t = useTranslations("Statistics")

    const colab = [
        {
            icon: 'partner_exchange',
            title: t("collaborators")
        },
        {
            icon: 'sentiment_very_satisfied',
            title: t("volunteers")
        },
        {
            icon: 'family_home',
            title: t("fosterHomes")
        },
    ]

    const stats = [
        {
            number: '20M',
            desc: t("strays"),
            color: '#f2eeff',
            border: false
        },
        {
            number: '500k',
            desc: t("petsYear"),
            color: '#fff3e2',
            border: false
        },
        {
            number: '1,370',
            desc: t("petsDay"),
            color: '#e2f7ff',
            border: false
        },
        {
            number: petCount,
            desc: t("petsClick"),
            color: '#ffffff',
            border: true
        }
    ]

    return (
        <div className="flex flex-col gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col gap-6 md:flex-1">
                    <DynamicTitle namespace={"Statistics"} translationKey={"statisticsTitle"} />
                    <p
                        className="inter text-base text-slate-800 font-regular"
                        style={{ whiteSpace: "pre-line" }}
                        dangerouslySetInnerHTML={{
                            __html: t("statisticsText").replace(/\n/g, "<br/><br/>"),
                        }}
                    ></p>
                    <div className="grid grid-cols-2 gap-3 items-center sm:flex sm:flex-row">
                        {colab.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg flex flex-col items-center gap-1 py-10 px-6 border border-1 border-slate-200
                            sm:rounded-t-full sm:rounded-b-lg sm:w-[150px]">
                                <span
                                    className="material-symbols-outlined text-slate-800"
                                    style={{ fontSize: "50px" }}
                                >
                                    {item.icon}
                                </span>
                                <p className="inter text-sm font-medium text-slate-800 text-center text-nowrap">{item.title}</p>
                            </div>
                        ))}
                        <h4 className="font-caveat text-[26px] text-wrap text-slate-800 leading-none">{t("howToBePart")} <span className="text-blue cursor-pointer">{t("here")}</span>
                        </h4>
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-5 md:flex-1">
                    <Image src={mexicoGraphic} alt={"Map of Mexico"} />
                    <div className="flex flex-row gap-3 items-start w-1/2 sm:absolute sm:top-0 sm:right-0 sm:w-1/4">
                        <div className="pt-1">
                            <div className="w-3 h-3 bg-[#f6f0ce] rounded-full border border-1 border-[#c98c21]"></div>
                        </div>
                        <p className="text-center inter text-sm text-slate-800 sm:text-start">{t("mapKey")}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:flex md:flex-row">
                {stats.map((item, index)=>(
                    <div key={index} className={`rounded-lg p-10 flex-1 flex items-center justify-center flex-col ${item.border ? "border border-[3px] border-lightPurple drop-shadow-md" : ""}`} style={{backgroundColor: item.color}}>
                        <p className="kulim text-[50px] text-slate-800">{item.number}</p>
                        <p className="inter text-xl text-slate-800 text-center">{item.desc}</p>
                    </div>
                ))}
            </div>
            <p className="text-slate-800 inter text-sm">{t("stats")}</p>
        </div>
    )
}