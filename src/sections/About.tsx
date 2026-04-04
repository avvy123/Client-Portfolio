import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Code2, Database, Layout } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '40+' },
  { label: 'Happy Clients', value: '15+' },
];

export default function About() {
  return (
    <SectionWrapper 
      id="about" 
      title="About Me" 
      subtitle="A passionate software engineer dedicated to building exceptional digital experiences."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Delivering robust solutions with modern web technologies.
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              I am a results-driven developer with a strong background in building complex, dynamic web applications. My expertise spans across the entire stack, from crafting pixel-perfect interfaces with React and Tailwind CSS to designing scalable REST APIs and secure authentication flows in .NET.
            </p>
            <p>
              With around 3 years of hands-on experience, I have successfully delivered enterprise employee dashboards, real-time communication platforms, and secure e-commerce systems. I thrive in agile environments, collaborating closely with teams to turn complex problems into elegant, user-centric solutions while adhering to high code quality and performance standards.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Layout className="w-10 h-10 text-blue-500 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Frontend Developer</h4>
            <p className="text-gray-600 dark:text-gray-400">Expertise in React, Vite, Redux/Zustand, and creating accessible, responsive UI systems.</p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Code2 className="w-10 h-10 text-purple-500 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Backend Services</h4>
            <p className="text-gray-600 dark:text-gray-400">Building scalable, secure RESTful APIs leveraging .NET, C#, Express, and Node.js.</p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Database className="w-10 h-10 text-green-500 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Database & Infrastructure</h4>
            <p className="text-gray-600 dark:text-gray-400">Proficiency in SQL Server and Git workflows.</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
