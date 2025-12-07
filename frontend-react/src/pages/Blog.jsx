import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent } from '../components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState(null)

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

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-iris-black via-iris-gray-dark to-iris-black">
      {/* Hero Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-iris-red/20 via-transparent to-iris-red/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            I.R.I.S. <span className="text-iris-red">Blog</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Neuigkeiten, Updates und Einblicke aus unserer Community
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        {/* Loading State */}
        {loading && (
          <div className="text-center py-24">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-iris-red border-t-transparent"></div>
            <p className="mt-6 text-xl text-gray-300">Lädt Blog-Einträge...</p>
          </div>
        )}

        {/* Blog Masonry Grid */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card 
                key={blog.id} 
                className={`group overflow-hidden border-0 bg-iris-gray-dark hover:bg-iris-gray shadow-2xl hover:shadow-iris-red/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedBlog(blog)}
              >
                {/* Blog Image */}
                {blog.imageUrl && (
                  <div className={`relative overflow-hidden ${index === 0 ? 'h-96' : 'h-64'}`}>
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-iris-black via-iris-black/60 to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-iris-red px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Calendar className="h-4 w-4 text-white" />
                      <span className="text-white font-semibold text-sm">
                        {formatDate(blog.timestamp)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Blog Content */}
                <CardContent className="p-8 text-white">
                  <h2 className={`font-bold text-iris-red-light mb-4 group-hover:text-iris-red transition-colors ${
                    index === 0 ? 'text-4xl' : 'text-2xl'
                  }`}>
                    {blog.title}
                  </h2>
                  
                  <p className={`text-gray-300 mb-6 line-clamp-3 ${index === 0 ? 'text-lg' : 'text-base'}`}>
                    {blog.content}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{formatTime(blog.timestamp)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-iris-red group-hover:gap-4 transition-all">
                      <span>Weiterlesen</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-24">
            <div className="mb-8">
              <div className="inline-block p-8 bg-iris-gray-dark rounded-full">
                <Calendar className="h-16 w-16 text-iris-red" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Noch keine Blogeinträge
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Schau bald wieder vorbei für Updates und Neuigkeiten!
            </p>
          </div>
        )}
      </div>

      {/* Blog Modal (if needed later) */}
      {selectedBlog && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div className="bg-iris-gray-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {selectedBlog.imageUrl && (
              <img 
                src={selectedBlog.imageUrl} 
                alt={selectedBlog.title}
                className="w-full h-96 object-cover"
              />
            )}
            <div className="p-8 text-white">
              <h2 className="text-4xl font-bold text-iris-red mb-4">{selectedBlog.title}</h2>
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(selectedBlog.timestamp)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{formatTime(selectedBlog.timestamp)}</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                {selectedBlog.content}
              </p>
              <Button 
                onClick={() => setSelectedBlog(null)}
                className="mt-8"
              >
                Schließen
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
