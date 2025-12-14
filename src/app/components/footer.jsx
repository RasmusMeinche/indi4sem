import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

export default function footer() {
  return (
    <>
      <section className="w-full py-12 px-6 md:px-12 bg-black text-white">
        <div className="w-(--content-size) mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col pl-[5px] gap-6">
            <Image
              src="/logo_hvid_opt.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-30 md:w-50 h-auto"
            />
            <p className="text-xl leading-relaxed">
              KONKRET I/S | CVR: 45525260 <br /> Prinsesse Charlottes Gade 38,
              2200 København N
            </p>
          </div>
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col text-xl underline gap-1 pl-[5px]">
              <a href="#">Kontakt os</a>
              <a href="#">Privatlivspolitik</a>
            </div>
            <div className="flex gap-6 items-start">
              <a
                href="https://www.instagram.com/konkretgc/"
                target="blank"
                aria-label="Instagram"
              >
                <CiInstagram size={50} />
              </a>
              <a
                href="https://www.linkedin.com/company/konkretgc/"
                target="blank"
                aria-label="LinkedIn"
              >
                <CiLinkedin size={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
