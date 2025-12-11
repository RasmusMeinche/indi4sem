import HeroSection from "../sektioner/herosection";
import Karrusel from "../components/karrusel";
import Cementliste from "../components/cementliste";
import Sektionsoverskrift from "../components/sektionsoverskrift";

export default function Partner() {
  const tekst1 = (
    <>
      <strong>Fokus på bæredygthed:</strong> Vi prioriterer miljøløsninger i
      alle vores projekter
    </>
  );
  const tekst2 = (
    <>
      <strong>Stærke partnerskaber:</strong> Samarbejde er nøglen til vores
      innovation og udvikling
    </>
  );
  const tekst3 = (
    <>
      <strong>Målbare resultater:</strong> Vi leverer dokumenterede resultater
      og konsekvensanalyser
    </>
  );

  return (
    <>
      <HeroSection
        bgUrl="/partner_hero.webp"
        height="h-[60vh]"
      />
      <div
        className="
            bg-[url('/cementsektion.jpg')]
            bg-cover bg-center relative 
            before:content-[''] 
            before:absolute 
            before:inset-0 
            before:bg-white/80
            py-(--content-padding)
            "
      >
        <div className="z-1 relative">
          <Sektionsoverskrift titel="Fordele partnerskab" />
          <Cementliste
            gridCols="md:grid-cols-[0.3fr_2fr_0.3fr]"
            tal1=""
            tal2=""
            tal3=""
            tekst1={tekst1}
            tekst2={tekst2}
            tekst3={tekst3}
          />
        </div>
        <div></div>
      </div>
      <section className="py-(--content-padding)">
        <Karrusel />
      </section>
    </>
  );
}
