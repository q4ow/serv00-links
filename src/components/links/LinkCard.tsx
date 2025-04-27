import { motion } from 'framer-motion';
import { LinkItem } from '@/types';
import { getIconComponent } from '@/data/links';
import { LuExternalLink } from 'react-icons/lu';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  const Icon = getIconComponent(link.icon);

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center gap-4 rounded-xl p-4 transition-all",
        "bg-card hover:bg-card/80 border border-border/50 shadow-sm",
        "hover:shadow-md hover:border-primary/20 hover:-translate-y-1",
        "dark:hover:border-primary/30"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-medium">{link.title}</h3>
          <LuExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
        </div>
        {link.description && (
          <p className="text-sm text-muted-foreground line-clamp-1">{link.description}</p>
        )}
      </div>
    </motion.a>
  );
}