function Nav() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm flex gap-6 px-8 py-4">
            <a href="#home" className="text-white hover:text-blue-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-blue-300 transition-colors">Projects</a>
            <a href="#apipage" className="text-white hover:text-blue-300 transition-colors">API Page</a>
        </nav>
    )
}

export default Nav 