"use client"

import { useState } from "react";
import { IconCopy } from "@tabler/icons-react";

import { cn } from "@/utils/cn";

import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto py-10 px-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["NextJS", "JavaScript", "Typescript"];
  const rightLists = ["Tailwind CSS", "Framer Motion", "Aceternity UI"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "amrantal3@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-blue group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(11,10,9)",
        backgroundColor:
          "linear-gradient(90deg, rgba(11,10,9,1) 0%, rgba(147,146,139,1) 100%)"
      }}
    >
      <div className={`h-full ${id === 6 ? 'flex justify-center' : ''}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-50"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className={`font-sans text-lg lg:text-3xl max-w-full font-bold z-10 whitespace-pre-line ${id === 1 && 'text-black'}`}>
            {title}
          </div>

          <div className={`font-sans font-semibold text-sm md:text-md lg:text-lg ${id !== 1 ? 'text-lemongrass' : 'text-black/60'} ${id === 5 && 'mb-10'} mt-2 md:mt-6 z-10`}>
            {description}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-2 text-xs lg:text-base opacity-50 
                      rounded-lg text-center bg-blue/70"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue/70"></span>
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-blue/70"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-2 text-xs lg:text-base opacity-50 
                      rounded-lg text-center bg-blue/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy our email address"}
                icon={<IconCopy />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-blue/30"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const gridItems = [
  {
    id: 1,
    title: "Are you late for delivering your graduation project?\n We have the solution for you",
    description: "Check out our section for preparing graduation projects for the faculties of Informatics, Computer and Communications Engineering",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/projects.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We strive to manage your business smoothly, comfortably and completely",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "Tech used to build this website",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "We believe that technology should empower businesses, not complicate them. That’s why we take a client-centric approach, working closely with you to understand your unique needs and provide tailored solutions that align with your goals.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "Have you checked out our section on Practical and Vocational Training?",
    description: "We offer practical and vocational training for beginners in multiple fields including programming, design, marketing, and more...",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
