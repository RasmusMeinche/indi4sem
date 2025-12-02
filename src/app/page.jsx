import { getData } from "../lib/fetching";
import LearningThree from "./threejs/LearningThree";
import Navbar from "./components/navbar";
import Katalog from "./sektioner/katalog";
import Branchecard from "./components/byggebranchecard";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Navbar />
      <Branchecard />
      <Katalog />
      {/*     <LearningThree /> */}
      <div>
        <h1></h1>
      </div>
    </>
  );
}
