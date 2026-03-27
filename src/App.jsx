import { GalaxyHero } from "./components/GalaxyHero"
import { AboutUs } from "./components/AboutUs"
import { ProjectsGallery } from "./components/ProjectsGallery"
import { ContactSection } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="bg-black relative min-h-screen w-full overflow-x-hidden text-white font-sans">
      <GalaxyHero />
      <AboutUs /> 
      <ProjectsGallery />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App