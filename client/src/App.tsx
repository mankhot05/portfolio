// @ts-nocheck
import { useRef, useState, useLayoutEffect } from "react"
import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
import Particles from "./components/Particles"
import FadeContent from "./components/FadeContent"
import TiltedCard from "./components/TiltedCard"
import Masonry from "./components/Masonry"


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

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#222222"]}
          particleCount={500}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* All content sits on top */}
      <FadeContent blur={true} duration={1500} ease="power2.out" initialOpacity={0} className="relative z-10">
        {/* <CardNav
          logo=""
          items={navItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        /> */}
        <section id="home" className="min-h-screen relative flex flex-col">
          <div ref={headerRef} className="flex items-start justify-between px-4 pt-2 text-left shrink-0 relative z-10">
            <div>
              <h2 className="text-sm font-semibold text-black">mayank hothur</h2>
              <h1 className="mt-1 text-xs text-black">education: math-cs @ UCI</h1>
              <p className="mt-2 text-xs text-black max-w-xl">
                currently: machine learning researcher @ cooray group.
              </p>
            </div>
            <nav className="text-xs text-black text-right space-y-1">
              <a href="#home" className="underline block">home</a>
              <a href="#about" className="underline block">about me</a>
              <a href="#projects" className="underline block">projects</a>
              <a href="#gallery" className="underline block">gallery</a>
              <a href="#apipage" className="underline block">api page</a>
            </nav>
          </div>
          <div
            className="absolute left-0 right-0 bottom-0 overflow-hidden z-0"
            style={{ top: headerHeight }}
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
                { id: "8", img: "/photos/IDG_20260103_175120_468.jpg", url: "#", height: 320 },
                { id: "9", img: "/photos/IMG_9135.JPG", url: "#", height: 280 },
                { id: "10", img: "/photos/IMG_9134.JPG", url: "#", height: 260 },
                { id: "11", img: "/photos/IDG_20251228_124642_421.jpg", url: "#", height: 580 },
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
            <span className="pinyon-script-regular font-bold text-red-600 text-[clamp(4rem,18vw,14rem)] leading-none select-none">
              Mayank Hothur
            </span>
          </div>
        </section>
        <section id="about" className="min-h-screen px-4 py-20 text-left">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-black mb-4">about me</h2>
            <p className="text-black">My name is Mayank Hothur...</p>
          </div>
        </section>
        <section id="projects" className="min-h-screen px-4 py-20 text-left">
          <div className="flex flex-col items-stretch">
            <h2 className="text-sm font-semibold text-black mb-4">projects</h2>
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
        <section id="gallery" className="min-h-screen px-4 py-20 text-left">
          <div className="max-w-[100%]">
            <h2 className="text-sm font-semibold text-black mb-4">gallery</h2>
            <div className="flex flex-wrap gap-2 justify-start items-start">
              {[
                "https://m.media-amazon.com/images/I/71rtbFVgVuL._UF1000,1000_QL80_.jpg",
                "https://m.media-amazon.com/images/I/814htMhuuML._UF1000,1000_QL80_.jpg",
                "https://upload.wikimedia.org/wikipedia/en/f/f6/Charlie_Puth_-_Nine_Track_Mind.png",
                "https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9",
                "https://www.levelman.com/content/images/2022/11/Thank-Me-Later-1.jpg",
                "https://upload.wikimedia.org/wikipedia/en/8/8a/Alatprom.jpg",
                "https://i1.sndcdn.com/artworks-mVAuDG6uMHzh-0-t500x500.jpg",
                "https://m.media-amazon.com/images/I/61nmSDwpCJL._UF1000,1000_QL80_.jpg",
                "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png",
                "https://i.scdn.co/image/ab67616d0000b2736c20c4638a558132ba95bc39"
              ].map((src, i) => (
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
          </div>
        </section>
        <section id="apipage" className="min-h-screen px-4 py-20 text-left">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-black mb-4">api page</h2>
            <ApiSection />
          </div>
        </section>
      </FadeContent>
    </div>
  )
}

export default App