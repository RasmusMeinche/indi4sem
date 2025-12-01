import Link from "next/link"
import Image from "next/image"

export default function navbar() {
    return (
        <section className="w-full h-15">
            <div className="flex items-center px-8 py-4 justify-between max-w-[1200px]">
                <Link href="/">
                     <Image
                        src="/logo.png"
                        alt="Logo"
                        width={45}
                        height={45}
                        className=""
          />
                </Link>
                <a href="">Ansvar</a>
                <a href="">Projekter</a>
                <a href="">Katalog</a>
                <a href="">Partner</a>
                <a href="">Om os</a>
                <a href="">Kontakt</a>
            </div>
        </section>
    )
}