export default function Cementliste ({
    tal1 = "1",
    tekst1 = "Vi skaber en forskønnelse af byrummet ved at omdanne byggebranchens affald til bæredygtige byrumelementer.",
    tal2 = "2",
    tekst2 = "Integrationen af bænke og cykelstativer i ét multifunktionelt møbel skaber et æstetisk og praktisk byrumselement.",
    tal3 = "3",
    tekst3 = "Ved at bruge upcyclet beton hjælper vi virksomheder med at styrke deres grønne profil og den cirkulære økonomi.",
    gridCols = "grid-cols-[1fr_5fr]"
}) {

  return (
    <div className='grid grid-cols-[1fr_2fr] w-(--content-size) m-auto items-center'>
      <img className="pr-8" src="./sektionslogo.png" alt="logo"/>

      <article className="grid grid-rows-3 h-full divide-y border-black border-l [&_div]:py-4 [&_div]:px-4 [&_p]:text-xl [&_p]:font-medium [&_h1]:text-8xl [&_h1]:text-center [&_h1]:font-(--font-weight)">

        <div className={`grid ${gridCols} items-center justify-center`}>
          {tal1 && <h1>{tal1}</h1>}
          <p className="col-start-2">{tekst1}</p>
        </div>

        <div className={`grid ${gridCols} items-center justify-center`}>
          {tal2 && <h1>{tal2}</h1>}
          <p className="col-start-2">{tekst2}</p>
        </div>

        <div className={`grid ${gridCols} items-center justify-center`}>
          {tal3 && <h1>{tal3}</h1>}
          <p className="col-start-2">{tekst3}</p>
        </div>

      </article>
    </div>
  );
}
