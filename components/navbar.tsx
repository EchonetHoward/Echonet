"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Posts", href: "/#posts" },
    { name: "Socials", href: "/#socials" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav
        className={cn(
          "flex items-center gap-6 rounded-full px-6 py-2.5 transition-all duration-300",
          isScrolled
            ? "bg-white/80 shadow-sm backdrop-blur-md dark:bg-zinc-900/80 dark:border dark:border-zinc-800"
            : "bg-transparent shadow-none"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors",
              isScrolled
                ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                : "text-white/90 hover:text-white"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
