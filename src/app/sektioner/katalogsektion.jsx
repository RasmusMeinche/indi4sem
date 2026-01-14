import { getDataAlleProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift";
import Link from "next/link";

export default async function Katalogsektion() {
  const produkterData = await getDataAlleProdukter();

  return (
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center h-fit py-(--content-padding)">
        < Sektionsoverskrift titel="Produkter"/>
        <div className="w-(--content-size) m-auto">
      {produkterData.map((p) => (
        <Link
          key={p.id}
          href={`/katalog/${p.id}`}
        >
          <Glasscard
            key={p.id}
            overskrift={p.overskrift}
            img={p.hovedimg}
            tekst={p.korttekst}
            width="lg:w-2/3"
            lastChild="[&_*:last-child]:mt-2 sm:[&_*:last-child]:mt-4 lg:[&_*:last-child]:mt-0"
            imgWidth = "w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </Link>
      ))}
      </div>
    </section>
  );
}
