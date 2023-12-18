
import styles from './App.module.css'
import AboutSection from './components/about/about'
import ContactUsSection from './components/contacts/contacts'
import ExperienceSection from './components/experience/experience'
import HeroSection from './components/hero section/hero'
import Navbar from './components/navbar/navbar'
import ProjectsSection from './components/project/projects'
import ServicesSection from './components/services/services'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactUsSection />
    </div>
  )
}

export default App
