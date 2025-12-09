import Sektionsoverskrift from "./sektionsoverskrift"

export default function Verdensmaal () {
    return (
        <section className='py-(--content-padding) bg-[url(/jordfarvet-bg.png)] bg-cover bg-center'>
                < Sektionsoverskrift titel="FN’S Verdensmål"/>
                <div className=" w-(--content-size) m-auto">
                    <div className='glass-card [&_div]:gap-8 [&_div]:flex [&_img]:w-[200px] [&_img]:h-auto [&_img]:rounded-lg font-medium text-xl grid gap-8 first:p-8'>
                        <div>
                            <img src="/icon-9.jpg" alt="FN's Verdensmål" />
                            <p>Mål 9.4 (Bæredygtig infrastruktur og industri): Vi reducerer miljøpåvirkningen fra byggeri ved at genanvende betonaffald i stedet for at producere nyt beton, hvilket sparer ressourcer og mindsker CO₂-udledningen. Vores produkt er et konkret eksempel på, hvordan byggeindustrien kan overgå til mere ressourceeffektive og miljøvenlige løsninger. Herunder vises en tabel for CO2 udledningen af vores produkt i genbrugsbeton kontra konventionelle cykelstativer.</p>
                        </div>
                        <div>
                            <img src="/icon-12.png" alt="FN's Verdensmål" />
                            <p>Mål 12.6 (Bæredygtige forretningsmodeller): Vi fremmer bæredygtig produktion ved at anvende en cirkulær økonomisk tilgang, hvor affald bliver til en værdifuld ressource. Desuden ønsker vi at inspirere virksomheder i byggebranchen til at implementere lignende genanvendelsesstrategier, hvilket kan bidrage til en bredere grøn omstilling i sektoren.</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}