import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Calendar } from 'lucide-react'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch blogs from Spring Boot backend
    axios.get('/api/blogs')
      .then(response => {
        setBlogs(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error)
        setLoading(false)
        // Mock data for development
        setBlogs([
          {
            id: 1,
            title: 'Willkommen auf unserem neuen Blog',
            content: 'Hier steht alles, was in letzter Zeit passiert ist. Wir freuen uns, euch über unsere neuesten Aktivitäten und Events auf dem Laufenden zu halten.',
            timestamp: new Date().toISOString(),
            imageUrl: '/Pictures/polaris_closeup.jpg'
          },
          {
            id: 2,
            title: 'Joint Forces Training',
            content: 'Unser letztes Joint Forces Training war ein voller Erfolg! Alle Teams haben hervorragend zusammengearbeitet.',
            timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            imageUrl: '/Pictures/ships_multicrew.jpg'
          }
        ])
      })
  }, [])

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-iris-black dark:to-iris-gray-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-iris-red mb-4">
            I.R.I.S. Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hier steht alles, was in letzter Zeit passiert ist.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-iris-red"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Lädt...</p>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="overflow-hidden border-2 border-transparent hover:border-iris-red transition-all duration-300 hover:shadow-xl hover:shadow-iris-red/20 hover:-translate-y-1 group"
            >
              {/* Blog Image */}
              {blog.imageUrl && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iris-black/80 via-iris-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                      {blog.title}
                    </h2>
                  </div>
                </div>
              )}

              {/* Blog Content */}
              <CardHeader className={!blog.imageUrl ? '' : 'pt-4'}>
                {!blog.imageUrl && (
                  <CardTitle className="text-2xl text-iris-red">
                    {blog.title}
                  </CardTitle>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-iris-red" />
                  <span>{formatDate(blog.timestamp)}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed whitespace-pre-wrap">
                  {blog.content}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Noch keine Blogeinträge vorhanden.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
