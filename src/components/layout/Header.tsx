import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-end px-4 py-4 md:px-6 backdrop-blur-lg bg-background/70"
    >
      <ThemeToggle />
    </motion.header>
  );
}