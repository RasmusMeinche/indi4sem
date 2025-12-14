"use client";

import React, { useState } from "react";
import Sektionsoverskrift from "./sektionsoverskrift";

const steps = [
  {
    id: "01",
    title: "Bortskaffelse af cement og armering",
    body: "Overskydende cement og armeringsmaterialer fra tidligere konstruktioner bortskaffes som led i råmaterialeindsamlingen.",
  },
  {
    id: "02",
    title: "Genanvendelse af materialer",
    body: "Udvalgte materialer genanvendes, så ressourcerne kan bruges på ny i produktionskredsløbet.",
  },
  {
    id: "03",
    title: "Transport af råmaterialer",
    body: "De indsamlede og sorterede materialer transporteres videre til produktionsfaciliteter.",
  },
  {
    id: "04",
    title: "Produktion",
    body: "Materialerne forarbejdes og gøres klar til støbeprocessen gennem industriel produktion.",
  },
  {
    id: "05",
    title: "Støbning i metalstøbeforme",
    body: "ARK-modulet formes ved at støbe beton i specialdesignede metalforme, som sikrer et ensartet udtryk.",
  },
  {
    id: "06",
    title: "Transport af færdige moduler",
    body: "De færdigstøbte elementer fragtes til de lokationer, hvor de skal installeres.",
  },
  {
    id: "07",
    title: "Installation i bymiljøet",
    body: "Modulerne placeres og monteres i byrum, hvor de fungerer som en del af byrumsinventaret.",
  },
  {
    id: "08",
    title: "Brugsfase i bymiljøet",
    body: "Produktet indgår aktivt i daglig brug og bidrager til funktion, byliv og æstetik.",
  },
  {
    id: "09",
    title: "Bortskaffelse ved end-of-life",
    body: "Når produktet ikke længere kan bruges, fjernes det og forberedes til genanvendelse eller korrekt affaldshåndtering.",
  },
  {
    id: "10",
    title: "Transport ved end-of-life",
    body: "De udtjente elementer transporteres til genbrugsfaciliteter eller behandlingsanlæg.",
  },
  {
    id: "11",
    title: "Genanvendelse af udtjente produkter",
    body: "Materialerne nedbrydes og genindvindes, så de kan genbruges i nye produkter og indgå i en cirkulær materialestrøm.",
  },
];

const CircularTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const anglePerStep = 360 / steps.length;

  const getPositionStyle = (index, radiusPercent) => {
    const angle = (2 * Math.PI * index) / steps.length;
    const x = 50 + radiusPercent * Math.cos(angle);
    const y = 50 + radiusPercent * Math.sin(angle);

    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: "translate(-50%, -50%)",
    };
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const activeStep = steps[activeIndex];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      < Sektionsoverskrift titel="Materiale cyklus"/>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
        {/* CIRKEL */}
        <div className="flex items-center justify-center md:flex-1">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Cirkellinje */}
            <div className="absolute inset-8 rounded-full border border-gray-300" />

            {/* Wrapper der roteres */}
            <div
              className="relative w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `rotate(${-activeIndex * anglePerStep}deg)`,
              }}
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;

                const dotStyle = getPositionStyle(index, 42);
                const labelBase = getPositionStyle(index, 50);

                return (
                  <React.Fragment key={step.id}>
                    {/* Prik */}
                    <span
                      className={`absolute w-2.5 h-2.5 rounded-full ${
                        isActive ? "bg-black" : "bg-gray-400"
                      }`}
                      style={dotStyle}
                    />

                    {/* Tal – MODROTÉR for at holde horisontal orientering */}
                    <span
                      className={`absolute tracking-wide ${
                        isActive
                          ? "text-black font-semibold text-lg md:text-3xl"
                          : "text-gray-300 text-base md:text-2xl"
                      }`}
                      style={{
                        ...labelBase,
                        transform: `${labelBase.transform} rotate(${
                          activeIndex * anglePerStep
                        }deg)`,
                      }}
                    >
                      {step.id}
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* TEKSTOMRÅDE */}
        <div className="w-full md:flex-1 md:max-w-xl flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl md:text-5xl font-semibold">
                {activeStep.id}
              </span>
              <h3 className="font-semibold text-base md:text-3xl">
                {activeStep.title}
              </h3>
            </div>

            <p className="text-sm md:text-xl leading-relaxed text-gray-700">
              {activeStep.body}
            </p>
          </div>

          <div className="flex gap-4 mt-2">
            <button
              onClick={goToPrev}
              className="bg-(--primary-button) font-bold w-fit h-fit px-8 py-1 hover:bg-(--primary-hover) hover:text-white rounded-md cursor-pointer"
            >
              Forrige
            </button>
            <button
              onClick={goToNext}
              className="bg-(--primary-button) font-bold w-fit h-fit px-8 py-1 hover:bg-(--primary-hover) hover:text-white rounded-md cursor-pointer"
            >
              Næste
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularTimeline;
