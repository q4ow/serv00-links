export interface LinkItem {
  title: string;
  url: string;
  icon: string;
  category: 'professional' | 'social' | 'blog' | 'portfolio';
  description?: string;
}

export interface LinkSection {
  title: string;
  links: LinkItem[];
}