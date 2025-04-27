import { motion } from 'framer-motion';

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export function ProfileHeader({ name, role, avatarUrl }: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center text-center space-y-4 mb-8"
    >
      {avatarUrl && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.3 
          }}
          className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-primary/10 shadow-lg"
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      <div className="space-y-2">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {name}
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {role}
        </motion.p>
      </div>
    </motion.div>
  );
}