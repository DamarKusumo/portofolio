'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui';
import { BLOG_URL, type FeedPost } from '@/lib/feed';
import { useLang } from '@/lib/i18n';

export const Blog = ({ posts }: { posts: FeedPost[] }) => {
  const { t } = useLang();
  return (
    <Section id="blog">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.blog.heading}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.blog.subtitleLead}{' '}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t.blog.readAll}
            </a>
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            <time className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
              {post.displayDate}
            </time>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
              {post.description}
            </p>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {t.blog.readPost}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.a>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-300">
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t.blog.visitBlog}
          </a>
        </p>
      )}
    </Section>
  );
};
