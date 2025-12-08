import LearningThree from "./threejs/LearningThree";
import Katalog from "./katalog/page";
import Branchecard from "./components/byggebranchecard";
import ProjektCard from "./projekter/page";
import Cementsektion from "./sektioner/cementliste";
import Cementtal from "./sektioner/cementtal";

export default async function Home() {
  return (
    <>
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
