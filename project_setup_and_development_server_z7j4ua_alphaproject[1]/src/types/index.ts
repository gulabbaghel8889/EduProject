export interface Project {
  id: number;
  created_at: string;
  title: string;
  university: string;
  department: string;
  level: 'Undergraduate' | 'Postgraduate' | 'PhD';
  author: string;
  description: string;
  tags: string[];
  views: number;
  downloads: number;
  likes: number;
  rating: number;
  comments: number;
  status: 'Published' | 'Under Review' | 'Draft';
  featured: boolean;
  thumbnail: string;
  full_description: string;
  supervisor: string;
  author_info: {
    name: string;
    email: string;
    year: string;
    profile: string;
  };
  files: { name: string; size: string; type: string; }[];
  technologies: string[];
  achievements: string[];
}
