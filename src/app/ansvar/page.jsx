import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift";
import Verdensmaal from "../components/verdensmaal";
import CircularTimeline from "../components/timeline";
import Cementliste from "../components/cementliste";
import Herosection from "../sektioner/herosection";

export default function Ansvar() {
  const tekst1 = (
    <>
      <strong>Bæredygtighed:</strong> Vi stræber efter at minimere affald og
      ressourceforbrug gennem innovative løsninger, der fremmer en cirkulær
      økonomi
    </>
  );
  const tekst2 = (
    <>
      <strong>Innovation:</strong> Vi er dret af en passion for at tænke
      kreativt og udvikle nye idéer, der kan transformere udfordringer til
      bæredygtige muligheder
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
      <Herosection
        bgUrl="/ansvar_hero.webp"
        height="h-[60vh]"
      />
      <section className="py-(--content-padding) w-(--content-size) m-auto">
        <Sektionsoverskrift titel="Dokumentation af vores ansvarlighed" />
        <div className="grid grid-cols-2 gap-8">
          <Glasscard
            width="w-full"
            pdfUrl="https://nwldyulnmyqrldjvcumo.supabase.co/storage/v1/object/public/PDF%20-%20Regnskab/Recycon-ESG-rapport-2024.pdf"
            textOnButton="Recycon ESG Rapport - 2024"
            tekst="Som en del af vores arbejdsproces dokumenterer vi materialernes rejse og samarbejder med partnere, der deler vores fokus på bæredygtighed. Recycon står for produktionen af de genanvendte materialer og for selve støbeprocessen af Arc Racken. Her kan du åbne Recycons ESG-rapport, som beskriver deres arbejde med cirkularitet og ansvarlig materialehåndtering."
          />
          <Glasscard
            width="w-full"
            pdfUrl="https://nwldyulnmyqrldjvcumo.supabase.co/storage/v1/object/public/PDF%20-%20Regnskab/EPD%20document%20EPD-IES-0000308_003%20(S-P-00308)%20en.pdf"
            textOnButton="7 Steel EPD Rapport"
            tekst="For at sikre gennemsigtighed i vores materialevalg samarbejder vi med 7 Steel, der leverer armeringsstål med dokumenteret cirkulær og ansvarlig produktion. Deres tredjepartsverificerede EPD beskriver klimaaftryk, ressourceforbrug og genanvendelsespotentiale. Her kan du åbne 7 Steels EPD-rapport, som indgår i vores bæredygtighedsdokumentation."
          />
        </div>
      </section>
      <Verdensmaal />
      <CircularTimeline />
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
          <Sektionsoverskrift titel="Vores værdier" />
          <Cementliste
            gridCols="grid-cols-1 md:grid-cols-[0.3fr_2fr_0.3fr]"
            tal1=""
            tal2=""
            tal3=""
            tekst1={tekst1}
            tekst2={tekst2}
            tekst3={tekst3}
          />
        </div>
      </div>
    </>
  );
}
