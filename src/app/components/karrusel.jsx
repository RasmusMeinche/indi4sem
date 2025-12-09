"use client";

import Image from "next/image";

const defaultLogos = [
  { src: "/recycon_logo.png", alt: "Recycon Logo" },
  { src: "/7steel_logo.png", alt: "7steel Logo" },
];

export default function Karrusel({
  title = "Nuværende partnere",
  logos = defaultLogos,
  speed = 20,
}) {
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="w-full">
      {/* Overskrift */}
      <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
        {title}
      </h2>

      {/* Lys grå linje over */}
      <div className="w-full h-0.5 bg-gray-300 mb-16 mt-12" />

      {/* Slider wrapper */}
      <div className="py-6">
        <div className="relative overflow-hidden group">
          <div
            className="flex items-center slider-track group-hover:[animation-play-state:paused]"
            style={{ "--scroll-duration": `${speed}s` }}
          >
            {items.map((logo, index) => (
              <div
                key={index}
                className="flex shrink-0 px-40 justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={260}
                  height={80}
                  className="h-10 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Fade i kanterne */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent" />
        </div>
      </div>

      {/* Lys grå linje under */}
      <div className="w-full h-0.5 bg-gray-300 mb-12 mt-16" />

      {/* Animation */}
      <style jsx>{`
        .slider-track {
          width: max-content;
          animation: scroll var(--scroll-duration) linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
