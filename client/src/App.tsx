// @ts-nocheck
import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import MetaBalls from "./components/MetaBalls"
import { Timeline } from "./components/ui/timeline"
// import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
import TiltedCard from "./components/TiltedCard"
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
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <div className="mx-auto w-full max-w-6xl flex flex-1 flex-col items-stretch justify-center gap-6 md:flex-row md:items-stretch md:gap-6">
          <div className="relative w-full md:basis-[48%] md:shrink-0">
            <p className="max-w-[46ch] text-left text-black text-base leading-relaxed md:absolute md:top-[60%] md:-translate-y-1/2 md:text-lg md:leading-relaxed">
              AI/ML RESEARCHER, FULL-STACK DEVELOPER, AND DATA SCIENTIST. 
            </p>
          </div>

          <div className="w-full md:basis-[52%] md:grow md:flex md:justify-start">
            <div className="relative w-full max-w-[560px] overflow-hidden">
              <img
                src="/photos/homepage.png"
                alt="Homepage"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const ABOUT_TIMELINE_DATA = [
  {
    title: "OCT 2025 - PRESENT",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">COORAY GROUP</span>: Currently working for <span className="text-sm md:text-base font-semibold">NASA JPL</span> to develop novel deep learning methodologies and architectures with the goal of predicting redshifts. Worked with <span className="font-bold">diffusion models</span> for denoising, and created <span className="font-bold">CNN-Transformer</span> pipelines to understand astrophysical data.
      </p>
    ),
  },
  {
    title: "OCT 2024 - APR 2025",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">HUMANITY UNLEASHED</span>: Worked on integrating temporal 
        encoding pipelines into <span className="font-bold">multimodal transformers</span> through TACTiS-2. Conducted an extensive 
        hyperparameter tuning study for these <span className="font-bold">multimodal transformers</span> I developed.
      </p>
    ),
  },
  {
    title: "AUG 2023 - JAN 2024 ",
    content: (
      <p className="text-xs md:text-sm font-normal opacity-90">
        <span className="text-base md:text-lg font-semibold">AI4MUSICIANS</span>: Designed a CNN-based <span className="font-bold">computer vision</span> pipeline to analyze digitized music scores, using <span className="font-bold">convolutional layers</span> to detect and normalize dynamic range (decibel) variations across compositions. Also adapted these architectures to capture <span className="font-bold">temporal and structural features</span> in musical notation data, while building standardized preprocessing and model integration pipelines for reproducibility.
      </p>
    ),
  },
]

function AboutPage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  return (
    <section
      id="about"
      className="px-4 py-40 md:py-48 bg-transparent text-[#f1e4ff]"
      style={{ scrollMarginTop: headerHeight + 16, minHeight: `calc(180dvh - ${headerHeight}px)` }}
    >
      <motion.div
        className="mx-auto w-full max-w-6xl flex flex-col gap-10 md:flex-row md:items-start md:gap-10"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <div className="w-full md:basis-[45%] md:shrink-0 SpaceGrotesk">
          <h2 className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
            EXPERIENCE
          </h2>
          <Timeline data={ABOUT_TIMELINE_DATA} className="bg-transparent" />
        </div>

        <div className="w-full md:basis-[55%] md:shrink-0 text-left pl-4">
          <h2 className="mb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
            ABOUT ME
          </h2>
          <p className="SpaceGrotesk w-full max-w-[72ch] text-xs sm:text-sm md:text-base leading-relaxed mb-6">
            Third year student at UCI studying applied mathematics and computer science. My interests
            are broad and varied, but I am particularly interested in the study of algorithms, deep learning, and their
            applications to the real world. I take passion in learning new things and love to explore new ideas and
            concepts. You can also find me stargazing, at a beach, or playing sports in my free time. A new love of
            mine that I discovered recently is traveling, and is something that anyone will now find me doing whenever
            given the opportunity. Feel free to reach out to me if you are interested in anything ATLA, The Weeknd,
            AI/ML, or seeing new places. I am always open to new opportunities and collaborations since I love meeting
            new people.
          </p>
          <img
            src="/photos/aboutme.png"
            alt="Mayank"
            className="w-full max-w-[72ch] rounded-lg object-cover aspect-square"
          />
        </div>
      </motion.div>
    </section>
  )
}

