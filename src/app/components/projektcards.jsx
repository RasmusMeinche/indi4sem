import Glasscard from "../components/glasscard";
import { getDataArtikler } from "@/src/lib/fetching";
import Sektionsoverskrift from "./sektionsoverskrift";

export default async function Projekt () {

    const projektData = await getDataArtikler();

    return (
        <section className=" w-(--content-size) py-(--content-padding) m-auto">
            < Sektionsoverskrift titel="Projekter" />
            <div className="grid grid-cols-3 justify-between gap-8">
            {projektData.map((item) => (
            <Glasscard
                width="full"
                object="object-cover"
                titleSize="text-xl"
                imgWidth="w-full"
                imgHeight="h-[180px]"
                margin="my-4"
                textWidth="w-full"

                key={item.id}
                overskrift={item.projekt}
                img={item.img}
                tekst={item.korttekst}
            />
            ))
        }
        </div>
        </section>
        )
}