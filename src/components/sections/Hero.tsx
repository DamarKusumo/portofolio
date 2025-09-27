'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Button } from '@/components/ui';
import TypingEffect from '@/components/TypingEffect';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-8 lg:px-20">
      <div className="w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:gap-12 items-center text-center lg:text-left space-y-8 lg:space-y-0"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Image
              src="/ava_no_bg.png"
              alt="Muhammad Damar Kusumo - Google Certified Associate Cloud Engineer & Full-Stack Developer"
              width={200}
              height={200}
              priority
              className="rounded-full shadow-2xl border-4 border-white/10"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              <TypingEffect
                initialText="Hi, I'm"
                text=" Muhammad Damar Kusumo"
                speed={80}
                delay={500}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Google Certified Associate Cloud Engineer
              </motion.div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >
              <TypingEffect
                text="Full-Stack Developer & Software Engineer with entrepreneurial mindset. Graduate from Universitas Indonesia (Cumlaude, 3.71/4.00) specializing in cloud-native solutions and scalable applications."
                speed={25}
                delay={4000}
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 10 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
              >
                Currently building modern HRIS platforms at{' '}
                <a 
                  href="https://andalsoftware.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Andal Software
                </a>{' '}
                and co-founding AI-powered talent platform{' '}
                <a 
                  href="https://www.connextion.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  Connextion Indonesia
                </a>.
              </motion.div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">GCP</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Certified Engineer</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">UI</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Graduate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <Button
                variant="primary"
                size="lg"
                href="mailto:muhammaddamarkusumo@gmail.com"
                className="w-full sm:w-auto"
              >
                Let&apos;s Work Together
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="https://drive.google.com/drive/folders/1UBb-Hke-QvMl0t6Unlq-hyWG7EWCMcNV?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                View Full Profile
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="pt-4 text-sm text-gray-500 dark:text-gray-400"
            >
              📍 Jakarta, Indonesia • 📧 muhammaddamarkusumo@gmail.com • 📱 +6285664545159
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};