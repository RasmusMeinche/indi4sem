import KontaktForm from "../components/kontaktForm";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

export default function KontaktSektion() {
  return (
    <section
      className="
        relative
        bg-[url('/cementsektion.webp')]
        bg-cover bg-center
        py-(--content-padding)
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Indhold ovenpå overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Venstre side. */}
          <div className="flex flex-col gap-6 [&_p]:font-medium">
            <h2 className="text-5xl font-bold">Kontakt os her:</h2>
            <p className="text-xl leading-relaxed max-w-sm">
              Er du interesseret i et af vores projekter, ønsker du at udsmykke
              en plads eller skolegård, eller gerne vil være vores nye partner i
              et af vores projekter, kan du tage kontakt til os ved hjælp af
              denne formular.
            </p>

            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3 ">
                <CiLocationOn size={24} />
                <p>Vesterbrogade 103 3, 1620 København V</p>
              </div>

              <div className="flex items-start gap-3">
                <CiPhone size={24} />
                <p>+45 30 34 35 76</p>
              </div>

              <div className="flex items-start gap-3">
                <CiMail size={24} />
                <p>konkret.gc@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Højre side. */}
          <div className="flex gap-10">
            <div className="hidden md:block w-px bg-black/50" />

            <div className="flex-1">
              <KontaktForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
