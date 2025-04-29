import { useMessages} from "next-intl";

type TitleTranslation = {
  color: string;
  highlightPosition: number;
  parts: string[];
};

interface DynamicTitleProps {
  namespace: string;
  translationKey: string;
  overrideColor?: string;
}

export function DynamicTitle({ namespace, translationKey, overrideColor }: DynamicTitleProps) {
  const messages = useMessages();

  const namespaceMessages = messages[namespace] as Record<string, TitleTranslation> | undefined;
  const titleKey = namespaceMessages?.[translationKey];

  if (!titleKey) {
    return null; 
  }

  return (
    <h3 className="font-kulim font-semibold text-2xl text-slate-800 md:text-4xl sm:text-3xl text-center md:text-left">
      {titleKey.parts.map((part, index) => (
        <span
          key={index}
          className={index === titleKey.highlightPosition ? (overrideColor ? overrideColor : titleKey.color) : "text-slate-800"}
        >
          {part}
          {index !== titleKey.parts.length - 1 && '\u00A0'}
        </span>
      ))}
    </h3>
  );
}
