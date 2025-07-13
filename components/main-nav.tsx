"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/app/AH-logo.png";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="ml-6 flex items-center space-x-2">
        <Image src={logo} alt="AH logo" height={60} />
      </Link>
      <Link
        href="/blogs"
        className={cn(
          "text-base font-medium font-mono  transitions-colors uppercase  text-black hover:text-primary hidden sm:inline-flex",
          pathname === "/blogs" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blogs
      </Link>
    </nav>
  );
}
