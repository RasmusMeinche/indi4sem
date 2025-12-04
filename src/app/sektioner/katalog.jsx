import { getDataProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift"

export default async function Katalog() {

    const produktData = await getDataProdukter();

  return (
    <>
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center w-full h-fit items-center py-(--content-padding)">
    < Sektionsoverskrift titel="Katalog"/>
      {produktData.map((item) => (
        <Glasscard
          key={item.id}
          overskrift={item.overskrift}
          img={item.img}
          tekst={item.korttekst}
        />
      ))
      }
      </section>
    </>
    
  );
}