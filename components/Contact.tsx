import React from 'react'
import { motion } from "framer-motion"
import { HeroHighlight } from "@/components/ui/HeroHighlight"
import { InfiniteMovingCards, contact } from "@/components/ui/InfiniteMovingCards"

const Contact = () => {
  return (
    <section id="contact">
      <HeroHighlight className='py-10 px-10 w-full' containerClassName="relative">
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
          <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={contact}
              direction="right"
              speed="normal"
            />
          </div>
        </motion.h1>
      </HeroHighlight>
    </section>
  )
}

export default Contact
