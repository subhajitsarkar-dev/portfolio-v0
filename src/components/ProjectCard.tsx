"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <CardHeader>
          <CardTitle>
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
                    className="aspect-square h-60 w-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 pb-4">
          <div className="text-2xl font-bold">{info.title}</div>
          <div className="text-justify text-base">{info.description}</div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">
            View Github <RiShareBoxFill />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
