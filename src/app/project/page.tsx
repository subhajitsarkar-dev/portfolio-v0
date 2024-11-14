import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { project } from "@/lib/projectData";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="min-h-screen py-28">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on. Click on a project to
            learn more!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <Card
              key={index}
              className="rounded-lg p-6 shadow-lg transition-shadow duration-300 dark:shadow-lg dark:shadow-white/5"
            >
              <div className="flex items-center gap-4">
                {/* <Image
              src={item.images}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            /> */}
                <CardTitle>{item.title}</CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
