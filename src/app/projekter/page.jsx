import Glasscard from "../components/glasscard";
import { getDataAlleArtikler } from "@/src/lib/fetching";
import Sektionsoverskrift from "../components/sektionsoverskrift";
import Link from "next/link";

export default async function Projekt () {

    const projekterData = await getDataAlleArtikler();

    return (
        <section className=" w-(--content-size) py-(--content-padding) m-auto">
            < Sektionsoverskrift titel="Projekter" />
            <div className="grid grid-cols-3 justify-between gap-8">
            {projekterData.map((item) => (
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