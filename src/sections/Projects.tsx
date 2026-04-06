import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work showcasing my expertise in building full-stack applications."
    >
      <div
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory
  md:grid md:grid-cols-2 lg:grid-cols-3
  md:overflow-visible"
      >
        {PROJECTS.map((project) => (
          <div key={project.id} className="w-full flex-shrink-0 snap-start px-2">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
