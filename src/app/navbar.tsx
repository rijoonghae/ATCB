"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed left-1/2 top-0 z-50 flex h-13.75 w-82 max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center gap-5 rounded-b-[22px] bg-cream text-[15px] font-bold tracking-tighter text-blue shadow-[0_6px_16px_rgba(39,32,152,0.35)] transition-transform duration-300",
        hidden && "-translate-y-full"
      )}
    >
      <Link href="/">
        <Image src="/img/symbol.png" loading="eager" alt="ATCB" width={26} height={25} />
      </Link>
      <a href="#contact">KULTUS</a>
      <a href="#gallery">THE ART</a>
      <a href="#about">ABOUT</a>
    </nav>
  );
}
