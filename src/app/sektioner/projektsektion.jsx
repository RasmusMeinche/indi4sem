import Link from "next/link";
import Glasscard from "../components/glasscard";
import Sektionsoverskrift from "../components/sektionsoverskrift";
import { getDataAlleArtikler } from "@/src/lib/fetching";

export default async function Projektsektion() {
  const projekterData = await getDataAlleArtikler();

  return (
      <div className="grid lg:grid-cols-3 justify-between gap-8">
        {projekterData.map((item) => (
          <Link
            key={item.id}
            href={`/projekter/${item.id}`}
          >
            <Glasscard
              width="full"
              object="object-cover"
              titleSize="text-lg sm:text-xl"
              imgWidth="w-full"
              imgHeight="h-[180px]"
              margin="my-4"
              textWidth="w-full"
              overskrift={item.projekt}
              img={item.img}
              tekst={item.korttekst}
            />
          </Link>
        ))}
      </div>
  );
}
