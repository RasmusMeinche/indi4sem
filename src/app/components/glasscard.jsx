"use client"
import Button from "./button";
import { useRef } from "react";

export default function Glass({
  overskrift,
  tekst,
  img,
  imgWidth = "full",
  imgHeight = "full",
  width = "w-full",
  height = "h-full",
  object = "object-cover",
  textSize = "text-xl",
  titleSize = "sm:text-4xl",
  textWidth = "w-4/5",
  cardTekstSize = "sm:text-[1rem] md:text-lg",
  textOnButton = "Læs Mere",
  gridRow = "lg:grid-rows-[minmax(5.5rem,auto)_auto_minmax(10.8rem,auto)_auto] xl:lg:grid-rows-[minmax(5.5rem,auto)_auto_minmax(8.8rem,auto)_auto]",
  lastChild = "[&_*:last-child]:mt-4 lg:[&_*:last-child]:mt-0",
  pdfUrl,
}) {

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
  ref={cardRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  className={`
    ${width}
    ${height}
    m-auto
    glass-card
    transition-transform
    duration-150
    will-change-transform
  `}
  style={{ transformStyle: "preserve-3d" }}
>
      <div
        className={`text-center *:my-1 grid md:*:my-4 ${gridRow} ${lastChild}`}
      >
        {overskrift && (
          <h1 className={`${titleSize} font-(--font-weight) `}>{overskrift}</h1>
        )}

        {img && (
          <img
            className={`m-auto rounded-md ${imgWidth} ${imgHeight} ${object}`}
            src={img}
            alt="img"
          />
        )} 

        {tekst && (
          <p
            className={`m-auto font-medium text-xs ${cardTekstSize} ${textWidth} ${textSize}`}
          >
            {tekst}
          </p>
        )}

        {textOnButton &&
          (pdfUrl ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button knapTekst={textOnButton} />
            </a>
          ) : (
            <Button knapTekst={textOnButton} />
          ))}
      </div>
    </div>
  );
}
