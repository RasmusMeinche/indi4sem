import { getData } from "@/src/lib/fetching";
import Glasscard from "../components/glasscard";

export default async function Katalog() {

    const produktData = await getData();

  return (
    <>
    <section>
      {produktData.map((item) => (
        <Glasscard
          key={item.id}
          overskrift={item.overskrift}
          tekst={item.tekst}
          pris={item.pris}
        />
      ))}
      </section>
    </>
    
  );
}