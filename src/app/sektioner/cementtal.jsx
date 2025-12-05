import { getDataTaeller } from '../../lib/fetching'

export default async function Cementtal () {

    const taellerData = await getDataTaeller();

    return (
        <section>
            <div className="
                bg-[url('/cementsektion.jpg')]
                bg-cover bg-center relative 
                before:content-[''] 
                before:absolute 
                before:inset-0 
                before:bg-white/80
                py-(--content-padding)
                ">
                <div className="relative z-2 grid grid-cols-[2fr_1fr] w-(--content-size) items-center m-auto">
                    <div>
                        <h1 className='text-6xl font-(--font-weight) text-balance'>Hvordan har vi bidraget til en grønnere verden</h1>
                    </div>
                    {taellerData.map((item) => (
                        <div className='[&_h1]:text-6xl [&_h1]:font-(--font-weight) [&_p]:font-medium [&_p]:text-lg grid gap-8' key={item.id}>
                            <div>
                                <h1>{item.genanvendelsesgrad}</h1>
                                <p>Genanvendelsesgrad: I Danmark genanvendes ca. 86 % af alt nedrivningsbeton</p>
                            </div>
                            <hr />
                            <div>
                            <h1>{item.aftryk}</h1>
                                <p>Reduceret CO₂-aftryk ved brug af genbrugt beton sammenlignet med beton med jomfruelige råstoffer.</p>
                            </div>
                            <hr />
                            <div>
                                <h1>{item.betonaffald}</h1>
                                <p>Hver ton betonaffald, der genanvendes som tilslag i ny beton, erstatter ca. 1 ton affald, der ellers ville være gået til deponi</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}