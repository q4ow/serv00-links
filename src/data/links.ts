import { LinkItem, LinkSection } from '@/types';
import {
  LuGithub, LuTwitter, LuFileText, LuBriefcase, LuMail
} from 'react-icons/lu';
import { FaDiscord } from 'react-icons/fa';

export const links: LinkItem[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/q4ow',
    icon: 'LuGithub',
    category: 'professional',
    description: 'Check out my open source projects and contributions'
  },
  {
    title: 'Twitter',
    url: 'https://x.com/keiranjs',
    icon: 'Twitter',
    category: 'social',
    description: 'I don\'t really use this tbh'
  },
  {
    title: 'Discord',
    url: 'https://discord.com/users/1230319937155760131',
    icon: 'FaDiscord',
    category: 'social',
    description: 'I am most active here, feel free to DM me'
  },
  {
    title: 'Portfolio',
    url: 'https://slop.sh',
    icon: 'Briefcase',
    category: 'portfolio',
    description: 'My personal sites'
  },
  {
    title: 'Contact',
    url: 'mailto:keiran@animethighs.com',
    icon: 'Mail',
    category: 'professional',
    description: 'I check my email more often than DMs'
  }
];

export const linkSections: LinkSection[] = [
  {
    title: 'Professional',
    links: links.filter(link => link.category === 'professional')
  },
  {
    title: 'Social Media',
    links: links.filter(link => link.category === 'social')
  },
  {
    title: 'Portfolio',
    links: links.filter(link => link.category === 'portfolio')
  }
];

export const getIconComponent = (iconName: string) => {
  const icons = {
    LuGithub,
    LuTwitter,
    LuFileText,
    LuBriefcase,
    LuMail,
    FaDiscord
  };

  return icons[iconName as keyof typeof icons] || LuFileText;
};