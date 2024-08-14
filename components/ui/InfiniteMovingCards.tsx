"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { IconBrandFacebook, IconBrandYoutube, IconBrandTelegram, IconBrandInstagram, IconPhoneCalling, IconBrandGmail, IconBrandLinkedin } from '@tabler/icons-react';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: JSX.Element;
    brand: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[200px] max-w-full relative flex justify-center cursor-pointer rounded-2xl border flex-shrink-0 bg-codgray/50 border-blue px-4 py-4 md:w-[260px]"
            key={item.brand}
          >
            <blockquote className="">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              
              <div className="flex flex-col items-center justify-center">
                <span className="relative z-20 text-center">
                  {item.icon}
                </span>

                <div className="relative z-20 mt-2 flex flex-row items-center">
                  <span className="text-sm lg:text-lg leading-[1.6] text-gray-400 font-normal">
                    {item.brand}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const contact = [
    {
      icon: <IconBrandFacebook className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Facebook",
    },
    {
      icon: <IconBrandYoutube className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Youtube",
    },
    {
      icon: <IconBrandTelegram className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Telegram",
    },
    {
      icon: <IconBrandInstagram className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Instagram",
    },
    {
      icon: <IconBrandLinkedin className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Linkedin"
    },
    {
      icon: <IconPhoneCalling className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Phone Number",
    },
    {
      icon: <IconBrandGmail className="h-10 w-10 text-neutral-500 dark:text-white" />,
      brand: "Gmail"
    },
  ];
  