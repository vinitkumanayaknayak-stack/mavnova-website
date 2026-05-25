export interface BentoCard {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  colSpan: string; // Tailwind grid span class
  rowSpan?: string;
  icon: string; // Lucide icon name
  glowColor: "cyan" | "purple" | "magenta" | "blue";
  techStack?: string[];
}

export interface WhyMavnovaItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  imageUrl: string;
  accentColor: string;
  metric?: {
    label: string;
    value: string;
  };
}

export interface StoryEffect {
  id: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
  iconName: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ContactFormData {
  name: string;
  schoolName: string;
  role: string;
  email: string;
  phone: string;
  message: string;
}
