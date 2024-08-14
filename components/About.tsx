"use client"

import { BentoGrid, BentoGridItem, gridItems } from "@/components/ui/BentoGrid"

export const About = () => {
  return (
    <section id="about">
      <div className="bg-blue/30 py-10 px-10">
        <BentoGrid className="w-full">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;
