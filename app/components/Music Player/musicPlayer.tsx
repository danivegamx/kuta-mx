"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import songCover from "../../../assets/better-together.jpg"

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 bg-white border border-slate-300 p-3 rounded-lg w-full justify-between">
        <div className="flex flex-row gap-x-4 items-center">
            <Image src={songCover} alt="Song cover" width={52} height={52} className="rounded"/>
            <div>
                <p className="font-inter font-medium text-[16px] text-slate-800">Better Together</p>
                <p className="font-inter font-normal text-[16px] text-slate-800">Jack Johnson</p>
            </div>
        </div>
      <button
        onClick={togglePlay}
        className="bg-slate-800 text-white py-2 px-4 rounded-full h-12 w-12 flex items-center justify-center"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "24px" }}
        >
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>
      <div className=" hidden sm:block flex-grow h-2 bg-slate-300 rounded overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow to-purple transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <audio ref={audioRef} loop>
        <source src="/assets/Audio/betterTogether.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
