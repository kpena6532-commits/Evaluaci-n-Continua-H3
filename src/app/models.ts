export interface Skill {
  name: string;
  level: number;
  category: string;
}
export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'IoT' | 'Redes';
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  year: string;
  status: string;
}
export interface GalleryPhoto {
  image: string;
  alt: string;
  label: string;
}
export interface Profile {
  name: string;
  initials: string;
  role: string;
  secondaryRole: string;
  city: string;
  email: string;
  education: string;
  introduction: string;
  biography: string;
  skills: Skill[];
  highlights: { value: string; label: string }[];
  gallery: GalleryPhoto[];
}
