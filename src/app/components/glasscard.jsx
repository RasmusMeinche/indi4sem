export default function Glass({ overskrift, tekst, pris }) {
  return (
    <article className="w-full h-(-) mt-10">
      <div className="glass-card w-1/3 flex justify-center">
        <div>
            <h1 className="text-(--)">{overskrift}</h1>
            <p>{tekst}</p>
            <p>{pris}</p>
        </div>
      </div>
    </article>
  );
}