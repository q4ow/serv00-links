import { motion } from 'framer-motion';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { LinksContainer } from '@/components/links/LinksContainer';

export function LinksPage() {
  const avatarUrl = "https://r2-bios.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/ysp056pmu4.png";

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
    </motion.div>
  );
}