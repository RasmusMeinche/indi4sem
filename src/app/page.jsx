import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Katalog from './sektioner/katalog'
import Branchecard from './components/byggebranchecard'
import ProjektCard from './components/projektcards'
import Cementliste from './components/cementliste'

export default async function Home() {

  return (
  <>
  <Navbar />
  <Branchecard />
  <Katalog />
  <ProjektCard />
  < Cementliste />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}