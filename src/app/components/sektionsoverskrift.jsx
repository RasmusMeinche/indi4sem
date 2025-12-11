export default function Sektionsoverskrift ( {titel} ) {
    return (
        <>
        <div className='w-full flex text-center'>
            <h1 className='m-auto text-3xl sm:text-5xl font-(--font-weight) pb-8 md:pb-12'>{titel}</h1>
        </div>
        </>
    )
}