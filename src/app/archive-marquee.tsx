"use client";

import Marquee from "react-fast-marquee";

export default function ArchiveMarquee() {
  return (
    <Marquee autoFill speed={50} gradient={false}>
      <span className="pr-4">ALL THE CITIES BURNED&nbsp;&nbsp; ‡</span>
    </Marquee>
  );
}
