import { Button } from "@/components/ui/button"
import { IoDocumentTextOutline } from "react-icons/io5";
import ContributionGraph from "./ContributionGraph";

const Hero = () => {
  return (
    <section className="mt-5">
      <h1 className="text-3xl font-bold">Saad Ksioui</h1>
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