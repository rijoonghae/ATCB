import Image from "next/image";
import ArchiveMarquee from "./archive-marquee";
import Navbar from "./navbar";
import FlipCard from "./flipCard";
import TextAnimation from "@/components/ui/scroll-text";
import { DiscoverButton } from "@/components/block/discover-button";
import witness from "../../assets/1-the-witness.webp";
import abstract from "../../assets/2-the-abstract.webp";
import ignorant from "../../assets/3-the-ignorant.webp";
import messenger from "../../assets/4-the-messenger.webp";

const rows = [
  [
    { tag: "#1 HEIS", title: "The Witness", img: witness, text:  "They saw it happen. They remember every detail. But when it mattered, they had nothing to say."},
    { tag: "#2 DUO", title: "The Abstract", img: abstract, text: "They turned everything into ideas. Much easier to handle people once you’ve removed the actual people." },
    { tag: "#3 TREIS", title:"The Ignorant", img: ignorant, text: "These people are the worst. They know enough to have an opinion, but never enough to speak up." },
  ],
  [
    { tag: "#4 TETTARES", title: "The Messenger", img: messenger, text: "They pass the story on, but never quite as they found it. A detail removed. A name forgotten." },
    { tag: "#5 PENTE", title: "The Becoming", img: "becoming.png", text: "cillum est cupidatat id irure qui proident x proident cupidatat ea esse" },
    { tag: "#6 EXI", title: "The Remaining", img: "remaining.png", text: "Everyone else moved on. They stayed not always by choice. There was still a life to live." },
  ],
];

