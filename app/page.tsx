import Image from "next/image";
import { NameTransition } from "./name";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import StateManagementImg from "@/public/state-management.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <section className="mx-auto container min-h-svh flex flex-col items-center">
      <div className="my-14 flex flex-col gap-8">
        <div>
          <Card>
            <CardContent className="flex flex-row md:max-w-3xl items-center md:gap-4 justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/101609705?v=4"
                alt="profile photo"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="md:h-64 md:w-64 h-28 w-28 rounded-full border-[0.3rem] border-white object-cover shadow-xl m-8"
              />
              <div className="flex flex-col md:gap-4 gap-2">
                <CardTitle className=" font-mono">
                  <Link
                    href={"https://aniia.dev/"}
                    target="_blank"
                    className="md:flex hidden"
                  >
                    <NameTransition />
                  </Link>
                  <h3 className="font-mono md:hidden text-start flex justify-start w-full font-semibold text-sm ml-0 mt-8">
                    Hi, I&apos;m Aniia Hamilton
                  </h3>
                </CardTitle>

                <CardDescription className="font-mono text-sm">
                  Frontend Web Developer who ❤️ creating modern, responsive
                  websites that function smoothly. My stack - TypeScript, React,
                  Next.js, Node.js, and Tailwind CSS.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="md:max-w-3xl flex flex-col justify-center ">
            <CardHeader>
              <CardTitle className="text-center text-xl uppercase font-semibold font-mono">
                Translated Blogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full flex flex-row justify-center my-24">
                <div className="flex flex-row justify-start w-full">
                  <Link
                    href={"/n/state-manager"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "py-0 text-sm sm:text-base flex flex-col font-medium hover:no-underline "
                    )}
                  >
                    <Image
                      src={StateManagementImg}
                      alt="state management image"
                      className="h-58 w-64 rounded"
                    />
                    <p className="font-mono text-sm">
                      React Query как State Manager
                    </p>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
