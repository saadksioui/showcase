import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import About from "./_components/About";
import Tools from "./_components/Tools";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-4 sm:px-6 lg:px-8 min-h-screen bg-transparent flex flex-col gap-y-5">
      <NavBar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;