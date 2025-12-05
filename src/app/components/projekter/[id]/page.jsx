import Glasscard from "../../glasscard";
import { getDataArtikler } from "@/src/lib/fetching";
import Sektionsoverskrift from "../../sektionsoverskrift";
import Link from "next/link";

export default async function Projekt ( {params} ) {

    const projektData = await getDataArtikler(params.id);

    return (
        <section className=" w-(--content-size) py-(--content-padding) m-auto">
            < Sektionsoverskrift titel="Projekter" />
            <div className="grid grid-cols-3 justify-between gap-8">
            {projektData.map((item) => (
                <Link key={item.id} href={`/projekter/${item.id}`}>
                    <Glasscard
                        width="full"
                        object="object-cover"
                        titleSize="text-xl"
                        imgWidth="w-full"
                        imgHeight="h-[180px]"
                        margin="my-4"
                        textWidth="w-full"

                        overskrift={item.projekt}
                        img={item.img}
                        tekst={item.korttekst}
                    />
                </Link>
            ))
        }
        </div>
        </section>
        )
}