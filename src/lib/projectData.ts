export const frontendProject = [
  {
    title: "Weather App",
    description:
      "A full-stack e-commerce website built with Next.js and Tailwind CSS.",
    images: ["/weatherApp.png"],
  },
  {
    title: "Random User Api",
    description:
      "A full-stack e-commerce website built with Next.js and Tailwind CSS. It is a production grade application.",
    images: ["/bg4.jpg", "/p.jpg"],
  },
];
export const fullStackProject = [
  {
    title: "Todo Application",
    description:
      "A full-stack Todo application where Users can sign in securely to manage their task. User can adding, deleting and mark the complete or incomplete tasks. This app made by - JavaScript, Nextjs, TypeScript, Tailwind css,Tanstack query, Directus and Shadecn/ui.",
    images: ["/p.jpg", "/p1.png", "/bg4.jpg"],
  },
  {
    title: "Blog Application",
    description:
      "A full-stack Blog application where Users can sign in securely to manage their blogs including file upload. User can create,  update, delete their post and managing their profiles. This app made by - JavaScript, Nextjs, TypeScript, Tailwind css,Tanstack query, Directus and Shadecn/ui.",
    images: ["/p.jpg", "/p1.png", "/bg4.jpg"],
  },
];

export type ProjectType = {
  title: string;
  description: string;
  images: string[];
};
