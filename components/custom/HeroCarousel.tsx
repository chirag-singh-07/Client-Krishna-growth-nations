"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides: Array<{ type: "image" | "video"; src: string; alt?: string }> = [
  { type: "image", src: "/g1.png", alt: "AI Learning Dashboard" },
  { type: "video", src: "https://drive.google.com/file/d/1GaEXTD289xEZt9sW1bMJ1EgzNGXQmUgi/preview" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(false);

  const start = (delay = 3500) => {
    stop();
    intervalRef.current = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % total;
        // debug log for visibility
        // eslint-disable-next-line no-console
        console.debug("carousel: advancing", i, "->", next);
        return next;
      });
    }, delay);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current as unknown as number);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    start();
    return () => {
      mountedRef.current = false;
      stop();
    };
    // total is stable here; start/stop handle interval lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const slide = slides[index];

  return (
    <div
      className="w-full h-[500px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden relative shadow-2xl bg-gray-50"
      onMouseEnter={() => stop()}
      onMouseLeave={() => start()}
    >
      <div className="w-full h-full">
        {slide.type === "image" ? (
          <div className="relative w-full h-full">
            <Image src={slide.src} alt={slide.alt || "slide"} fill className="object-cover" priority={index === 0} />
          </div>
        ) : (
          <iframe
            src={slide.src}
            title="Review Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
        <button onClick={prev} aria-label="Prev" className="pointer-events-auto bg-white/90 hover:bg-white px-3 py-2 rounded-full shadow border">‹</button>
        <button onClick={next} aria-label="Next" className="pointer-events-auto bg-white/90 hover:bg-white px-3 py-2 rounded-full shadow border">›</button>
      </div>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-purple-600" : "bg-white/60"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
