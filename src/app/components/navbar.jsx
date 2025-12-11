"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "px-4 py-1 text-2xl hover:text-white hover:bg-black hover:rounded-md";

  const links = [
    { href: "/ansvar", label: "Ansvar" },
    { href: "/projekter", label: "Projekter" },
    { href: "/katalog", label: "Katalog" },
    { href: "/partner", label: "Partner" },
    { href: "/omos", label: "Om os" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="border-b border-gray-200">
      <section className="grid grid-cols-[1fr_auto] md:grid-cols-[0.6fr_2fr_0.6fr] items-center px-4 md:px-8 py-4">
        <div className="flex items-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-between">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block" />

        {/*Mobil hamburger*/}
        <div className="flex justify-end md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
          />
        </div>
      </section>

      {/* Menuen inde i hamburger */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 items-center text-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses + " w-full"}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
