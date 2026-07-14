import { projects } from "@/data/portfolio";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMonitor } from "react-icons/md";

const Project = ({ title, done, description, technologies, demoUrl, githubUrl }: { title: string; done: boolean; technologies: string[]; description: string; demoUrl: string; githubUrl: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="group flex items-center gap-2 text-lg font-semibold">
            <span className="transition-colors duration-300 group-hover:text-white">{title}</span>
            {done ? (
              <span className="flex items-center gap-1 text-xs font-medium text-green-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="size-2 rounded-full bg-green-500"></span>
                Completed
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs font-medium text-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="size-2 rounded-full bg-gray-400"></span>
                Not completed
              </span>
            )}
          </h3>
          <div className="flex space-x-4">
            <Link href={demoUrl} target="_blank" className="group flex items-center gap-2 text-gray-300 mt-4 transition-colors duration-300 hover:text-white">
              <MdOutlineMonitor />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 ease-out group-hover:max-w-14 group-hover:opacity-100">
                Demo
              </span>
            </Link>
            <Link href={githubUrl} target="_blank" className="group flex items-center gap-2 text-gray-300 mt-4 transition-colors duration-300 hover:text-white">
              <LuGithub />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-300 ease-out group-hover:max-w-18 group-hover:opacity-100">
                GitHub
              </span>
            </Link>
          </div>
        </div>
        <p className="text-gray-300 mt-2">{description}</p>
        <div className="flex flex-wrap mt-2">
          {technologies.map((tech) => (
            <span key={tech} className="border border-gray-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}


const Projects = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {
          projects.map((project, index) => (
            <Project
              key={index}
              done={false}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demo}
              githubUrl={project.github}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Projects