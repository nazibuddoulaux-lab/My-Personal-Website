import { useScrollReveal } from '../hooks/useScrollReveal'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectsShowcase from '../components/ProjectsShowcase'
import AboutIntro from '../components/AboutIntro'
import StatsGrid from '../components/StatsGrid'
import CaseStudyFeature from '../components/CaseStudyFeature'
import GalleryRow from '../components/GalleryRow'
import Footer from '../components/Footer'

function Home() {
  useScrollReveal()

  return (
    <div className="page">
      <Header />
      <Hero />
      <ProjectsShowcase />
      <AboutIntro />
      <StatsGrid />
      <CaseStudyFeature />
      <GalleryRow />
      <Footer />
    </div>
  )
}

export default Home
