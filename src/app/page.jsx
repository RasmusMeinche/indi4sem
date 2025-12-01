import { getData } from '../lib/fetching'
import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Katalog from './sektioner/katalog'

export default async function Home() {
  const data = await getData();

  return (
  <>
  <Navbar />
  <Katalog />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}