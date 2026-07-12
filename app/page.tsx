import { navigation, profile, socialLinks } from "@/data/portfolio";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import ContributionGraph from "./_components/ContributionGraph";

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <NavBar/>
      <Hero/>
      <ContributionGraph/>
      <Projects/>
    </div>
  );
};

export default Home;