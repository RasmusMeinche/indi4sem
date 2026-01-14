export default function Button({ knapTekst }) {
  return (
    <div className="w-full flex justify-center drop-shadow-xl">
      <button className="bg-(--primary-button) font-semibold sm:font-bold w-fit h-fit px-4 sm:px-7 py-1 m-auto text-md sm:text-2xl hover:bg-(--primary-hover) hover:text-white rounded-full cursor-pointer">
        {knapTekst}
      </button>
    </div>
  );
}
