import { getDataArtikel } from "@/src/lib/fetching";

export default async function SingleProjekt(props) {
    const params = await props.params;
    const projektData = await getDataArtikel(params.id);
    const data = projektData[0];

 return (
    <section className="w-(--content-size) py-(--content-padding) m-auto [&>div]:p-18">
        <div className="glass-card flex flex-col items-center">
            <img
                className="object-cover h-[500px] w-full rounded-lg"
                src={data.img}
                alt="Sektions billede"
            />
            <h1 className="text-6xl text-center font-(--font-weight) mt-12">
                {data.overskrift}
            </h1>
            <div className="my-12">
            {data.broedtekst.map((afsnit, index) => (
                <p key={index} className="text-lg mt-6 font-medium">
                    {afsnit}
                </p>
            ))}
            </div>
        </div>
    </section>
);
}