import HeroSection from "../sektioner/herosection";
import KontaktSektion from "../sektioner/kontaktSektion";

export default function Kontakt() {
  return (
    <>
      <HeroSection
        bgUrl="/kontakt_herp.png"
        height="h-[60vh]"
      />
      <KontaktSektion />
    </>
  );
}
