"use client"

import Hero from "@/components/Hero"
import Sections from "@/components/Sections"
import Activities from "@/components/Activities"
import About from "@/components/About"
import Contact from "@/components/Contact"
import JoinUs from "@/components/JoinUs"

import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { FloatingNav, navItems } from "@/components/ui/FloatingNavbar"

export default function Home() {
  return (
    <main>
      <div className="relative w-full">
        <FloatingNav navItems={navItems} /> 
      </div>

      <div>
        <Hero />
        <AuroraBackground />
      </div>

      <Sections />
      <Activities />
      <About />
      <Contact />
      <JoinUs />
    </main>
  )
}
