"use client";

import Image from "next/image";
import aboutUs1 from "../../../assets/aboutUs1.jpg";
import aboutUs2 from "../../../assets/aboutUs2.jpg";
import aboutUs3 from "../../../assets/aboutUs3.jpg";
import aboutUs4 from "../../../assets/aboutUs4.jpg";
import aboutUs5 from "../../../assets/aboutUs5.jpg";
import aboutUs6 from "../../../assets/aboutUs6.jpg";
import { useState, useEffect } from "react";

export default function Pictures() {
  const [visibleCount, setVisibleCount] = useState(0);

  const pictures = [aboutUs1, aboutUs2, aboutUs3, aboutUs4, aboutUs5, aboutUs6];

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(2); // phone
      } else if (width < 768) {
        setVisibleCount(4); // tablet
      } else {
        setVisibleCount(6); // desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-5 max-w-6xl overflow-x-auto">
        {pictures.slice(0, visibleCount).map((picture, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image
              src={picture}
              alt={`About Us Picture ${index + 1}`}
              className={`object-cover rounded-lg ${
                index % 2 === 0 ? 'w-[150px] h-[200px]' : 'w-[150px] h-[150px]'
              }`}
            />
          </div>
        ))}
      </div>
  );
}
