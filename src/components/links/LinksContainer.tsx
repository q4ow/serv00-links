import { motion } from 'framer-motion';
import { LinkSection } from './LinkSection';
import { linkSections } from '@/data/links';

export function LinksContainer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-md px-4 md:px-0"
    >
      {linkSections.map((section, index) => (
        <LinkSection key={section.title} section={section} index={index} />
      ))}
    </motion.div>
  );
}