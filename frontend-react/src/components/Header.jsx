import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun, Home, Newspaper, Mail, LogIn } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/blog', label: 'Blog', icon: Newspaper },
    { to: '/contact', label: 'Kontakt', icon: Mail },
    { to: '/login', label: 'Login', icon: LogIn },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-iris-black/95 backdrop-blur-lg border-b-2 border-iris-red shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <img 
                src="/Pictures/IRIS_logo.png" 
                alt="I.R.I.S. Logo" 
                className="h-12 w-12 drop-shadow-[0_0_15px_rgba(220,20,60,0.8)]"
              />
              <div className="absolute inset-0 bg-iris-red rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-white tracking-tight block">
                I.R.I.S.
              </span>
              <span className="text-xs text-iris-red font-semibold tracking-wider">
                ORGANIZATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.to} to={link.to}>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-iris-red hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Button>
                </Link>
              )
            })}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-white hover:bg-iris-red transition-all duration-300 ml-2"
              title="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-iris-red hover:bg-iris-red-dark transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-3 border-t-2 border-iris-red/30 animate-in slide-in-from-top-5">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-white hover:bg-iris-red hover:text-white transition-all duration-300 text-lg py-6 flex items-center gap-3"
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </Link>
              )
            })}
            <Button 
              variant="ghost" 
              onClick={() => {
                toggleTheme()
                setIsMenuOpen(false)
              }}
              className="w-full justify-start text-white hover:bg-iris-red transition-all duration-300 text-lg py-6 flex items-center gap-3"
            >
              {isDark ? (
                <>
                  <Sun className="h-5 w-5" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  Dark Mode
                </>
              )}
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
