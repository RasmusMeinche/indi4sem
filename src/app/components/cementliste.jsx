export default function Cementliste ( {tal} ) {
    return (
        <>
        <div className='grid grid-cols-[1fr_2fr] w-(--content-size) m-auto items-center'>
            <img className="pr-8" src="./sektionslogo.png" alt="logo til sektionen"/>
            <article className="grid grid-rows-3 divide-y border-black border-l [&_div]:py-4 [&_div]:px-4 [&_p]:text-xl [&_p]:font-medium [&_h1]:text-8xl [&_h1]:pl-8 [&_h1]:font-(--font-weight)">
                <div className="grid grid-cols-[1fr_5fr] items-center">
                    <h1>1{tal}</h1>
                    <p>Vi skaber en forskønnelse af byrummet ved at omdanne byggebranchens affald til bæredygtige byrumelementer. </p>
                </div>
                <div className="grid grid-cols-[1fr_5fr] items-center">
                    <h1>2{tal}</h1>
                    <p>Integrationen af bænke og cykelstativer i ét multifunktionelt møbel skaber et  æstetisk og praktisk byrumselement, der kan tilpasses mange byplaner.</p>
                </div>
                <div className="grid grid-cols-[1fr_5fr] items-center">
                    <h1>3{tal}</h1>
                    <p>Ved at bruge upcyclet beton hjælper vi virksomheder med at styrke deres  grønne profil og bidrage til den cirkulære økonomi, hvilket tiltrækker  miljøbevidste kunder.</p>
                </div>
            </article>
            </div>
        </>
    )
}