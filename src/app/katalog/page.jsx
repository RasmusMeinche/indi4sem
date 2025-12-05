import { getDataProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift"

export default async function Katalog() {

    const produktData = await getDataProdukter();

  return (
    <>
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center w-full h-fit items-center py-(--content-padding)">
    < Sektionsoverskrift titel="Katalog"/>
      <Link key={p.id} href={`/projekter/${p.id}`}>
      {produktData.map((p) => (
        <Glasscard
          key={p.id}
          overskrift={p.overskrift}
          img={p.img}
          tekst={p.korttekst}
        />
      ))
      }
      </Link>
      </section>
    </>
    
  );
}