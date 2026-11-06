import Image from "next/image";
import { DiscoverButton } from '@/components/block/discover-button'


export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-blue px-5 text-center font-mono text-cream">
      <Image loading="eager" src="/img/symbol.png" alt="" width={52} height={50}/>
      <h1 className="font-serif text-[64px] font-bold italic leading-none tracking-tighter text-[#FFD900]">
        404 NOT FOUND
      </h1>
      <p className="max-w-100 text-[20px] font-light leading-5.5 tracking-tighter">
        You&apos;re not supposed to be here. Please out.
      </p>
      <DiscoverButton href="/" label="Back to archive" className="custom-discover-button" />
    </main>
  );
}
