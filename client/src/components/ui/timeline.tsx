import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export function Timeline({
  data,
  className = "",
}: {
  data: TimelineEntry[]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setHeight(el.getBoundingClientRect().height)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [data.length])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 95%"],
  })

  const heightTransform = useTransform(scrollYProgress, (v) => v * height)
  const opacityTransform = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <div
      className={`w-full font-sans md:px-4 ${className}`}
      ref={containerRef}
    >
      <div ref={ref} className="relative mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-20 md:gap-6"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-[12rem] lg:max-w-xs md:w-full">
              <div className="h-8 absolute left-2 md:left-2 w-8 rounded-full bg-white flex items-center justify-center border-2 border-black/25">
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <h3 className="hidden md:block text-sm md:pl-14 md:text-2xl font-bold opacity-80">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 pr-2 md:pl-2 w-full">
              <h3 className="md:hidden block text-lg mb-2 text-left font-bold opacity-80">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-0% via-black/25 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-black/70 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
