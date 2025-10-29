interface AboutUsItem {
  name: string;
  role: string;
  description: string;
  alt: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
export type AboutUs = AboutUsItem[];
