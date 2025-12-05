export default function Sektionsoverskrift ( {titel} ) {
    return (
        <>
        <div className='w-full flex '>
            <h1 className='m-auto text-5xl font-(--font-weight) pb-12'>{titel}</h1>
        </div>
        </>
    )
}