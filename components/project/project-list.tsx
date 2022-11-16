import ProjectItem from "./project-item"
import Project from '../../interfaces/project'
import MoreButton from "../more-button/more-button"

type Props = {
    projects: Project[]
}

const ProjectList = ({ projects }: Props) => {
    return (
        <>
            <div className="w-full">
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">Projects</h3>
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
                <div className="my-6">
                    <MoreButton label="All Projects" href='/projects' className='text-brand' />
                </div>
            </div>
        </>
    )
}

export default ProjectList
