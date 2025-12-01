import { getData } from '../lib/fetching'
import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Glasscard from './components/glasscard'

export default async function Home() {
  const data = await getData();

  return (
  <>
  <Navbar />
  <Glasscard />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}