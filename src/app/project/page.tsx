import ProjectCard from "@/components/ProjectCard";
import { projectPageSeo } from "@/lib/pageSeoData";
import { project } from "@/lib/projectData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return projectPageSeo;
};

const page = () => {
  return (
    <>
      <section className="mb-28 mt-28 min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on. Click on github to
            view details
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {project.map((item, index) => (
            <ProjectCard info={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
