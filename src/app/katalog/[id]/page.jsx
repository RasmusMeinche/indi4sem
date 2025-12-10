import { getDataProdukt } from "@/src/lib/fetching";
import ProduktClient from "../../components/ProduktClient";

export default async function SingleProdukt(props) {
  const params = await props.params;
  const produktData = await getDataProdukt(params.id);
  const pData = produktData[0];

  return <ProduktClient pData={pData} />;
}