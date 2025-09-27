'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';
import { FaGraduationCap, FaAward, FaCode, FaRocket } from 'react-icons/fa';

export const About = () => {
  const achievements = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: 'Cumlaude Graduate',
      description: 'Universitas Indonesia - Sistem Informasi (IPK: 3.71/4.00)',
      period: '2020-2024'
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: 'Google Cloud Certified',
      description: 'Associate Cloud Engineer - Bangkit Academy Graduate',
      period: 'Feb-Jul 2023'
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'Team Leader at Andal Software',
      description: 'Promoted to lead HRIS modernization after 3-month probation',
      period: 'Jul 2024-Present'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Co-Founder Connextion Indonesia',
      description: 'AI-powered talent platform connecting businesses with IT professionals',
      period: 'Sep 2024-Present'
    }
  ];

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
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate software engineer with entrepreneurial spirit and proven track record 
            in building scalable applications and leading technical teams.
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
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Born and raised in Jakarta, I discovered my passion for technology during my studies 
                at <strong>Universitas Indonesia</strong>, where I graduated Cumlaude with a degree 
                in Information Systems.
              </p>
              <p>
                My breakthrough came through <strong>Bangkit Academy&apos;s Cloud Computing Cohort</strong>, 
                where I earned my Google Cloud certification and gained deep expertise in advanced cloud 
                technologies and scalable system architectures.
              </p>
              <p>
                Today, I balance my role as a <strong>Team Leader</strong> at Andal Software with 
                co-founding Connextion Indonesia, an AI-powered platform that&apos;s revolutionizing 
                how businesses connect with IT talent.
              </p>
              <p>
                I&apos;m driven by the challenge of transforming complex business requirements into 
                elegant, scalable solutions that make a real impact.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Fun Facts About Me
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>🏍️ Daily commuter from Tangerang to Jakarta (building resilience one ride at a time!)</li>
              <li>🎓 Thesis focused on Supply Chain Management Software Product Lines</li>
              <li>🌟 Passionate about open-source solutions that drive cost-efficiency</li>
              <li>🤝 Strong believer in mentoring and knowledge sharing</li>
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
            Key Achievements
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