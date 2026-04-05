import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Code2, Database, Layout } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Videos Created", value: "250+" },
  { label: "Instagram Followers", value: "15K+" },
  { label: "YouTube Subscribers", value: "10K+" },
  { label: "Client Projects", value: "50+" },
  { label: "Total Views", value: "3M+" },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A passionate video editor who transforms raw footage into compelling, high-quality visual stories that connect with audiences."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Creating impactful content through creative video editing.
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              I am a passionate video editor and content creator with a strong
              focus on delivering high-quality, engaging visual content. My
              expertise includes professional editing using Adobe Premiere Pro
              and After Effects, where I create everything from basic edits to
              advanced cinematic visuals.
            </p>
            <p>
              With over 6 years of hands-on experience and working on numerous
              client projects, I specialize in teaching practical editing
              techniques, creative storytelling, and industry-level workflows.
              Through my content, I aim to simplify complex editing concepts and
              help aspiring creators build real-world skills and grow in their
              video editing journey.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
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
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Video Editing
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Professional video editing using Adobe Premiere Pro, creating
              clean, engaging, and high-quality content for various platforms.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Code2 className="w-10 h-10 text-purple-500 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Motion Graphics
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Creating cinematic effects, transitions, and motion graphics using
              After Effects to enhance storytelling and visual impact.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Database className="w-10 h-10 text-green-500 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Content Creation & Training
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Sharing practical tutorials, editing techniques, and workflows to
              help creators learn video editing and grow their skills.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
