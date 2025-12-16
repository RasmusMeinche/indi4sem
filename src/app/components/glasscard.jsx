import Button from "./button";

export default function Glass({
  overskrift,
  tekst,
  img,
  imgWidth = "full",
  imgHeight = "full",
  width = "w-full",
  height = "h-full",
  object = "object-cover",
  textSize = "text-xl",
  titleSize = "sm:text-4xl",
  textWidth = "w-4/5",
  cardTekstSize = "sm:text-[1rem] md:text-lg",
  textOnButton = "Læs Mere",
  gridRow = "lg:grid-rows-[minmax(5.5rem,auto)_auto_minmax(10.8rem,auto)_auto] xl:lg:grid-rows-[minmax(5.5rem,auto)_auto_minmax(8.8rem,auto)_auto]",
  lastChild = "[&_*:last-child]:mt-4 lg:[&_*:last-child]:mt-0",
  pdfUrl,
}) {
  return (
    <div className={`${width} glass-card ${height} m-auto`}>
      <div
        className={`text-center *:my-1 grid md:*:my-4 ${gridRow} ${lastChild}`}
      >
        {overskrift && (
          <h1 className={`${titleSize} font-(--font-weight) `}>{overskrift}</h1>
        )}

        {img && (
          <img
            className={`m-auto rounded-md ${imgWidth} ${imgHeight} ${object}`}
            src={img}
          />
        )}

        {tekst && (
          <p
            className={`m-auto font-medium text-xs ${cardTekstSize} ${textWidth} ${textSize}`}
          >
            {tekst}
          </p>
        )}

        {textOnButton &&
          (pdfUrl ? (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button knapTekst={textOnButton} />
            </a>
          ) : (
            <Button knapTekst={textOnButton} />
          ))}
      </div>
    </div>
  );
}