function GalleryPage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  // Album covers commented out for now. Uncomment to restore.
  // const albumCovers = [
  //   "https://m.media-amazon.com/images/I/71rtbFVgVuL._UF1000,1000_QL80_.jpg",
  //   "https://m.media-amazon.com/images/I/814htMhuuML._UF1000,1000_QL80_.jpg",
  //   "https://upload.wikimedia.org/wikipedia/en/f/f6/Charlie_Puth_-_Nine_Track_Mind.png",
  //   "https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9",
  //   "https://www.levelman.com/content/images/2022/11/Thank-Me-Later-1.jpg",
  //   "https://upload.wikimedia.org/wikipedia/en/8/8a/Alatprom.jpg",
  //   "https://i1.sndcdn.com/artworks-mVAuDG6uMHzh-0-t500x500.jpg",
  //   "https://m.media-amazon.com/images/I/61nmSDwpCJL._UF1000,1000_QL80_.jpg",
  //   "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png",
  //   "https://i.scdn.co/image/ab67616d0000b2736c20c4638a558132ba95bc39",
  //   "https://upload.wikimedia.org/wikipedia/en/5/5f/Metro_Boomin_-_Heroes_%26_Villains.png",
  //   "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
  //   "https://m.media-amazon.com/images/I/610ps7rUjaL._UF1000,1000_QL80_.jpg",
  //   "https://i.scdn.co/image/ab67616d0000b2737bf1e8d5308b5286c7b2fe5c",
  //   "https://upload.wikimedia.org/wikipedia/en/e/eb/Zayn_%E2%80%93_Icarus_Falls.png",
  //   "https://i.scdn.co/image/ab67616d0000b2738dc0d801766a5aa6a33cbe37",
  //   "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png",
  //   "https://www.shsoutherner.net/wp-content/uploads/2015/12/selena.png",
  //   "https://cdn-images.dzcdn.net/images/cover/d0a6a23eddef45b14563ffbab8f7717b/1900x1900-000000-80-0-0.jpg",
  //   "https://m.media-amazon.com/images/I/81nYjSknM1L._UF1000,1000_QL80_.jpg",
  //   "https://m.media-amazon.com/images/I/71wbwIvy8BL._UF1000,1000_QL80_.jpg",
  //   "https://i.scdn.co/image/ab67616d0000b2737fc4b0598b8cbed5a492d370",
  // ]

  return (
    <section
      id="gallery"
      className="px-4 py-32 text-center bg-transparent text-[#FF1A1A]"
      style={{ scrollMarginTop: headerHeight + 16, minHeight: `calc(180dvh - ${headerHeight}px)` }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
      <h2 className="mb-6 SpaceGrotesk text-base md:text-lg font-semibold tracking-wide">
        GALLERY
      </h2>
      {/* Album cover grid commented out. Uncomment the albumCovers array and this block to restore. */}
      {/* <div className="flex flex-wrap items-start justify-center gap-2 SpaceGrotesk">
        {albumCovers.map((src, i) => (
          <TiltedCard
            key={src}
            imageSrc={src}
            altText={`Album cover ${i + 1}`}
            containerHeight="88px"
            containerWidth="88px"
            imageHeight="88px"
            imageWidth="88px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        ))}
      </div> */}
      </motion.div>
    </section>
  )
}

function ProjectsPage({ headerHeight, isActive }: { headerHeight: number; isActive: boolean }) {
  return (
    <section
      id="projects"
      className="px-4 pt-20 pb-32 text-center bg-transparent text-white"
      style={{ scrollMarginTop: headerHeight + 16, minHeight: `calc(180dvh - ${headerHeight}px)` }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, delay: isActive ? 0.15 : 0 }}
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

  useLayoutEffect(() => {
    if (!headerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height)
    })
    ro.observe(headerRef.current)
    return () => ro.disconnect()
  }, [])

  const [activeSection, setActiveSection] = useState<"home" | "about" | "gallery" | "projects">("home")

  const themes = useMemo(
    () => ({
      home: { bg: "bg-white", text: "text-black", hex: "#000000", bgValue: "#ffffff" },
      about: { bg: "bg-[#5a2944]", text: "text-[#f1e4ff]", hex: "#f1e4ff", bgValue: "#5a2944" },
      gallery: { bg: "bg-[#1D4ED8]", text: "text-[#FF1A1A]", hex: "#FF1A1A", bgValue: "#1D4ED8" },
      projects: { bg: "bg-orange-500", text: "text-white", hex: "#FFFFFF", bgValue: "#f97316" },
    }),
    []
  )

  const headerTheme = themes[activeSection]

  useEffect(() => {
    const sectionIds: Array<"home" | "about" | "gallery" | "projects"> = ["home", "about", "gallery", "projects"]
    const triggerY = headerHeight + 120

    function updateActiveSection() {
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
              <div className="flex w-full flex-row flex-nowrap items-center justify-evenly gap-4 text-xs">
                <a href="#home" className="underline">
                  HOME
                </a>
                <a href="#about" className="underline">
                  ABOUT ME
                </a>
                <a href="#gallery" className="underline">
                  GALLERY
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
          <GalleryPage headerHeight={headerHeight} isActive={activeSection === "gallery"} />
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