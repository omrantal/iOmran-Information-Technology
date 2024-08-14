"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import logo from '@/public/mini_logo.png'
import Image from "next/image";
import Link from "next/link";
import { IconHome, IconPhone, IconUser, IconMenu, IconActivity } from "@tabler/icons-react";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-lg h-16 fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-blue rounded-full dark:bg-codgray bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between",
          className
        )}
      >
        <div className="border text-sm font-medium relative border-neutral-200 dark:border-codgray text-black dark:text-white rounded-full">
          <Image
            src={logo}
            //height="50"
            //width="100"
            className="w-20 h-12 rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <span className="absolute inset-x-0 w-12 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue to-transparent h-px" />
        </div>

        <div className="flex inset-x-0 mx-auto w-[50%] items-center justify-between sm:justify-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Sections",
    link: "#sections",
    icon: <IconMenu className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Activities",
    link: "#activities",
    icon: <IconActivity className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];