import { Inter } from "next/font/google";

const inter = Inter({
subsets: ["latin"],
});

export default function HeroSection( {src="/k-logo.svg", vh="sm:h-[90vh]", overskrift=""} ) {


  return (
    <section className={`bg-[url('/optimeret_hero_bg.webp')] bg-cover bg-center w-full p-12 sm:p-(--content-padding) ${vh} relative flex items-center justify-center`}>
      {src && (
      <img
        className="w-full h-full object-contain"
        src={src}
        alt="konkret logo"
      />
    )}
      {overskrift && (
     <h1 className={`${inter.className} text-[11vw] font-bold text-white text-shadow-lg/30`}>
        {overskrift}
      </h1>
    )}
    </section>
  );
}
