import About from "./_components/About"
import ContributionGraph from "./_components/ContributionGraph"
import Hero from "./_components/Hero"
import NavBar from "./_components/NavBar"
import Tools from "./_components/Tools"

const Home = () => {
  return (
    <div className="bg-transparent">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Tools />
        <ContributionGraph />
      </main>
    </div>
  )
}

export default Home