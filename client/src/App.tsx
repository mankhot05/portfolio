// @ts-nocheck
import { useCallback, useEffect, useMemo, useRef, useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import Lenis from "lenis"
import MetaBalls from "./components/MetaBalls"
import { Timeline } from "./components/ui/timeline"
// import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
// import Masonry from "./components/Masonry"

/*
  Black screen "curtain reveal" (disabled for now).
  We'll re-enable this later if you want the unveil transition again.
*/
// function HomeRevealCurtain({ durationMs = 1900 }: { durationMs?: number }) {
//   useEffect(() => {
//     const prevOverflow = document.body.style.overflow
//     document.body.style.overflow = "hidden"
//     const t = window.setTimeout(() => {
//       document.body.style.overflow = prevOverflow
//     }, durationMs)
//     return () => {
//       window.clearTimeout(t)
//       document.body.style.overflow = prevOverflow
//     }
//   }, [durationMs])
//
//   return <div className="reveal-curtain" aria-hidden="true" />
// }

function HomePage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  const rightPhotoRef = useRef(null)
  const [homePhotoHeightPx, setHomePhotoHeightPx] = useState(null)

  const measureHomePhotoHeight = useCallback(() => {
    const el = rightPhotoRef.current
    if (!el) return
    const isMd = window.matchMedia("(min-width: 768px)").matches
    if (!isMd) {
      setHomePhotoHeightPx(null)
      return
    }
    const h = el.getBoundingClientRect().height
    if (h > 0) setHomePhotoHeightPx(Math.round(h))
  }, [])

  useLayoutEffect(() => {
    measureHomePhotoHeight()
    const el = rightPhotoRef.current
    if (!el) return
    const ro = new ResizeObserver(measureHomePhotoHeight)
    ro.observe(el)
    window.addEventListener("resize", measureHomePhotoHeight)
    const mql = window.matchMedia("(min-width: 768px)")
    mql.addEventListener("change", measureHomePhotoHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measureHomePhotoHeight)
      mql.removeEventListener("change", measureHomePhotoHeight)
    }
  }, [measureHomePhotoHeight, isActive])

  return (
    <section
      id="home"
      className="relative flex flex-col"
      style={{
        minHeight: `calc(100dvh - ${headerHeight}px)`,
        scrollMarginTop: headerHeight + 16,
      }}
    >
      {/*
        Masonry background (commented out for now).
        To restore, uncomment the Masonry import above and this block.
      */}
      {/*
      <div
        className="absolute left-0 right-0 bottom-0 overflow-hidden z-0"
        style={{ top: 24 }}
      >
        <Masonry
          items={[
            { id: "1", img: "/photos/IMG_9225.JPG", url: "#", height: 400 },
            { id: "2", img: "/photos/IDG_20260107_161152_065.JPG", url: "#", height: 375 },
            { id: "3", img: "/photos/IDG_20260106_195925_863.JPG", url: "#", height: 420, column: 1 },
            { id: "4", img: "/photos/IMG_8242.JPG", url: "#", height: 600 },
            { id: "5", img: "/photos/IDG_20260102_125111_592.jpg", url: "#", height: 350 },
            { id: "6", img: "/photos/IDG_20260101_152044_151.JPG", url: "#", height: 300 },
            { id: "7", img: "/photos/IDG_20260101_190432_804.jpg", url: "#", height: 675 },
            { id: "8", img: "/photos/IDG_20260106_191847_525.jpg", url: "#", height: 360 },
            { id: "9", img: "/photos/IDG_20260101_181407_500.jpg", url: "#", height: 380 },
            { id: "10", img: "/photos/IMG_9135.JPG", url: "#", height: 280 },
            { id: "11", img: "/photos/IMG_9134.JPG", url: "#", height: 260 },
          ]}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
      </div>
      */}

      {/*
        Legacy centered homepage name overlay (commented out for now).
        The name is now rendered in the global header.
      */}
      {/*
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <span className="max-w-[92vw] px-2 text-center SpaceGrotesk font-bold text-red-600 text-[clamp(3rem,14vw,12rem)] leading-[0.9] tracking-tight select-none text-balance">
          MAYANK HOTHUR
        </span>
      </div>
      */}

      <motion.div
        className="relative z-[1] flex flex-1 flex-col px-4 py-8"
        initial={{ opacity: 1, filter: "blur(14px)" }}
        animate={
          isActive
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 0, filter: "blur(12px)" }
        }
        transition={{
          opacity: { duration: 0.4, delay: isActive ? 0.15 : 0 },
          filter: { duration: isActive ? 1 : 0.25, ease: "easeOut" },
        }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <div className="mx-auto w-full max-w-6xl flex flex-1 flex-col items-stretch justify-center gap-6 md:flex-row md:items-stretch md:gap-6">
          <div className="relative w-full md:basis-[48%] md:shrink-0 md:flex md:items-center md:justify-start">
            <div
              className="relative w-full max-w-[560px] overflow-hidden"
              style={homePhotoHeightPx != null ? { height: homePhotoHeightPx } : undefined}
            >
              <img
                src="/photos/home-tagline.png"
                alt="AI/ML researcher, full-stack developer, and data scientist"
                className={
                  homePhotoHeightPx != null
                    ? "w-full h-auto object-contain md:absolute md:inset-0 md:h-full md:w-full md:object-cover md:object-center"
                    : "w-full h-auto object-contain"
                }
              />
            </div>
          </div>

          <div className="w-full md:basis-[52%] md:grow md:flex md:justify-start">
            <div className="relative w-full max-w-[560px] overflow-hidden">
              <img
                ref={rightPhotoRef}
                src="/photos/homepage.png"
                alt="Homepage"
                className="w-full h-auto object-contain"
                onLoad={measureHomePhotoHeight}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const EXPERIENCE_TIMELINE_DATA = [
  {
    title: "OCT 2025 - PRESENT",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">COORAY GROUP</span>: Currently working for <span className="text-sm md:text-base font-semibold">NASA JPL</span> to develop and deploy novel architectures with the goal of predicting redshifts. Worked with <span className="font-bold">diffusion models</span> for denoising, and created <span className="font-bold">CNN-Transformer</span> pipelines to understand astrophysical data.
      </p>
    ),
  },
  {
    title: "OCT 2024 - APR 2025",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">HUMANITY UNLEASHED</span>: Working on integrating temporal
        encoding pipelines into <span className="font-bold">multimodal transformers</span> through TACTiS-2. Conducted an
        extensive hyperparameter tuning study for said architectures.
      </p>
    ),
  },
  {
    title: "AUG 2023 - JAN 2024 ",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">AI4MUSICIANS</span>: Designed a CNN-based <span className="font-bold">computer vision</span> pipeline to analyze digitized music scores, using <span className="font-bold">convolutional layers</span> to detect and normalize dynamic range (decibel) variations across compositions.
      </p>
    ),
  },
]

