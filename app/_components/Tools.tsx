import { skills } from "@/data/skills"
import Image from "next/image"

const Tools = () => {
    
  return (
    <div>
        <h1>Tools I Know</h1>
        <div className="grid grid-cols-4 gap-5">
            {
                skills.map((skill, index) => (
                    <div className="flex items-center gap-3 px-4 py-1 rounded-2xl border border-gray-300" key={index}>
                        <Image src={skill.icon} alt={skill.name} width={48} height={48} unoptimized/>
                        <span>{skill.name}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Tools