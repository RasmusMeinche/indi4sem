import Herosection from "../sektioner/herosection";
import Katalogsektion from "../sektioner/katalogsektion";

export default async function Katalog() {
  return (
    <>
      <Herosection
        bgUrl="/katalog_hero.png"
        height="h-[60vh]"
      />
      <Katalogsektion />
    </>
  );
}
