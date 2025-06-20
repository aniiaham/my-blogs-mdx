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
            <CardContent className="flex flex-row max-w-3xl items-center gap-4 justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/101609705?v=4"
                alt="profile photo"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-64 w-64 rounded-full border-[0.3rem] border-white object-cover shadow-xl m-8"
              />
              <div className="flex flex-col gap-4">
                <CardTitle className="text-start font-mono">
                  <Link href={"https://aniia.dev/"} target="_blank">
                    <NameTransition />
                  </Link>
                </CardTitle>
                <CardDescription className="font-serif">
                  Frontend Web Developer who ❤️ creating modern, responsive
                  websites that function smoothly. My stack - JavaScript,
                  TypeScript, React, Next.js, Node.js, and Tailwind CSS.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="max-w-3xl w-full flex flex-col justify-center ">
            <CardHeader>
              <CardTitle className="text-start text-xl font-medium font-serif">
                Translated Blogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full flex flex-row justify-center my-32">
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
                      className="h-58 w-64 rounded"
                    />
                    <p className="text-lg font-medium">
                      ​ ​React Query как State Manager
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
