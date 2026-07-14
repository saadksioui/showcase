import { skills } from "@/data/skills";
import Image from "next/image";

const Tools = () => {
  return (
    <section className="mt-5">
      <div className="max-w-4xl space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Tech stack</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 border-[0.5px] border-gray-900 text-xs font-medium p-1 rounded"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Image src={skill.icon} alt={skill.name} width={20} height={20} className="grayscale group-hover:grayscale-0" unoptimized />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
