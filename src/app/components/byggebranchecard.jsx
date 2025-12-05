import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "./sektionsoverskrift"

export default async function Branchecard () {
    return (
    <>
    <div className="w-(--content-size) py-(--content-padding) m-auto">
        < Sektionsoverskrift titel="Udfordringer i byggebranchen"/>
        <div className="grid grid-cols-3 justify-between gap-8">
        <Glasscard
        width="full"
        tekst="Byggeriet står for 35 procent af al affald, og sammen med produktionen af  byggematerialer udgør det 10-15 procent af Danmarks CO2-udledning.
        ​
        - Bolius videnscenter, Vi skal genbruge mere i byggeriet – for klimaets skyld"
        textSize="text-base"
        />
        <Glasscard
        width="full"
        tekst="Spild af materialer på byggepladser skal undgås. Branchen estimerer, at  minimum 10 % af alle nye materialer kasseres, så der er stort, oplagt  potentiale i at reducere materialespild på byggepladser.
    ​
    - Teknologisk institut, Aarsleff og Stark WBDK projekt materialespilds rapport"
        textSize="text-base"
        />
        <Glasscard 
        width="full"
        tekst="Bygge- og anlægsbranchen producerede 15 mio. ton affald i 2022. To tredjedele  af branchens affald var jordaffald fra anlæg, fx af nye metrolinjer.  Mængden af jordaffald er tæt på tredoblet siden 2011, og mængden af  byggeaffald er steget med 61 pct. i samme periode.
    ​
    - Danmarks Statistik Affaldsregnskab 2022"
        textSize="text-base"
        />
        </div>
    </div>
    </>
    )
}