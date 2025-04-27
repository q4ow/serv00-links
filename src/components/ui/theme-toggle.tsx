import { LuMoon, LuSun } from 'react-icons/lu';
import { useTheme } from '@/components/layout/ThemeProvider';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
    >
      <div
        className="relative w-5 h-5"
      >
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <LuSun className="w-5 h-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <LuMoon className="w-5 h-5" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}