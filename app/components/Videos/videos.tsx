'use client'

import { useState } from "react";
import matilde from "../../../assets/Matilde.png";
import gaia from "../../../assets/Gaia.png";
import lia from "../../../assets/Lia.png";

const videos = [
  {
    name: "Matilde",
    url: "https://www.youtube.com/embed/qVRoYr7prCQ",
    image: matilde
  },
  {
    name: "Gaia",
    url: "https://www.youtube.com/embed/ab938xf9Biw",
    image: gaia
  },
  {
    name: "Lía",
    url: "https://www.youtube.com/embed/UJ_jVczM3cw",
    image: lia
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-5 justify-center">
      {videos.map((video, index) => {
        return (
          <div
            key={index}
            className="relative flex-1 rounded-lg border border-slate-300 overflow-hidden"
          >
            {/* Show iframe if active */}
            {activeVideo === index ? (
              <iframe
                width="100%"
                height="100%"
                src={`${video.url}?autoplay=1`}
                title={video.name}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              // Thumbnail with overlay
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={() => setActiveVideo(index)}
              >
                <img src={video.image.src} alt={video.name} className="w-full h-40 object-cover" />
                {/* Name in top left */}
                <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                  {video.name}
                </div>
                {/* Play button in center */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-white bg-opacity-80 rounded-full p-3 hover:scale-110 transition-transform flex justify-center items-center">
                  <span
                            className="material-symbols-outlined text-white"
                            style={{ fontSize: "30px" }}
                        >
                            play_arrow
                        </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
