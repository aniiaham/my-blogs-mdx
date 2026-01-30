"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/app/AH-logo.png";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="AH logo" height={40} className="h-10 w-auto" />
      </Link>
      <Link
        href="/blogs"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/blogs"
            ? "text-foreground"
            : "text-muted-foreground"
        )}
      >
        Blogs
      </Link>
    </nav>
  );
}
