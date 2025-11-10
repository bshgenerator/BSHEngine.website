import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import QuickStart from './components/sections/QuickStart'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-x-hidden">
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

export default App

