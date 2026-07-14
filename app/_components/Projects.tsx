import Image from "next/image";

const Project = ({ title, description, imageUrl, projectUrl }: { title: string; description: string; imageUrl: string; projectUrl: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" width={400} height={200} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
          View Project
        </a>
      </div>
    </div>
  );
}


const Projects = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
          title="Project 1"
          description="This is a brief description of Project 1."
          imageUrl="/path/to/project1-image.jpg"
          projectUrl="https://example.com/project1"
        />
      </div>
    </div>
  )
}
export default Projects