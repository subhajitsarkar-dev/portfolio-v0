import { Card } from "@/components/ui/card";
import { skills } from "@/lib/mySkill";

const page = () => {
  return (
    <>
      <section className="py-28">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
            My Skills
          </h1>
          <p className="text-lg text-black dark:text-white">
            Technologies and tools I have learn
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="rounded-lg p-6 shadow-lg transition-shadow duration-300 dark:shadow-lg dark:shadow-white/5 sm:hover:shadow-none sm:dark:hover:shadow-none"
            >
              <div className="flex items-center gap-4">
                <skill.icon className="text-4xl text-black dark:text-white" />
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="mt-2 text-black dark:text-white">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
