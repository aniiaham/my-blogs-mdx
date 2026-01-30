import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 max-w-4xl items-center mx-auto px-6 md:px-8">
        <MainNav />
        <div className="flex flex-1 items-center justify-end gap-1">
          <nav className="flex items-center gap-1">
            <Link
              href={siteConfig.link.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "hidden sm:inline-flex text-muted-foreground hover:text-foreground"
              )}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.link.linkedIn}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "hidden sm:inline-flex text-muted-foreground hover:text-foreground"
              )}
            >
              <Icons.linkedIn className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
