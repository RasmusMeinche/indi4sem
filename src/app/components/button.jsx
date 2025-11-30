export default function button({ navn }) {
    return (
        <div className="w-full">
            <span className="bg-[#D9A64F] font-bold w-30 h-2 px-10 py-2 m-auto hover:bg-[#96886E] rounded-sm cursor-pointer">{navn}</span>
        </div>
    )
}