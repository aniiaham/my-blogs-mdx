import Image from "next/image";
import { NameTransition } from "./name";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import StateManagementImg from "@/public/state-management.jpg";

export default function Home() {
  return (
    <section className="mx-auto my-32 container flex flex-col items-center justify-center gap-4">
      <div className="text-lg font-bold font-mono">
        <Link href={"https://aniia.dev/"} target="_blank">
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
          Frontend Web Developer who ❤️ creating modern, responsive websites
          that function smoothly. My stack - JavaScript, TypeScript, React,
          Next.js, Node.js, and Tailwind CSS.
        </p>
      </div>
      <p className="text-xl text-muted-foreground text-start">
        Translated Blogs
      </p>
      <div className="w-full flex flex-col justify-center my-32">
        <div className="flex flex-row justify-start w-full">
          <Link
            href={"/n/state-manager"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "py-0 text-sm sm:text-base flex flex-col font-medium hover:no-underline"
            )}
          >
            <Image
              src={StateManagementImg}
              alt="state management image"
              className="h-56 w-64"
            />
            <p className="text-lg font-bold">​​React Query как State Manager</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
