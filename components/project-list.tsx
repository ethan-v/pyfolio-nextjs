import ProjectItem from "./project-item"
import Project from '../interfaces/project'

type Props = {
    projects: Project[]
}

const ProjectList = ({ projects }: Props) => {
    return (
        <>
            <div className="w-full">
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 mt-16 text-black dark:text-white">My Projects</h3>
                <div className="flex gap-6 flex-col md:flex-row">
                    {projects.map((project) => (
                        <ProjectItem
                            key={project.slug}
                            title={project.title}
                            slug={project.slug}
                            image={project.image}
                            description={project.description}
                        />
                    ))}
                </div>
                <a target="_blank" rel="noopener noreferrer" href="/" className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                    Load more projects
                </a>
            </div>
        </>
    )
}

export default ProjectList
