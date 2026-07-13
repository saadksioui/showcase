import { navigation, profile, socialLinks } from "@/data/portfolio";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import ContributionGraph from "./_components/ContributionGraph";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 min-h-screen bg-transparent text-foreground">
      <NavBar />
      <Hero/>
    </div>
  );
};

export default Home;