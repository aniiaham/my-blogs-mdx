import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StateManagementImg from "@/public/state-management.jpg";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 md:px-8 max-w-4xl mx-auto">
      <section className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="shrink-0">
            <Image
              src="https://avatars.githubusercontent.com/u/101609705?v=4"
              alt="Aniia Hamilton"
              width={160}
              height={160}
              quality={95}
              priority
              className="h-24 w-24 md:h-36 md:w-36 rounded-2xl object-cover ring-4 ring-primary/20 shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Hi, I&apos;m <span className="text-primary">Aniia</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Full-stack developer from Russia living in the US. Welcome to my
              blog, where I share translated blog posts and technical articles
              from English sources for a Russian-speaking audience ;)
            </p>
            <Link
              href="https://aniia.dev/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-5 py-2.5 hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Translated Blogs</h2>
          <Link
            href="/blogs"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link href="/blog/state-manager" className="group block">
          <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-72 shrink-0 overflow-hidden">
                <Image
                  src={StateManagementImg}
                  alt="React Query State Management"
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 p-6 flex flex-col justify-center">
                <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                  Translation
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  React Query as State Manager
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  A comprehensive guide to using React Query as your
                  application&apos;s state management solution. Translated from
                  Russian.
                </p>
              </div>
            </div>
          </article>
        </Link>
      </section>
    </main>
  );
}
