import { Button } from "@/components/ui/button";
import { aboutPageSeo } from "@/lib/pageSeoData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import homeBackground from "../../public/background.png";

export const generateMetadata = (): Metadata => {
  // const { title, description, keywords } = aboutPageSeo;

  // return {
  //   title: title,
  //   description: description,
  //   keywords: keywords,
  // };

  return aboutPageSeo;
};

const page = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="relative mx-4 sm:mx-12">
          <Image
            alt="Background Graphic"
            src={homeBackground}
            width={406}
            height={368}
            className="absolute right-1/2 top-0 -z-50 h-auto w-[400px] -translate-y-28 translate-x-1/2 opacity-10 sm:w-[500px]"
            priority
          />
          <h1 className="text-center text-3xl font-medium sm:text-5xl">
            I&apos;m Subhajit Sarkar, a Full Stack Web Developer
          </h1>
          <div className="mt-4 flex justify-center">
            <p className="text-justify text-base sm:w-3/4 sm:text-center">
              I started my web development journey from Central Institute of
              Technology in 2021 and it was complete in 2020. As well as I
              complete my B.A from West Bengal State University. In this period
              I learned about many languages and frameworks like HTML&#44;
              CSS&#44; JavaScript&#44; React&#44; Nextjs and so one. In my free
              time, I love to play video games and listen to music.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <Link href="https://github.com/subhajitsarkar-dev" target="_blank">
              <Button color="default" size="icon">
                <FaGithub size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link href="https://x.com/sarkar50664" target="_blank">
              <Button color="default" size="icon">
                <BsTwitter size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link href="mailto:subhajitsarkar.dev@gmail.com" target="_blank">
              <Button color="default" size="icon">
                <SiGmail size={28} className="text-white dark:text-black" />
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/subhajitsarkar-dev"
              target="_blank"
            >
              <Button color="default" size="icon">
                <FaLinkedinIn
                  size={28}
                  className="text-white dark:text-black"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
