import Button from './button'

export default function Glass({ overskrift, tekst, pris }) {
  return (
    <article className="w-full h-2/3 mt-10">
      <div className="w-2/5 glass-card flex justify-center m-auto items-center">
        <div className="text-center [&>*:not(:first-child)]:text-2xl">
            <h1 className="text-4xl font-(--font-weight)">{overskrift}</h1>
            <p>{tekst}</p>
            <p>{tekst}</p>
            < Button
            knapTekst="Læs mere"
            />
            <p>{pris}</p>
        </div>
      </div>
    </article>
  );
}