"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navigation, profile } from "@/data/portfolio";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="text-lg font-semibold tracking-tight text-white">
          {profile.name.split(" ")[0]}
          <span className="ml-1 text-white/60">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:text-white ${activeSection === item.id ? "text-white" : ""}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" size="sm" asChild>
          <Link href={profile.cvUrl} target="_blank" rel="noreferrer">
            Resume
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default NavBar