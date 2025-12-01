import { getData } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";
import Image from "next/image";

export default async function Katalog() {

    const produktData = await getData();

  return (
    <>
    <section className="bg-[url(/jordfarvet-bg.png)] w-full h-screen">
      {produktData.map((item) => (
        <Glasscard
          key={item.id}
          overskrift={item.overskrift}
          img={item.img}
          tekst={item.broedtekst}
        />
      ))}
      </section>
    </>
    
  );
}