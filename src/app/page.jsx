import { getData } from '../lib/fetching'
import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'

export default async function Home() {
  const data = await getData();

  return (
  <>
  <Navbar />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}