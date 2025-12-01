import Button from './button'

export default function Glass({ overskrift, tekst, pris, img }) {
  return (
      <div className="w-3/5 glass-card flex justify-center m-auto items-center">
        <div className="text-center [&>*:not(:first-child)]:text-2xl *:my-4 [&_*:last-child]:mt-4">
            <h1 className="text-4xl font-(--font-weight)">{overskrift}</h1>
            <img className='m-auto' src={img}/>
            <p className="m-auto w-4/5">{tekst}</p>
            < Button knapTekst="Læs mere"/>
            <p>{pris}</p>
        </div>
      </div>
  );
}