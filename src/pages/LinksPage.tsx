import { motion } from 'framer-motion';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { LinksContainer } from '@/components/links/LinksContainer';

export function LinksPage() {
  // The avatar URL would typically come from your CMS or config
  const avatarUrl = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600";
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 flex flex-col items-center justify-center"
    >
      <ProfileHeader 
        name="Keiran" 
        role="Full Stack Developer" 
        avatarUrl={avatarUrl} 
      />
      <LinksContainer />
      
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-sm text-muted-foreground"
      >
        <p>© {new Date().getFullYear()} Keiran. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
}