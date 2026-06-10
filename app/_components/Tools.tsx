import { skills } from "@/data/skills";
import Image from "next/image";

const Tools = () => {
  return (
    <section id="tools" className="rounded-[2rem] border border-white/10 bg-card/85 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Tools I Know</p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground sm:text-4xl">
            Modern tooling for real-world software.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-muted-foreground">
            These are the frameworks, libraries, and tools I use to ship clean, performant, and polished front-end experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-primary/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <Image src={skill.icon} alt={skill.name} width={40} height={40} unoptimized />
              </div>
              <span className="font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
