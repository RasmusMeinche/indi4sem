import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <section className="grid grid-cols-[0.6fr_2fr_0.6fr] border-gray-200 border-b">
            <div className="px-8 py-4">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={45}
                        height={45}
                    />
                </Link>

            </div>
            <div className="
                flex items-center px-8 py-4 justify-between

                *:px-4
                *:py-1
                text-2xl

                *:hover:text-white
                *:hover:bg-black
                *:hover:rounded-md
            ">
                <Link href="/ansvar">Ansvar
                </Link>
                <Link href="/projekter">Projekter
                </Link>
                <Link href="/katalog">Katalog
                </Link>
                <Link href="/partner">Partner
                </Link>
                <Link href="/omos">Om os
                </Link>
                <Link href="/kontakt">Kontakt
                </Link>
            </div>
            <div></div>
        </section>
    )
}
