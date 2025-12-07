import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-iris-black">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-iris-black via-iris-red/10 to-iris-black border-t-2 border-iris-red py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Logo Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <img 
                    src="/Pictures/IRIS_logo.png" 
                    alt="I.R.I.S. Logo" 
                    className="h-12 w-12"
                  />
                  <span className="text-2xl font-black text-white">I.R.I.S.</span>
                </div>
                <p className="text-gray-400">
                  Deutschsprachige Star Citizen Organisation
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/" className="hover:text-iris-red transition-colors">Home</a></li>
                  <li><a href="/blog" className="hover:text-iris-red transition-colors">Blog</a></li>
                  <li><a href="/contact" className="hover:text-iris-red transition-colors">Kontakt</a></li>
                </ul>
              </div>
              
              {/* Social */}
              <div className="text-center md:text-right">
                <h3 className="text-white font-bold mb-4">Community</h3>
                <a 
                  href="https://discord.gg/R7befRbN7G" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-iris-red hover:bg-iris-red-dark text-white font-semibold rounded-full transition-all transform hover:scale-105"
                >
                  Join Discord
                </a>
              </div>
            </div>
            
            <div className="border-t border-iris-red/30 pt-8 text-center text-gray-500">
              <p>&copy; 2024 I.R.I.S. Organization - All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
