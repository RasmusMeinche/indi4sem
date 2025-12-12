export default function HeroSection() {
  return (
    <section className="bg-[url('/optimeret_hero_bg.png')] bg-cover bg-center w-full p-12 sm:p-(--content-padding) sm:h-[90vh] relative flex items-center justify-center">
      <img
        className="w-full h-full object-contain"
        src="/k-logo.svg"
        alt="konkret logo"
      />
    </section>
  );
}
