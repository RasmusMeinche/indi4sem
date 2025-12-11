import Sektionsoverskrift from "../components/sektionsoverskrift"

export default function maalsaetning () {
    return (
        <>
        <section className="
                bg-[url('/cementsektion.jpg')]
                bg-cover bg-center relative 
                before:content-[''] 
                before:absolute 
                before:inset-0 
                before:bg-white/80
                py-(--content-padding)
                ">
                <div className="relative z-2 md:w-(--content-size) m-auto">
                    < Sektionsoverskrift titel="Målsætning"/>
                    <div className="grid md:grid-cols-2 md:border-black md:border-b [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-3xl [&_p]:font-medium [&_p]:text-xl [&_div]:p-8 text-center w-full h-fit">
                        <div className="w-full h-full md:border-black md:border-r grid grid-rows-[1fr_3fr]">
                            <h1>Vision</h1>
                            <p>At skabe en grønnere fremtid gennem innovative løsninger, hvor afflad fra byggebranchen forvandles til funktionelle og inspirerende rum. Vi stræber efter at fremme cirkulær økonomi og bæredygtighed som grundstenene i vores byrumsdesign.</p>
                        </div>
                        <div className="w-full h-full grid grid-rows-[1fr_3fr]">
                            <h1>Mission</h1>
                            <p>Vi skaber en forskønnelse af byrummet ved at omdanne byggebranchens affald til bæredygtige byrumselementer. Gennem cirkulær økonomi reducerer vi affald og designer innovative produkter, der inspirerer kommuner, bygherrer og institutioner til at bidrage til en grønnere hverdag.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}