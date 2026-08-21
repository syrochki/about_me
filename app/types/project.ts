export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  year: string;
  role: string;
  github?: string;
  demo?: string;
  featured: boolean;
  order: number;
  highlights: string[];
  body: string;
  published: boolean;
}
