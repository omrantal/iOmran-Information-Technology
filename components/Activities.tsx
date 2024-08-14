import React from 'react'
import { motion } from "framer-motion"
import { HeroHighlight } from "@/components/ui/HeroHighlight"
import { HoverEffect, activities } from "@/components/ui/CardHoverEffect"

const Activities = () => {
  return (
    <section id="activities">
      <HeroHighlight className='py-10 px-10 w-full' containerClassName="relative">
        <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-white">
          Check out our{" "}
          <span className="text-blue">Latest Activities</span>
        </h1>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex w-full flex-col xl:flex-row items-center justify-center gap-2"
        >
          <div className="max-w-6xl mb-6">
            <HoverEffect items={activities} />
          </div>
        </motion.h1>
      </HeroHighlight>
    </section>
  )
}

export default Activities
