import { getDataAlleProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift"
import Link from "next/link";

export default async function Katalog() {

    const produkterData = await getDataAlleProdukter();

  return (
    <>
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center w-full h-fit items-center py-(--content-padding)">
    < Sektionsoverskrift titel="Katalog"/>
      {produkterData.map((p) => (
    <Link key={p.id} href={`/katalog/${p.id}`}>
        <Glasscard
          key={p.id}
          overskrift={p.overskrift}
          img={p.hovedimg}
          tekst={p.korttekst}
        />
      </Link>
      ))
      }
      </section>
    </>
    
  );
}