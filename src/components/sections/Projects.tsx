'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/ui';
import { useLang } from '@/lib/i18n';

interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const getColorClasses = (color: Project['color']) => {
  const colors = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-700',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-700',
  };
  return colors[color];
};

export const Projects = () => {
  const { t } = useLang();

  // To add a new project, append an object to this array — the grid adapts automatically.
  const projects: Project[] = [
    {
      title: 'Money Guard',
      description: t.projects.moneyGuard,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
      url: 'https://money-guard.mudaku.my.id/',
      image: '/projects/money-guard.png',
      color: 'green',
    },
  ];

  return (
    <Section id="projects" className="bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="relative aspect-[1200/630] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getColorClasses(project.color)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {t.projects.visit}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};
