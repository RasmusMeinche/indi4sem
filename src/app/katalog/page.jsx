import Herosection from "../sektioner/herosection";
import Katalogcard from "../components/katalogcard";
import Sektionsoverskrift from "../components/sektionsoverskrift";

export default async function Katalog() {
  return (
    <>
      <Herosection
        bgUrl="/katalog_hero.webp"
        height="h-[60vh]"
      />
      <Katalogcard />
    </>
  );
}
