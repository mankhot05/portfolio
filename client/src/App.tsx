import Nav from "./components/Navbar"

function App() {
  return (
    <div>
      <Nav />
      <section id="home" className="min-h-screen">
        <div className="flex items-center gap-4 m-6 flex-col"> 
            <h2 className="text-xl text-black">Mayank Hothur</h2>
            <h1 className="text-xl font-bold text-black">AI developer</h1>
            <p className="mt-4 text-gray-700"> 
                B.S. Applied and Computational Mathematics, Minor in Computer Science, concentration in Data Science. 
                Currently a machine learning researcher in computational astrophysics: working on NASA SPHEREX. 
            </p>
        </div>
      </section>
      <section id="about" className="min-h-screen">
        <div>
          <h2 className="text-black font-bold text-center px-4">About</h2>
          <p>My name is Mayank Hothur, and I am currently a junior at UC Irvine. I am deeply interested in exploring emerging technologies
            and not only learning about them, but delving into their functionalities and how they are contributing to the current AI revolution. 
            I am most interested in AI/ML development and applications, full-stack, and mathematics. Beyond the curriculum, I enjoy going out to eat, 
            spending time with friends, listening to music, and playing sports. 
          </p>
        </div>
      </section>
      <section id="projects" className="min-h-screen">
        <div className="mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-black mb-6">Projects</h1>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="https://github.com/mankhot05/Asteroid-Game" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 p-6 bg-gray-200 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <div>
                <h2 className="text-black font-semibold text-center px-2">Asteroids</h2>
                <p>A fully functional replica of the classic Asteroids arcade game, 
                built from scratch in Java using the Swing GUI library.</p>
              </div>
            </a>
            <a
              href="https://github.com/mankhot05/vibra" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-96 p-6 bg-gray-200 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <div>
                <h2 className="text-black font-semibold text-center px-2">Vibra</h2>
                <p>A mood-based music recommendation application that suggests songs based on how you're feeling.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="apipage" className="min-h-screen">
        {/* API page content goes here */}
      </section>
    </div>
  )
}

export default App