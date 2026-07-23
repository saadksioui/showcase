import { Button } from "@/components/ui/button"
import { IoDocumentTextOutline } from "react-icons/io5";
import ContributionGraph from "./ContributionGraph";

const Hero = () => {
  return (
    <section className="mt-5">
      <h1 className="flex items-center gap-2 text-3xl font-bold">
        Saad Ksioui
        <div className="mt-2 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-400">Open to Work</span>
        </div>
      </h1>
      <h3 className="text-xl font-medium text-gray-300">Software Developer</h3>
      <p className="text-gray-300">Casablanca, Morocco</p>

      <Button className="rounded mt-5">
        <a className="flex items-center justify-between gap-2" href={"/resume.pdf"} download>
          <IoDocumentTextOutline color="black" size={15}/>
          <span>Resume</span>
        </a>
      </Button>
      <div>
        <ContributionGraph />
      </div>
    </section>
  )
}
export default Hero