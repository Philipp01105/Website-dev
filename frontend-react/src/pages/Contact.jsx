import { useState } from 'react'
import axios from 'axios'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Get CSRF token from meta tag or cookie
      const csrfToken = document.querySelector('meta[name="_csrf"]')?.content || ''
      const csrfHeader = document.querySelector('meta[name="_csrf_header"]')?.content || 'X-CSRF-TOKEN'

      const params = new URLSearchParams()
      params.append('name', formData.name)
      params.append('message', formData.message)

      await axios.post('/contact', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          [csrfHeader]: csrfToken
        }
      })

      setSubmitStatus('success')
      setFormData({ name: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-iris-black via-iris-gray-dark to-iris-black">
      {/* Hero Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Pictures/polaris_closeup.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-iris-red/30 via-transparent to-iris-red/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-6 bg-iris-red rounded-full mb-6 shadow-2xl">
            <Mail className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Kontaktiere <span className="text-iris-red">uns</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Wir freuen uns auf deine Nachricht und helfen dir gerne weiter
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24 -mt-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              {/* Discord Card */}
              <Card className="bg-gradient-to-br from-iris-gray-dark to-iris-black border-iris-red/30 shadow-2xl hover:shadow-iris-red/40 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-white">
                  <div className="inline-block p-4 bg-iris-red rounded-full mb-4">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Discord</h3>
                  <p className="text-gray-300 mb-6">
                    Join unserem Discord Server für direkten Kontakt und Community-Support.
                  </p>
                  <a 
                    href="https://discord.gg/R7befRbN7G" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-iris-black">
                      Discord beitreten <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card className="bg-gradient-to-br from-iris-gray-dark to-iris-black border-iris-red/30 shadow-2xl">
                <CardContent className="p-8 text-white">
                  <div className="inline-block p-4 bg-iris-red rounded-full mb-4">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Hinweise</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-iris-red flex-shrink-0 mt-0.5" />
                      <span>Halte dich an die Discord-Regeln</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-iris-red flex-shrink-0 mt-0.5" />
                      <span>Für anonyme Nachrichten nutze "Anonym" als Namen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-iris-red flex-shrink-0 mt-0.5" />
                      <span>Wir antworten so schnell wie möglich</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-iris-gray-dark to-iris-black border-iris-red/30 shadow-2xl">
                <CardContent className="p-12">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white mb-3">
                      Schreib uns eine Nachricht
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Fülle das Formular aus und wir melden uns bei dir
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Nachricht gesendet!</h4>
                        <p className="text-green-200">
                          Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-8 p-6 bg-red-500/20 border-2 border-red-500 rounded-xl flex items-start gap-4">
                      <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Fehler!</h4>
                        <p className="text-red-200">
                          Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut oder kontaktiere uns auf Discord.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-white text-lg font-semibold mb-3">
                        Name / Discord Username
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Dein Name oder Discord Username"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 text-lg bg-iris-black border-iris-gray-light text-white placeholder:text-gray-500 focus:border-iris-red focus:ring-iris-red"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white text-lg font-semibold mb-3">
                        Deine Nachricht
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Erzähl uns, wie wir dir helfen können..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full text-lg bg-iris-black border-iris-gray-light text-white placeholder:text-gray-500 focus:border-iris-red focus:ring-iris-red resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-16 text-xl font-bold bg-iris-red hover:bg-iris-red-dark transform hover:scale-105 transition-all shadow-2xl hover:shadow-iris-red/60"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-3 h-6 w-6 animate-spin rounded-full border-3 border-white border-t-transparent" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6" />
                          Nachricht abschicken
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
