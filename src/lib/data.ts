export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "Project Alpha",
    description: "A collaborative workspace built using Next.js and Framer Motion.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: "/project-alpha.jpg",
  },
  {
    title: "Semiconductor Analyzer",
    description: "An ECE-focused tool to visualize circuit parameters.",
    tags: ["Electronics", "React", "TypeScript"],
    imageUrl: "/circuit-tool.jpg",
  },
];