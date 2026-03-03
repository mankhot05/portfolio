// @ts-nocheck
import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
import Particles from "./components/Particles"
import FadeContent from "./components/FadeContent"
import TiltedCard from "./components/TiltedCard"


function App() {
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
          <div className="flex items-start justify-between px-4 pt-2 text-left shrink-0">
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
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="pinyon-script-regular text-black text-[clamp(4rem,18vw,14rem)] leading-none select-none">
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