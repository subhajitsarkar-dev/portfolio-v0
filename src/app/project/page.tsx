import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectPageSeo } from "@/lib/pageSeoData";
import { frontendProject, fullStackProject } from "@/lib/projectData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return projectPageSeo;
};

const page = () => {
  return (
    <>
      <section className="mb-14 mt-28 min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on. Click on github to
            view details
          </p>
        </div>

        <Tabs defaultValue="full-stack" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="full-stack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
          </TabsList>

          <TabsContent value="full-stack">
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {fullStackProject.map((item, index) => (
                <ProjectCard info={item} key={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend">
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {frontendProject.map((item, index) => (
                <ProjectCard info={item} key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default page;
