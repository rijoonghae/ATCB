"use client";

import Marquee from "react-fast-marquee";

export default function ArchiveMarquee() {
  return (
    <Marquee autoFill speed={65} gradient={false} gradientColor="#FFD900">
      <span className="pr-3.5">ALL THE CITIES BURNED&nbsp;&nbsp; ‡</span>
    </Marquee>
  );
}
