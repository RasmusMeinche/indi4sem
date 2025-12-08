import KontaktForm from "../components/kontaktForm";

export default function KontaktSektion() {
  return (
    <section
      className="
        relative
        bg-[url('/cementsektion.jpg')]
        bg-cover bg-center
        py-(--content-padding)
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Indhold ovenpå overlay */}
      <div className="relative z-10 max-w-md mx-auto">
        <KontaktForm />
      </div>
    </section>
  );
}
