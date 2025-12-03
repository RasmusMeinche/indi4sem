import Button from './button'

export default function Glass({
  overskrift,
  tekst,
  pris,
  img,
  imgWidth = "full",
  imgHeight = "full",
  width = "w-3/5",
  height = "h-full",
  object = "object-cover",
  textSize = "text-xl",
  titleSize = "text-4xl",
  margin = "my-4",
  textWidth = "w-4/5"
}) {
  return (
    <div className={`${width} glass-card flex flex-col ${height} m-auto`}>
      <div className={`text-center flex flex-col h-full justify-between *:${margin} [&_*:last-child]:mt-4`}>

        {overskrift && (
          <h1 className={`${titleSize} font-(--font-weight)`}>
            {overskrift}
          </h1>
        )}

        {img && (
          <img className={`m-auto rounded-md ${imgWidth} ${imgHeight} ${object}`} src={img} />
        )}

        {tekst && (
          <p className={`m-auto ${textWidth} ${textSize}`}>{tekst}</p>
        )}

        {overskrift && <Button knapTekst="Læs mere" />}
        {pris && <p>{pris}</p>}
      </div>
    </div>
  );
}
