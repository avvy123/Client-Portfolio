import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <SectionWrapper 
      id="projects" 
      title="Featured Projects" 
      subtitle="A selection of my recent work showcasing my expertise in building full-stack applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
