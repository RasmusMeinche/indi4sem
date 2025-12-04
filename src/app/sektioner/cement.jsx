import Cementliste from '../components/cementliste'
import Button from '../components/button'
import Sektionsoverskrift from '../components/sektionsoverskrift'

export default function Cementsektion () {
    return (
        <>
        <div className="
            bg-[url('/cementsektion.jpg')]
            bg-cover bg-center relative 
            before:content-[''] 
            before:absolute 
            before:inset-0 
            before:bg-white/80
            py-(--content-padding)
            ">
            <div className="relative z-2">
                < Sektionsoverskrift titel="Hvad kan vi tilbyde"/>
                <Cementliste />
                <div className='mt-12'>
                    < Button knapTekst="Læs Mere"/>
                </div>
            </div>
        </div>
        </>
    )
}