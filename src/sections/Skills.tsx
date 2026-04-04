import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../constants';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <SectionWrapper 
      id="skills" 
      title="My Skills" 
      subtitle="Technologies and tools I work with on a daily basis to build scalable applications."
      className="bg-gray-50/50 dark:bg-gray-900/20"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
              {skillGroup.category}
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillGroup.items.map((skill, i) => (
                <motion.span 
                  key={i}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
