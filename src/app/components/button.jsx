export default function button({ navn }) {
    return (
        <div className="w-full flex justify-center">
            <span className="bg-(--primary-button) font-bold w-fit h-fit px-8 py-1 m-auto hover:bg-(--primary-hover) hover:text-white rounded-md cursor-pointer">{navn}</span>
        </div>
    )
}