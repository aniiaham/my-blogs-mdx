import Image from "next/image";
import { NameTransition } from "./name";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto my-32 container flex flex-col items-center justify-center gap-4">
      <div className="text-lg font-bold font-mono">
        <Link href={"https://github.com/aniiaham"} target="_blank">
          <NameTransition />
        </Link>
      </div>
      <div className="flex flex-row w-full gap-4 justify-center items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/101609705?v=4"
          alt="profile photo"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
        />
        <p className="text-lg max-w-lg">
          <span className="font-bold">Hi, I&apos;m Aniia Hamilton</span>, a
          Frontend Web Developer who ❤️ creating modern, responsive websites
          that function smoothly. My stack - JavaScript, TypeScript, React,
          Next.js, Node.js, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
