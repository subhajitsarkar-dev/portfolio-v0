"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ProjectType } from "@/lib/projectData";
import Image from "next/image";
import { RiShareBoxFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectTypeProp = {
  info: ProjectType;
};

const ProjectCard = ({ info }: ProjectTypeProp) => {
  return (
    <>
      <Card className="rounded-lg shadow-lg transition-shadow duration-300 dark:shadow-lg dark:shadow-white/5">
        <Swiper
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {info.images.map((img, imgIndex) => (
            <SwiperSlide key={imgIndex}>
              <Image
                src={img}
                alt="project images"
                width={500}
                height={300}
                className="aspect-video h-60 w-full rounded-t-lg object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardTitle className="m-2 flex flex-col gap-4 pt-2">
          <div className="">{info.title}</div>
        </CardTitle>
        <CardDescription className="m-2">
          {" "}
          <div className="text-base font-semibold leading-6">
            {info.description}
          </div>
        </CardDescription>

        <div className="m-2">
          <Button className="w-full">
            View Github <RiShareBoxFill />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
