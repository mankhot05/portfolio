import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ApiPage from "./pages/ApiPage"
import Nav from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App