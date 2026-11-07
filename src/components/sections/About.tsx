'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';
import { FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';
import { useLang } from '@/lib/i18n';

const achievementIcons = [
  <FaGraduationCap key="cap" className="w-6 h-6" />,
  <FaAward key="award" className="w-6 h-6" />,
  <FaCode key="code" className="w-6 h-6" />,
];

export const About = () => {
  const { t } = useLang();
  const achievements = t.about.achievements.map((achievement, index) => ({
    icon: achievementIcons[index],
    ...achievement,
  }));

  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.about.journey}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t.about.journeyP1}</p>
              <p>{t.about.journeyP2}</p>
              <p>{t.about.journeyP3}</p>
              <p>{t.about.journeyP4}</p>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {t.about.funFacts}
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {t.about.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {t.about.achievementsHeading}
          </h3>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {achievement.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-2">
                    {achievement.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};