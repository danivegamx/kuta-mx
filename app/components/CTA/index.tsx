"use server";
import './styles.sass';

export default function CTA(title: string, action: any) {
  return (
  <button onClick={async () => await action()} className="primary" >
    {title}
  </button>
  );
}