import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <section className="w-full h-fit border-gray-200 border-b">
            <div className="
                flex items-center px-8 py-4 justify-between max-w-[1200px]

                /* padding til alle børn undtagen det første */
                [&>*:not(:first-child)]:px-4
                [&>*:not(:first-child)]:py-1
                [&>*:not(:first-child)]:text-2xl

                /* Hover-styles */
                [&>*:not(:first-child):hover]:text-white
                [&>*:not(:first-child):hover]:bg-black
                [&>*:not(:first-child):hover]:rounded-md
            ">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={45}
                        height={45}
                    />
                </Link>
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
        </section>
    )
}
