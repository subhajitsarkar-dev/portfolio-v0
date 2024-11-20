"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { project } from "@/lib/projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Pagination } from "swiper/modules";

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
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <Card
              key={index}
              className="rounded-lg shadow-lg transition-shadow duration-300 dark:shadow-lg dark:shadow-white/5"
            >
              <Swiper
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {item.images.map((img, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <Image
                      src={img}
                      alt="project images"
                      width={500}
                      height={300}
                      className="h-60 w-full rounded-t-lg object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <CardTitle className="m-2 flex items-center justify-between">
                <div className="">{item.title}</div>
                <Button color="default" size="icon">
                  <FaGithub size={28} className="text-white dark:text-black" />
                </Button>
              </CardTitle>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
