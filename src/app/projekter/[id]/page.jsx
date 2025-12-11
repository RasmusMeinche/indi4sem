import { getDataArtikel } from "@/src/lib/fetching";

export default async function SingleProjekt(props) {
    const params = await props.params;
    const projektData = await getDataArtikel(params.id);
    const data = projektData[0];

 return (
    <section className="w-(--content-size) py-(--content-padding) m-auto sm:[&>div]:p-10">
        <div className="glass-card flex flex-col items-center md:w-4/5 m-auto">
            <img
                className="object-cover xl:h-[500px] w-full rounded-lg"
                src={data.img}
                alt="Sektions billede"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-(--font-weight) mt-4 md:mt-12">
                {data.overskrift}
            </h1>
            <div className="my-2 lg:my-12 [&>p:not(:last-child)]:mt-4">
            {data.broedtekst.map((afsnit, index) => (
                <p key={index} className="text-sm sm:text-lg font-medium">
                    {afsnit}
                </p>
            ))}
            </div>
        </div>
    </section>
);
}