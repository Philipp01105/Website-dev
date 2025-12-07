import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This will be handled by Spring Security
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = '/login-real'
    
    const usernameInput = document.createElement('input')
    usernameInput.type = 'hidden'
    usernameInput.name = 'username'
    usernameInput.value = formData.username
    
    const passwordInput = document.createElement('input')
    passwordInput.type = 'hidden'
    passwordInput.name = 'password'
    passwordInput.value = formData.password
    
    form.appendChild(usernameInput)
    form.appendChild(passwordInput)
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-iris-black via-iris-gray to-iris-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/Pictures/IRIS_logo.png" 
            alt="I.R.I.S. Logo" 
            className="h-24 w-24 mx-auto drop-shadow-[0_0_20px_rgba(220,20,60,0.6)]"
          />
          <h1 className="text-3xl font-bold text-white mt-4">
            Willkommen zurück
          </h1>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-iris-red/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-iris-red">
              Login
            </CardTitle>
            <CardDescription className="text-center">
              Melde dich mit deinen Zugangsdaten an
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold mb-2">
                  Benutzername
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Dein Benutzername"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Passwort
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full mt-6"
              >
                🔐 Anmelden
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Noch kein Konto?{' '}
                <Link 
                  to="/register" 
                  className="text-iris-red hover:text-iris-red-dark font-semibold transition-colors"
                >
                  Jetzt registrieren
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-white hover:text-iris-red-light transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
