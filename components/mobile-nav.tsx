"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetTitle className="text-lg font-semibold mb-6">Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          <MobileLink onOpenChange={setOpen} href="/blogs" className="text-base font-medium hover:text-primary transition-colors">
            Blogs
          </MobileLink>
          <hr className="border-border" />
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.link.github}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.link.linkedIn}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.link.personalSite}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Personal Website
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
