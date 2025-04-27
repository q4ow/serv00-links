import { motion } from 'framer-motion';
import { LinkSection as LinkSectionType } from '@/types';
import { LinkCard } from '@/components/links/LinkCard';

interface LinkSectionProps {
  section: LinkSectionType;
  index: number;
}

export function LinkSection({ section, index }: LinkSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="mb-8"
    >
      <motion.h2
        className="text-xl font-semibold mb-4 text-foreground/90 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 * index + 0.1 }}
      >
        {section.title}
        <div className="h-px flex-1 bg-border"></div>
      </motion.h2>

      <div className="grid gap-3">
        {section.links.map((link, i) => (
          <LinkCard key={link.title} link={link} index={i} />
        ))}
      </div>
    </motion.section>
  );
}