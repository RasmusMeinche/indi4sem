import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Katalog from './sektioner/katalog'
import Branchecard from './components/byggebranchecard'
import ProjektCard from './components/projektcards'
import Cementsektion from './sektioner/cementliste'
import Cementtal from './sektioner/cementtal'

export default async function Home() {

  return (
  <>
  <Navbar />
  <Branchecard />
  < Cementsektion />
  <Katalog />
  <ProjektCard />
  < Cementtal />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}