const contactLinks = [
  { label: "Github", href: "https://www.github.com/" },
  { label: "Google", href: "https://www.google.com/" },
  { label: "Startpage", href: "https://www.startpage.com/" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-blue font-mono text-black">
      <section className="hero relative h-275 overflow-hidden bg-blue">
        <Image src="/img/main-background.avif" alt="" fill preload sizes="100vw" className="scale-[1.1] object-cover bg-blue opacity-80" />
        {/* // FADE: atas dan bawah layer Hero → Showcase, tanpa blur samping */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[82.27%] h-149 bg-[linear-gradient(to_bottom,transparent_0%,#272098_18%,#272098_82%,transparent_100%)]" />
        <Navbar />
        <h1 className="absolute left-[max(20px,calc(50%-588px))] top-92 font-serif text-[84px] font-bold italic leading-17.25 tracking-tighter text-[#FFD900]">
          all the<br />cities burned
        </h1>
      </section>

      <section className="showcase mx-auto flex min-h-187 max-w-295.5 flex-col items-center justify-center px-5 pb-8" aria-labelledby="archive-heading">
        <h2 id="archive-heading" className="my-20 mb-15 shrink-0 text-center font-serif text-[33.18px] font-medium leading-8.75 tracking-tighter text-white">
          <TextAnimation as="span" text="A PERSONAL ARCHIVE" direction="up" viewport={{ once: true, amount: 0.2 }} classname="text-white" />
          <br />
          <TextAnimation as="span" text="OF WORK, THOUGHTS," direction="up" viewport={{ once: true, amount: 0.2 }} classname="text-white" />
          <br />
          <TextAnimation as="span" text="AND OBSERVATIONS" direction="up" viewport={{ once: true, amount: 0.2 }} classname="text-white" />
        </h2>
        <div className="relative isolate mb-[3.5 aspect-813/588 w-full max-w-203 shrink-0">
          <div aria-hidden="true" className="absolute inset-0 -z-10 translate-y-3.5 rounded-[5px] border-[3px] border-white bg-cream" />
          <video autoPlay loop muted playsInline disablePictureInPicture disableRemotePlayback preload="auto" className="pointer-events-none h-full w-full rounded-[5px] border-2 border-cream object-cover" aria-label="Animated All the Cities Burned artwork">
            <source src="/img/animated-atcb-3-720p.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <div className="relative  my-15 mt-45 z-10 overflow-hidden whitespace-nowrap bg-blue py-2.5 text-center font-handjet text-[45px] leading-11.25 tracking-tighter text-cream">
        <ArchiveMarquee />
      </div>

      <section id="gallery" aria-label="The archive" className="gallery relative mt-6 min-h-[2832px] rounded-[10px] bg-cream px-5 pb-15 pt-25.5">
        <div className="mx-auto max-w-295.5">
          <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-4">
            <Image src="/img/bdfm.png" alt="ATCB Pixel" width={75} height={72} />
            <div className="w-full max-w-146">
              <h2 className="w-full max-w-68.5 font-serif text-[39.81px] font-bold leading-8 tracking-tighter md:text-center">
                THE CAUSES.
              </h2>
              <p className="mt-5.5 max-w-140 text-[19.2px] font-light leading-5.5 tracking-tighter md:ml-6">
                These traits take shape around us—in what people do, what they accept, and what they leave unanswered. Each gives All the Cities Burned a reason to exist.
              </p>
            </div>
          </header>
          <hr className="mt-14.75 border-t-2 border-dashed border-black" />

          {rows.map((row, i) => (
            <div key={i} className="mt-16 grid grid-cols-1 gap-x-15.5 gap-y-16 md:grid-cols-3">
              {row.map((c) => (
                <article key={c.tag}>
                  <p className="text-[12px]">{c.tag}</p>
                  <h3 className="mt-4 font-serif text-[33px] font-semibold leading-5.5 tracking-tighter">{c.title}</h3>
                  {"text" in c && (
                    <p className="mt-5 min-h-16.5 text-[16px] font-light leading-5.5 tracking-tighter">{c.text}</p>
                  )}
                  <Image
                    loading="eager"
                    src={typeof c.img === "string" ? `/img/${c.img}` : c.img}
                    alt={c.title}
                    width={350}
                    height={350}
                    sizes="(max-width: 767px) 90vw, 350px"
                    className="mt-8 aspect-square w-full max-w-87.5 rounded-[10px] bg-blue object-cover"
                  />
                </article>
              ))}
            </div>
          ))}

          <p className="ml-11.25 mt-34 text-[16px] font-light italic leading-5.5 tracking-tighter">
            THE AGENDA
          </p>


          <div className="mt-50.25 grid max-w-280.75 items-start gap-x-17.5 gap-y-10 md:grid-cols-[510fr_543fr]">
            <div className="relative aspect-510/721 w-full">
              <FlipCard
                width={510}
                height={72}
                radius={50}
                background="#272098"
                color="#FFFBE3"
                shadow={false}
                glare
                glareOpacity={0.22}
                ariaLabel="Flip for the forest, for the animals, and for the people"
                className="h-full! w-full!"
                front={
                  <Image
                    loading="eager"
                    src="/img/for-the-people.webp"
                    alt="A hand raised, wrapped in red and blue, for the forest, for the animals, and for the people"
                    width={510}
                    height={721}

                    sizes="(max-width: 767px) 90vw, 510px"
                    className="h-full w-full object-cover"
                  />
                }
                back={
                  <div className="relative h-full w-full">
                    <Image
                      src="/img/for-the-people.webp"
                      alt=""
                      width={510}
                      height={721}
                      sizes="(max-width: 767px) 90vw, 510px"
                      className="h-full w-full -scale-x-100 object-cover grayscale blur-sm"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-blue/55" />
                    <div className="absolute inset-0 flex flex-col justify-end px-7 py-5 font-light h-20px] leading-13 tracking-tighter">
                      <h1>All the cities burned</h1>
                      <p>Luthfi Zulfan, October 2026</p>
                    </div>
                  </div>
                }
              />

            </div>
            <div>
              <h3 className="mx-5 font-serif text-[55px] font-normal leading-14.5 tracking-[-0.08em]">
                <TextAnimation as="span" text="FOR THE FOREST," direction="up" viewport={{ once: true, amount: 1 }} classname="text-black" />
                <br />
                <TextAnimation as="span" text="FOR THE ANIMALS," direction="up" viewport={{ once: true, amount: 1 }} classname="text-black" />
                <br />
                <TextAnimation as="span" text="AND FOR THE PEOPLE." direction="up" viewport={{ once: true, amount: 1 }} classname="text-black" />
              </h3>
              <p className="mx-5 mt-11.25 text-justify text-[16px] font-light leading-5.5 tracking-tighter">
                in October 2026, Minim quis voluptate sunt ullamco tempor et ea excepteur id. Magna Lorem eiusmod sit mollit consectetur incididunt. Consequat officia fugiat sint enim occaecat in eiusmod dolor sunt dolor ullamco mollit reprehenderit. Eu aute quis et nisi incididunt culpa ex labore aliquip fugiat nostrud cillum. Nisi elit ut qui culpa elit Lorem sit sint non in irure labore ut id. Dolore esse labore ut laboris in consectetur proident veniam ad deserunt velit mollit officia mollit. Amet magna eu ea.
                <br />
                <br />
                Aliquip ipsum commodo Lorem do officia fugiat qui aute sit ullamco amet dolor. Aliquip exercitation culpa ullamco excepteur est. Id occaecat laborum eiusmod cillum veniam aute nostrud quis occaecat exercitation enim ipsum. In minim sint consectetur pariatur aliqua irure aliqua nisi consectetur sit adipisicing aliq minim adu sunt via terra velit mollit magna.
                <br />
                <br />
                #jagaindonesia
              </p>
            </div>
          </div>

          <div className="mx-5 mt-38.25 flex items-center gap-8.75">
            <hr className="flex-1 border-t border-black" />
            <p className="whitespace-nowrap text-[16px] font-medium leading-5.5 tracking-tighter">
              confidential ‡ all the cities burned
            </p>
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Contact" className="relative bg-blue py-30 md:min-h-213.5 md:pt-50">
        <div className="relative z-20 flex flex-col items-center gap-5">
          {contactLinks.map((c) => (
            <DiscoverButton
              key={c.href}
              href={c.href}
              label={c.label}
              newTab
              className="custom-discover-button w-86 max-w-[90vw]"
            />
          ))}
        </div>
      </section>

      <h2 id="archive-heading" className="my-20 mb-15 shrink-0 text-center font-serif text-[33.18px] font-medium leading-8.75 tracking-tighter text-white">
        <TextAnimation as="span" text="SOMETHING" direction="up" viewport={{ once: true, amount: 0.5 }} classname="text-white" />
        <TextAnimation as="span" text="Beautiful" direction="up" viewport={{ once: true, amount: 0.5 }} classname="text-[#FFD900] italic lowercase font-light" />
        <br />
        <TextAnimation as="span" text="IS GOING TO HAPPEN" direction="up" viewport={{ once: true, amount: 0.5 }} classname="text-white" />
        <br />
      </h2>

      <footer id="about" className="relative h-270">
        <Image loading="eager" src="/img/footer-bg.png" alt="" fill sizes="100vw" className="object-cover" />
        {/* BLUR: tepi atas footer, sesuai node Figma 4464:3 */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-22.5 h-49.75 bg-[linear-gradient(to_bottom,transparent_20%,#272098_25%,#272098_55%,transparent_100%)]" />
        <div className="absolute bottom-11.25 left-12.5 text-white">
          <Image src="/img/sticker.png" alt="" width={74} height={74} />
          <p className="mt-0 whitespace-pre-line text-[13.33px] font-light leading-4.75 tracking-tighter">
            {"ALL THE CITIES BURNED\nSTAND WITH PALESTINE · 2026"}
          </p>
        </div>
      </footer>
    </main>
  );
}
