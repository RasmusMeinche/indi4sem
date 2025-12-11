import LearningThree from "./threejs/LearningThree";
import Katalogsektion from "./sektioner/katalogsektion";
import Branchecard from "./components/byggebranchecard";
import Cementsektion from "./sektioner/cementliste";
import Cementtal from "./sektioner/cementtal";
import Herosection from "./sektioner/herosection";
import Projektsektion from "./sektioner/projektsektion";
import Sektionsoverskrift from "./components/sektionsoverskrift";

export default async function Home() {
  return (
    <>
      <Herosection
        bgUrl="/stor_logo_hero.webp"
        height="h-[90vh]"
      />
      <Branchecard />
      <Cementsektion />
      <Katalogsektion />
      <div className="w-(--content-size) py-(--content-padding) m-auto">
        <Sektionsoverskrift titel="Projekter" />
        <Projektsektion />
      </div>
      <Cementtal />
      {/*     <LearningThree /> */}
    </>
  );
}
