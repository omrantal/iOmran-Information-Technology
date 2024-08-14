import React from 'react'
import { IconLocation } from '@tabler/icons-react'

import { PinContainer, projects } from "@/components/ui/Pin";

function Sections() {
  return (
    <section id="sections">
      <div className="bg-blue/30 py-10 px-10">
        <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-lemongrass">
          Our Company has {" "}
          <span className="text-blue">5 Major Sections</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[26rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer
                className='bg-codgray'
                title="Visit"
                href=""
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[24vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="object-cover z-10 absolute bottom-0 w-full h-full"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm text-lemongrass line-clamp-2"
                  style={{
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <p
                  className="lg:font-normal font-light lg:text-base text-sm my-4 max-w-lg text-lemongrass/60 line-clamp-2"
                  style={{
                    margin: "1vh 0",
                  }}
                >
                  {item.list}
                </p>

                <div className="flex items-center justify-end mt-7 mb-3">
                  <div className="flex justify-center items-center text-blue/70">
                    <p className="flex lg:text-xl md:text-xs text-sm">
                      Check Live Site
                    </p>
                    <IconLocation className="ms-3" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sections
