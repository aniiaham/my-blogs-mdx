import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import StateManagementImg from "@/public/state-management.jpg";

const posts = [
  {
    slug: "/blog/state-manager",
    title: "React Query as State Manager",
    description:
      "A comprehensive guide to using React Query as your application's state management solution. Translated from Russian.",
    image: StateManagementImg,
    category: "Translation",
    date: "2024",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] px-6 md:px-8 max-w-4xl mx-auto">
      <section className="py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Translated <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Making open-source content accessible to Russian-speaking developers.
          Quality translations of the best technical articles.
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug} className="group block">
              <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-72 shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-base font-medium text-primary">
                      Read article
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            More translations coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
