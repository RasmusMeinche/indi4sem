import { getDataAlleProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift";
import Link from "next/link";

export default async function Katalogsektion() {
  const produkterData = await getDataAlleProdukter();

  return (
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center h-fit items-center py-(--content-padding)">
        < Sektionsoverskrift titel="Katalog"/>
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
          />
        </Link>
      ))}
      </div>
    </section>
  );
}
