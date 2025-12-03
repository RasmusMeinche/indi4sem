import { getDataProdukter } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";

export default async function Katalog() {

    const produktData = await getDataProdukter();

  return (
    <>
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center w-full h-fit flex items-center py-(--content-padding)">
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