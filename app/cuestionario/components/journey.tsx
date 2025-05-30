import { FaPlay, FaFlagCheckered } from "react-icons/fa";

import './styles.sass';

interface LoadingProps {
  sections: string[];
  currentSection: number;
}

const Loading: React.FC<LoadingProps> = ({ sections, currentSection }) => {
  console.log(sections, currentSection);
  return (
    <div className={`my-4 md:mb-14 journey-wrapper grid grid-cols-${sections.length + 2}`}>
      <span><span className="stage done"><FaPlay /></span></span>
      {
        sections.map((_section, index) => (
          <span key={index}><span className={`stage ${currentSection >= index + 1 ? 'done' : ''}`}>{index + 1}</span></span>
        ))
      }
      <span><span className="stage last"><FaFlagCheckered /></span></span>
    </div>
  );
};

export default Loading;
