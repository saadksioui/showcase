import { navigation, profile, socialLinks } from "@/data/portfolio";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import ContributionGraph from "./_components/ContributionGraph";
import About from "./_components/About";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-4 sm:px-6 lg:px-8 min-h-screen bg-transparent text-foreground flex flex-col gap-y-5">
      <NavBar />
      <Hero/>
      <About/>
    </div>
  );
};

export default Home;