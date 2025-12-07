import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-iris-red bg-gradient-to-r from-iris-black to-iris-gray-dark backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/Pictures/IRIS_logo.png" 
              alt="I.R.I.S. Logo" 
              className="h-14 w-14 drop-shadow-[0_0_10px_rgba(220,20,60,0.5)]"
            />
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              I.R.I.S.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/blog">
              <Button variant="outline" className="text-white border-iris-red">
                📰 Blog
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-iris-red">
                ✉️ Contact
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="default">
                🔐 Login
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-white hover:bg-iris-gray-light"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-iris-red">
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white">
                📰 Blog
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white">
                ✉️ Contact
              </Button>
            </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" className="w-full">
                🔐 Login
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              onClick={toggleTheme}
              className="w-full justify-start text-white"
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
