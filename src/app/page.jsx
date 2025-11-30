import { getData } from '../lib/fetching'
import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Button from './components/button'

export default async function Home() {
  const data = await getData();

  return (
  <>
  <Navbar />
  <Button navn="Læs mere" />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}