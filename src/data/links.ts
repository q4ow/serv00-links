import { LinkItem, LinkSection } from '@/types';
import {
  LuGithub, LuTwitter, LuFileText, LuBriefcase, LuMail
} from 'react-icons/lu';

export const links: LinkItem[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/keiran',
    icon: 'LuGithub',
    category: 'professional',
    description: 'Check out my open source projects and contributions'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/keiran',
    icon: 'Twitter',
    category: 'social',
    description: 'Follow me for tech updates and thoughts'
  },
  {
    title: 'Portfolio',
    url: 'https://slop.sh',
    icon: 'Briefcase',
    category: 'portfolio',
    description: 'Showcase of my professional work'
  },
  {
    title: 'Contact',
    url: 'mailto:keiran@animethighs.com',
    icon: 'Mail',
    category: 'professional',
    description: 'Get in touch with me directly'
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
    LuMail
  };

  return icons[iconName as keyof typeof icons] || LuFileText;
};