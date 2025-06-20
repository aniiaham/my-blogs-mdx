import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StateManagementImg from "@/public/state-management.jpg";

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto my-4 w-full">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground">
            Translating Blogs for Open Source: Making Open-Source Content
            Accessible
          </p>
        </div>
      </div>
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
      <hr className="mt-8" />
    </div>
  );
}
