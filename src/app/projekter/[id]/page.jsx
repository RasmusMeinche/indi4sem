import { getDataArtikel } from "@/src/lib/fetching";


export default async function SingleProjekt ( {params} ) {

    const projektData = await getDataArtikel(params.id);

    return (
        <div>
            
        </div>
    )
}