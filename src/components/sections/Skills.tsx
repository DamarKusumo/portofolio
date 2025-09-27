'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaDatabase,
  FaCloud,
  FaStream
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiAngular, 
  SiSpring,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiFlutter,
  SiSelenium
} from 'react-icons/si';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'React', icon: <FaReact className="w-5 h-5" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5" /> },
        { name: 'Angular', icon: <SiAngular className="w-5 h-5" /> },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'Python', icon: <FaPython className="w-5 h-5" /> },
        { name: '.NET', icon: <SiDotnet className="w-5 h-5" /> },
        { name: 'Spring Boot', icon: <SiSpring className="w-5 h-5" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5" /> },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Google Cloud', icon: <SiGooglecloud className="w-5 h-5" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-5 h-5" /> },
        { name: 'Docker', icon: <FaDocker className="w-5 h-5" /> },
        { name: 'Apache Kafka', icon: <FaStream className="w-5 h-5" /> },
      ]
    },
    {
      title: 'Database & Tools',
      icon: <FaDatabase className="w-6 h-6" />,
      color: 'orange',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5" /> },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
        { name: 'Flutter', icon: <SiFlutter className="w-5 h-5" /> },
        { name: 'Selenium', icon: <SiSelenium className="w-5 h-5" /> },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from frontend frameworks 
            to cloud infrastructure and everything in between.
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
              {category.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-300">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};