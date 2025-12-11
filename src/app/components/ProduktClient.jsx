"use client"

import { useState } from "react";
import Button from './button'
import Link from 'next/link'

export default function ProduktClient({ pData }) {
  const [activeImage, setActiveImage] = useState(pData.hovedimg);

  return (
    <section className="bg-[url(/jordfarvet-bg.png)] bg-cover bg-center w-full h-fit items-center py-(--content-padding)">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] m-auto glass-card w-(--content-size)">
        <div className="glass-card h-fit lg:h-full w-full lg:col-start-1">
          <img className="flex m-auto w-auto object-contain h-fit lg:h-[250px] rounded-xl" src={activeImage} alt="Produkt billede" />

          <div className="md:grid md:grid-cols-3 h-fit lg:h-full grid grid-cols-2 gap-3 justify-between mt-6 sm:mt-10">
            {pData.img.map((b, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(b)}
                className="[&>img]:w-full [&>img]:h-auto lg:[&>img]:w-40 lg:[&>img]:h-auto [&>img]:border-gray-200 [&>img]:border [&>img]:rounded-2xl [&>img]:p-2 [&>img]:cursor-pointer [&>img]:hover:bg-amber-50"
              >
                <img src={b} alt="Thumbnail" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center h-fit lg:text-left lg:col-start-2 lg:p-8 mt-8 lg:mt-0 md:mt-8">
          <h1 className="text-2xl lg:text-6xl font-(--font-weight) mb-4 flex justify-center">
            {pData.overskrift}
          </h1>
          <p className="text-lg font-medium">{pData.broedtekst}</p>
        </div>
      </div>

      <div className="glass-card flex flex-col m-auto items-center mt-10 w-(--content-size)">
        <h1 className="text-1xl sm:text-2xl text-center lg:text-4xl font-(--font-weight) mb-8">
          For yderligere henvendelser eller interesse om ARC RACK:
        </h1>
        <Link href="/kontakt">
          <Button knapTekst="Kontakt os" />
        </Link>
      </div>
    </section>
  );
}