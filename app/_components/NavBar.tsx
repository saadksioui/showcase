
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground text-heading">
          saad<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition hover:text-foreground">
            About
          </a>
          <a href="#tools" className="transition hover:text-foreground">
            Tools
          </a>
          <a href="#stats" className="transition hover:text-foreground">
            Stats
          </a>
        </nav>

        <Button variant="outline" size="sm" asChild>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
      </div>
    </header>
  )
}

export default NavBar