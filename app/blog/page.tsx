import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto my-4">
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
      <hr className="mt-8" />
      <div className="flex justify-between items-center mt-4">
        <p className="text-2xl font-bold">​​React Query как State Manager</p>
        <div className="border border-gray-200 rounded hover:border-gray-400">
          <Link
            href={"/n/state-manager"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "py-0 text-sm sm:text-base font-medium hover:no-underline"
            )}
          >
            Read more <ArrowRight className="w-2 h-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
