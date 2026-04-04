import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './GithubIcon';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({ title, description, image, tech, github, demo }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all h-full"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            <ExternalLink size={18} /> Live Demo
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ml-auto">
            <Github size={18} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
