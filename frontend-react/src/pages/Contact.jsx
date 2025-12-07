import { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'

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
      alert(`Danke für dein Feedback, ${formData.name}!`)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-iris-black dark:to-iris-gray-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-iris-red mb-4">
              Kontaktiere uns!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Wir freuen uns auf deine Nachricht
            </p>
          </div>

          {/* Info Card */}
          <Card className="mb-8 border-l-4 border-iris-red">
            <CardHeader>
              <CardTitle className="text-iris-red">Informationen:</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Halte dich an die gleichen Regeln wie auf dem Discord Server. 
                Falls du eine Beschwerde anonym schicken möchtest, dann gib in "Name" Anonym an.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Schreib uns eine Nachricht</CardTitle>
              <CardDescription>
                Fülle das Formular aus und wir werden uns so schnell wie möglich bei dir melden.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Discord username"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Deine Nachricht..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[200px]"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-300">
                      Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Wird gesendet...
                    </>
                  ) : (
                    '📧 Nachricht abschicken'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Du kannst uns auch direkt auf{' '}
              <a 
                href="https://discord.gg/R7befRbN7G" 
                className="text-iris-red hover:text-iris-red-dark font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              {' '}erreichen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
