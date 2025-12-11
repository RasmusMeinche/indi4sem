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
                <div className="relative z-2 grid md:grid-cols-[2fr_1fr] w-(--content-size) items-center m-auto">
                    <div>
                        
                        <h1 className='text-2xl text-center mb-4 md:text-left md:mb-0 md:text-6xl font-(--font-weight) text-balance'>Hvordan bidrager vi til en grønnere verden</h1>
                    </div>
                    {taellerData.map((item) => (
                        <div className='text-4xl text-center md:text-left md:[&_h1]:text-6xl [&_h1]:font-(--font-weight) [&_p]:font-medium [&_p]:text-lg grid gap-8' key={item.id}>
                            <div>
                                <h1>{item.genanvendelsesgrad}</h1>
                                <p>{item.genanvendelsesgradtekst}</p>
                            </div>
                            <hr />
                            <div>
                            <h1>{item.aftryk}</h1>
                                <p>{item.aftryktekst}</p>
                            </div>
                            <hr />
                            <div>
                                <h1>{item.betonaffald}</h1>
                                <p>{item.betonaffaldtekst}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}