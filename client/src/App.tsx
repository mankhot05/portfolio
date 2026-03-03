// @ts-nocheck
import { useRef, useState, useLayoutEffect } from "react"
// import ApiSection from "./components/ApiSection"
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
              <a href="#gallery" className="underline block">gallery</a>
              <a href="#projects" className="underline block">projects</a>
            </nav>
          </div>
          <div
            className="absolute left-0 right-0 bottom-0 overflow-hidden z-0"
            style={{ top: headerHeight + 24 }}
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
            <span className="pinyon-script-regular font-bold text-red-600 text-[clamp(4rem,18vw,14rem)] leading-none select-none">
              Mayank Hothur
            </span>
          </div>
        </section>
        <section id="about" className="px-4 py-12 text-left">
          <div className="w-full flex flex-col gap-8 lg:flex-row">
            <div className="lg:basis-[37%] lg:max-w-[37%]">
              <h2 className="text-sm font-semibold text-black mb-4">about me</h2>
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
            <div id="gallery" className="lg:basis-[63%] lg:max-w-[63%]">
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
                  "https://i.scdn.co/image/ab67616d0000b2737fc4b0598b8cbed5a492d370"
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
          </div>
        </section>
        <section id="projects" className="px-4 pt-8 pb-8 text-left">
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
        {/* <section id="apipage" className="min-h-screen px-4 py-20 text-left">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-black mb-4">api page</h2>
            <ApiSection />
          </div>
        </section> */}
        <footer className="text-black px-4 py-10 mt-8 text-[17px]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="font-semibold md:basis-1/3">
              mayank hothur
            </div>
            <nav className="space-y-2 text-left md:text-center md:basis-1/3">
              <a href="#home" className="block">home</a>
              <a href="#about" className="block">about me</a>
              <a href="#gallery" className="block">gallery</a>
              <a href="#projects" className="block">projects</a>
            </nav>
            <div className="text-left md:text-right md:basis-1/3">
              <p className="font-semibold mb-1">Let&apos;s connect!</p>
              <p className="mb-3">hothur.mayank@gmail.com</p>
              <div className="flex items-center gap-3 md:justify-end">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/986/885/small/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                    alt="Instagram logo"
                    className="h-7 w-7 object-contain"
                  />
                </a>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="discord"
                >
                  <img
                    src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png"
                    alt="Discord logo"
                    className="h-7 w-7 object-contain"
                  />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToyykSAAgMHoag3R0yWEQkvvJ7lN0vNR2Pw&s"
                    alt="GitHub logo"
                    className="h-7 w-7 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  )
}

export default App