const ABOUT_ME_PHOTOS = [
  { src: "/photos/aboutme.png", alt: "Mayank — sunset" },
  { src: "/photos/IMG_9225.JPG", alt: "About me — photo" },
  { src: "/photos/IMG_8242.JPG", alt: "About me — photo" },
]

function AboutPage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  return (
    <section
      id="about"
      className="px-4 bg-transparent text-black flex flex-col items-center justify-center"
      style={{
        scrollMarginTop: headerHeight + 16,
        minHeight: `calc(100dvh - ${headerHeight}px)`,
      }}
    >
      <motion.div
        className="mx-auto w-full max-w-7xl flex flex-col items-center text-center SpaceGrotesk py-16 md:py-24"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isActive ? 0.06 : 0, ease: "easeOut" }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <h2 className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
          ABOUT ME
        </h2>
        <p className="w-full max-w-[72ch] text-xs sm:text-sm md:text-base leading-relaxed mb-6 mx-auto">
          Third year student at UCI studying applied mathematics and computer science. My interests
          are broad and varied, but I am particularly interested in the study of algorithms, <span className="font-bold">deep learning</span>, and their
          applications to the real world. I am simultaneously learning <span className="font-bold">computer science</span> and <span className="font-bold">full-stack development</span>! 
          I take passion in learning new things and love to explore new ideas and concepts. Some things that I am interested in learning in the future are <span className="font-bold">quantitative finance</span>, 
          <span className="font-bold"> physics</span>, and their applications with machine learning. You can also find me stargazing, at a beach, or playing sports in my free time. A new love of
          mine that I discovered recently is traveling, and is something that anyone will now find me doing whenever
          given the opportunity. Feel free to reach out, as I am always open to new opportunities and collaborations!
        </p>
        <p className="text-xs sm:text-sm md:text-base opacity-90 mb-6 max-w-[72ch] mx-auto">
          future places to visit...
          <br />
          Italy, Greece, China, Switzerland, Czech Republic
        </p>
        <div
          className="w-full mx-auto px-1 sm:px-2 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
          aria-label="About me photos"
        >
          {ABOUT_ME_PHOTOS.map(({ src, alt }) => (
            <div
              key={src}
              className="aspect-square w-full min-w-0 overflow-hidden rounded-lg bg-neutral-100"
            >
              <img
                src={src}
                alt={alt}
                className="size-full object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const RESUME_PDF_HREF = "/mayankhothurresume.pdf"

function ExperiencePage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  return (
    <section
      id="experience"
      className="px-4 bg-transparent text-black flex flex-col items-center justify-center"
      style={{
        scrollMarginTop: headerHeight + 16,
        minHeight: `calc(100dvh - ${headerHeight}px)`,
      }}
    >
      <motion.div
        className="mx-auto w-full max-w-6xl flex flex-col gap-12 md:flex-row md:items-start md:gap-16 lg:gap-20 py-16 md:py-24 SpaceGrotesk"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, delay: isActive ? 0.06 : 0, ease: "easeOut" }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <div className="w-full md:basis-[48%] md:shrink-0 md:min-w-0 text-left">
          <h2 className="mb-6 md:mb-8 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-center md:text-left">
            EXPERIENCE
          </h2>
          <div className="w-full">
            <Timeline data={EXPERIENCE_TIMELINE_DATA} className="bg-transparent" />
          </div>
        </div>

        <div
          className="w-full md:basis-[52%] md:shrink-0 md:min-w-0 flex flex-col gap-4 md:sticky md:self-start text-left"
          style={{ top: headerHeight > 0 ? headerHeight + 16 : undefined }}
        >
          <h2 className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-center md:text-left">
            RESUME
          </h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={RESUME_PDF_HREF}
              download="Mayank-Hothur-Resume.pdf"
              className="inline-flex items-center justify-center rounded-md border border-black bg-black px-4 py-2.5 text-xs sm:text-sm font-medium text-white underline-offset-2 hover:opacity-90"
            >
              Download résumé
            </a>
            <a
              href={RESUME_PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm underline"
            >
              Open in new tab
            </a>
          </div>
          <div className="w-full overflow-hidden rounded-lg border border-black/15 bg-neutral-100 shadow-sm">
            <iframe
              title="Résumé preview"
              src={`${RESUME_PDF_HREF}#view=FitH`}
              className="h-[min(70vh,720px)] w-full bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function ProjectsPage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  return (
    <section
      id="projects"
      className="px-4 pt-20 pb-32 text-center bg-transparent text-black"
      style={{ scrollMarginTop: headerHeight + 16, minHeight: `calc(180dvh - ${headerHeight}px)` }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <h2 className="mb-6 SpaceGrotesk text-base md:text-lg font-semibold tracking-wide">
          PROJECTS
        </h2>
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          disableAnimations={false}
        />
      </motion.div>
    </section>
  )
}

function App() {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 0.85,
      lerp: 0.08,
    })
    return () => lenis.destroy()
  }, [])

  useLayoutEffect(() => {
    if (!headerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height)
    })
    ro.observe(headerRef.current)
    return () => ro.disconnect()
  }, [])

  const [activeSection, setActiveSection] = useState<"home" | "about" | "experience" | "projects">("home")

  const themes = useMemo(
    () => ({
      home: { bg: "bg-white", text: "text-black", hex: "#000000", bgValue: "#ffffff" },
      about: { bg: "bg-white", text: "text-black", hex: "#000000", bgValue: "#ffffff" },
      experience: { bg: "bg-white", text: "text-black", hex: "#000000", bgValue: "#ffffff" },
      projects: { bg: "bg-white", text: "text-black", hex: "#000000", bgValue: "#ffffff" },
    }),
    []
  )

  const headerTheme = themes[activeSection]

  useEffect(() => {
    const sectionIds: Array<"home" | "about" | "experience" | "projects"> = [
      "home",
      "about",
      "experience",
      "projects",
    ]

    function updateActiveSection() {
      const triggerY = headerHeight + Math.min(220, Math.max(140, window.innerHeight * 0.32))
      let active: (typeof sectionIds)[number] = "home"
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= triggerY && bottom >= triggerY) {
          active = id
          break
        }
        if (top > triggerY) break
        active = id
      }
      setActiveSection(active)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [headerHeight])

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden text-black">
        <motion.div
          className="fixed inset-0 z-0"
          initial={{ backgroundColor: themes[activeSection].bgValue }}
          animate={{ backgroundColor: themes[activeSection].bgValue }}
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          aria-hidden
        />
        <div className="relative z-10">
        <header
          ref={headerRef}
          className={`fixed top-0 left-0 right-0 z-50 w-full px-2 pt-4 pb-3 transition-colors duration-300 ${headerTheme.bg} ${headerTheme.text}`}
        >
          <div className="w-full flex flex-col items-center text-center">
            <div className="w-full grid grid-cols-[clamp(90px,12vw,150px)_1fr_clamp(90px,12vw,150px)] items-center">
              <div className="h-[clamp(44px,5.5vw,70px)] w-full">
                <MetaBalls
                  color={headerTheme.hex}
                  cursorBallColor={headerTheme.hex}
                  ballSize={1.8}
                  cursorBallSize={2}
                  ballCount={15}
                  animationSize={30}
                  enableMouseInteraction
                  enableTransparency={true}
                  hoverSmoothness={0.15}
                  clumpFactor={1}
                  speed={0.3}
                />
              </div>

              <div className="w-full SpaceGrotesk font-bold text-[clamp(2.65rem,13.2vw,10.6rem)] leading-[0.9] tracking-[-0.085em] whitespace-nowrap select-none">
                MAYANK HOTHUR
              </div>

              <div aria-hidden="true" />
            </div>

            <nav className="mt-3 w-full">
              <div className="BerkMono font-normal flex w-full flex-row flex-nowrap items-center justify-evenly gap-4 text-xs">
                <a href="#home" className="underline">
                  HOME
                </a>
                <a href="#about" className="underline">
                  ABOUT ME
                </a>
                <a href="#experience" className="underline">
                  EXPERIENCE
                </a>
                <a href="#projects" className="underline">
                  PROJECTS
                </a>
              </div>
            </nav>
          </div>

          {/*
            Legacy left header block (commented out for now).
            To restore, uncomment this entire block.
          */}
          {/*
          <div>
            <h2 className="text-sm font-semibold text-black">mayank hothur</h2>
            <h1 className="mt-1 text-xs text-black">education: math-cs @ UCI</h1>
            <p className="mt-2 max-w-xl text-xs text-black">
              currently: machine learning researcher @ cooray group.
            </p>
          </div>
          */}
        </header>

        <main className="flex-1" style={{ paddingTop: headerHeight }}>
          <HomePage headerHeight={headerHeight} isActive={activeSection === "home"} />
          <AboutPage headerHeight={headerHeight} isActive={activeSection === "about"} />
          <ExperiencePage headerHeight={headerHeight} isActive={activeSection === "experience"} />
          <ProjectsPage headerHeight={headerHeight} isActive={activeSection === "projects"} />
        </main>

        <footer className={`mt-8 px-4 py-10 text-[17px] ${headerTheme.text}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="font-semibold md:basis-1/3">
              MAYANK HOTHUR
            </div>
            <div className="text-left md:basis-1/3 md:text-right">
              <p className="mb-3">HOTHUR.MAYANK@GMAIL.COM</p>
            </div> 
          </div>
        </footer>
        </div>
    </div>
  )
}

export default App