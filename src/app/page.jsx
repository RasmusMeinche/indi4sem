import LearningThree from "./threejs/LearningThree";
import Katalog from "./katalog/page";
import Branchecard from "./components/byggebranchecard";
import ProjektCard from "./projekter/page";
import Cementsektion from "./sektioner/cementliste";
import Cementtal from "./sektioner/cementtal";
import Herosection from "./sektioner/herosection";

export default async function Home() {
  return (
    <>
      <Herosection
        bgUrl="/stor_logo_hero.png"
        height="h-[70vh]"
      />
      <Branchecard />
      <Cementsektion />
      <Katalog />
      <ProjektCard />
      <Cementtal />
      {/*     <LearningThree /> */}
      <div>
        <h1></h1>
      </div>
    </>
  );
}
