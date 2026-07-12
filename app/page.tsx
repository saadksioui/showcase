import Link from "next/link";
import { PortfolioSections } from "@/components/portfolio/portfolio-sections";
import { ScrollTopButton } from "@/components/portfolio/scroll-top";
import { navigation, profile, socialLinks } from "@/data/portfolio";
import NavBar from "./_components/NavBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <PortfolioSections />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 px-4 py-8 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">{profile.name}</p>
            <p>{profile.role}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link key={item.id} href={`#${item.id}`} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {profile.name}. Crafted with care and clarity.</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <ScrollTopButton />
    </div>
  );
};

export default Home