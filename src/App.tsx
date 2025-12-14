import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import QuickStart from './components/sections/QuickStart'
import Footer from './components/sections/Footer'
import Releases from './pages/Releases'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden"
      >
        <Hero />
        <Features />
        <Benefits />
        <QuickStart />
      </motion.main>
      <Footer />
    </div>
  )
}

function ReleasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Releases />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<ReleasesPage />} />
      </Routes>
    </Router>
  )
}

export default App
