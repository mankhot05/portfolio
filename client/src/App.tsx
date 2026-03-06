// @ts-nocheck
import { useRef, useState, useLayoutEffect } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
// import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
import FadeContent from "./components/FadeContent"
import TiltedCard from "./components/TiltedCard"
import Masonry from "./components/Masonry"

function HomePage({ headerHeight }: { headerHeight: number }) {
  return (
    <section
      id="home"
      className="relative flex flex-col"
      style={{ minHeight: `calc(100dvh - ${headerHeight}px)` }}
    >
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <span className="max-w-[92vw] px-2 text-center SpaceGrotesk font-bold text-red-600 text-[clamp(3rem,14vw,12rem)] leading-[0.9] tracking-tight select-none text-balance">
          MAYANK HOTHUR
        </span>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section id="about" className="px-4 py-12 text-left">
      <div className="w-full flex flex-col gap-8 lg:flex-row">
        <div className="lg:basis-[60%] lg:max-w-[60%]">
          <h2 className="mb-4 text-sm font-semibold text-black">about me</h2>
          <p className="text-black">
            third year student at UCI studying applied mathematics and computer science. My interests
            are broad and varied, but I am particularly interested in the study of algorithms, deep learning, and their
            applications to the real world. I take passion in learning new things and love to explore new ideas and
            concepts. You can also find me stargazing, at a beach, or playing sports in my free time. A new love of
            mine that I discovered recently is traveling, and is something that anyone will now find me doing whenever
            given the opportunity.
            
            Feel free to reach out to me if you are interested in anything atla, the weeknd, AI/ML, or seeing new places. 
            I am always open to new opportunities and collaborations since I love meeting new people.
          </p>
        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  const albumCovers = [
    "https://m.media-amazon.com/images/I/71rtbFVgVuL._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/814htMhuuML._UF1000,1000_QL80_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/f/f6/Charlie_Puth_-_Nine_Track_Mind.png",
    "https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9",
    "https://www.levelman.com/content/images/2022/11/Thank-Me-Later-1.jpg",
    "https://upload.wikimedia.org/wikipedia/en/8/8a/Alatprom.jpg",
    "https://i1.sndcdn.com/artworks-mVAuDG6uMHzh-0-t500x500.jpg",
    "https://m.media-amazon.com/images/I/61nmSDwpCJL._UF1000,1000_QL80_.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png",
    "https://i.scdn.co/image/ab67616d0000b2736c20c4638a558132ba95bc39",
    "https://upload.wikimedia.org/wikipedia/en/5/5f/Metro_Boomin_-_Heroes_%26_Villains.png",
    "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
    "https://m.media-amazon.com/images/I/610ps7rUjaL._UF1000,1000_QL80_.jpg",
    "https://i.scdn.co/image/ab67616d0000b2737bf1e8d5308b5286c7b2fe5c",
    "https://upload.wikimedia.org/wikipedia/en/e/eb/Zayn_%E2%80%93_Icarus_Falls.png",
    "https://i.scdn.co/image/ab67616d0000b2738dc0d801766a5aa6a33cbe37",
    "https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png",
    "https://www.shsoutherner.net/wp-content/uploads/2015/12/selena.png",
    "https://cdn-images.dzcdn.net/images/cover/d0a6a23eddef45b14563ffbab8f7717b/1900x1900-000000-80-0-0.jpg",
    "https://m.media-amazon.com/images/I/81nYjSknM1L._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71wbwIvy8BL._UF1000,1000_QL80_.jpg",
    "https://i.scdn.co/image/ab67616d0000b2737fc4b0598b8cbed5a492d370",
  ]

  return (
    <section id="gallery" className="px-4 py-12 text-left">
      <h2 className="mb-4 text-sm font-semibold text-black">gallery</h2>
      <div className="flex flex-wrap items-start justify-start gap-2">
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
      </div>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section id="projects" className="px-4 pt-8 pb-8 text-left">
      <div className="flex flex-col items-stretch">
        <h2 className="mb-4 text-sm font-semibold text-black">projects</h2>
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
      </div>
    </section>
  )
}

function App() {
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const location = useLocation()

  useLayoutEffect(() => {
    if (!headerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height)
    })
    ro.observe(headerRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative min-h-[100dvh] bg-white overflow-x-hidden">
      <FadeContent
        key={location.pathname}
        blur={true}
        duration={1500}
        ease="power2.out"
        initialOpacity={0}
        className="relative z-10 flex min-h-[100dvh] flex-col"
      >
        <header
          ref={headerRef}
          className="relative z-10 flex shrink-0 items-start justify-between px-4 pt-2 text-left"
        >
          <div>
            <h2 className="text-sm font-semibold text-black">mayank hothur</h2>
            <h1 className="mt-1 text-xs text-black">education: math-cs @ UCI</h1>
            <p className="mt-2 max-w-xl text-xs text-black">
              currently: machine learning researcher @ cooray group.
            </p>
          </div>
          <nav className="space-y-1 text-right text-xs text-black">
            <Link to="/" className="block underline">
              HOME
            </Link>
            <Link to="/about" className="block underline">
              ABOUT ME
            </Link>
            <Link to="/gallery" className="block underline">
              GALLERY
            </Link>
            <Link to="/projects" className="block underline">
              PROJECTS
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage headerHeight={headerHeight} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage headerHeight={headerHeight} />} />
          </Routes>
        </main>

        <footer className="mt-8 px-4 py-10 text-[17px] text-black">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="font-semibold md:basis-1/3">
              mayank hothur
            </div>
            <div className="text-left md:basis-1/3 md:text-right">
              <p className="mb-3">hothur.mayank@gmail.com</p>
            </div> 
          </div>
        </footer>
      </FadeContent>
    </div>
  )
}

export default App