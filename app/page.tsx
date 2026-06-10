import About from "./_components/About"
import ContributionGraph from "./_components/ContributionGraph"
import Hero from "./_components/Hero"
import NavBar from "./_components/NavBar"
import Tools from "./_components/Tools"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-16">
      <NavBar />
      <Hero />
      <About />
      <Tools />
      <ContributionGraph />
    </div>
  )
}

export default Home