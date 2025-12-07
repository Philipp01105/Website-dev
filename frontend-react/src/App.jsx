import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-iris-black to-iris-gray-dark border-t-2 border-iris-red py-8 mt-auto">
          <div className="container mx-auto px-4 text-center text-white/80">
            <p>&copy; 2024 I.R.I.S. Organization - All rights reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
