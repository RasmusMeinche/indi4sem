import Glasscard from '../components/glasscard'
import Sektionsoverskrift from '../components/sektionsoverskrift'
import Verdensmaal from '../components/verdensmaal'
import CircularTimeline from '../components/timeline'
import Cementliste from '../components/cementliste'

export default function Ansvar () {

    const tekst1 = (
  <>
    <strong>Bæredygtighed:</strong> Vi stræber efter at minimere affald og ressourceforbrug gennem innovative løsninger, der fremmer en cirkulær økonomi
  </>
);
const tekst2 = (
  <>
    <strong>Innovation:</strong> Vi er dret af en passion for at tænke kreativt og udvikle nye idéer, der kan transformere udfordringer til bæredygtige muligheder
  </>
);
const tekst3 = (
  <>
    <strong>Målbare resultater:</strong> Vi leverer dokumenterede resultater og konsekvensanalyser
  </>
);

    return (
        <>
        <section className='py-(--content-padding) w-(--content-size) m-auto'>
            < Sektionsoverskrift titel="Dokumentation af vores ansvarlighed"/>
            <div className='flex gap-8'>
            
            <Glasscard 
            
            />
            <Glasscard 
            
            />
            </div>
        </section>
        < Verdensmaal />
        < CircularTimeline />
       <div className="
            bg-[url('/cementsektion.jpg')]
            bg-cover bg-center relative 
            before:content-[''] 
            before:absolute 
            before:inset-0 
            before:bg-white/80
            py-(--content-padding)
            ">
            <div className='z-1 relative'>
                 < Sektionsoverskrift titel="Vores værdier"/>
                < Cementliste
                gridCols = "grid-cols-[0.3fr_2fr_0.3fr]"
                tal1=''
                tal2=''
                tal3=''
                tekst1={tekst1}
                tekst2={tekst2}
                tekst3={tekst3}/>
            </div>
        </div>
        </>
    )
}