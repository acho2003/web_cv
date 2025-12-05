export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  link?: string;
  hasGame?: boolean; // For Space Shooter
  details: string;
}

export interface Experience {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: 'education' | 'work';
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}