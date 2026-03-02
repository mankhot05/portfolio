import ApiSection from "./components/ApiSection"
import MagicBento from "./components/MagicBento"
import Particles from "./components/Particles"
import FadeContent from "./components/FadeContent"


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
      <FadeContent blur={true} duration={1000} ease="power2.out" initialOpacity={0} className="relative z-10">
        {/* <CardNav
          logo=""
          items={navItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        /> */}
        <section id="home" className="min-h-screen flex items-start justify-between px-4 pt-2 text-left">
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
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-black mb-4">gallery</h2>
            <p className="text-black text-xs">
              gallery coming soon.
            </p>
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