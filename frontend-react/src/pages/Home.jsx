import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Home() {
  const features = [
    {
      title: 'Joint Forces',
      description: 'Wir machen alle zwei Monate mindestens ein Joint Forces Training um die Zusammenarbeit im Team zu stärken.',
      image: '/Pictures/polaris_closeup.jpg'
    },
    {
      title: 'Medical',
      description: 'Von Erstversorgung bis Lazarett - unser Medic-Team sorgt für realistische Einsätze.',
      image: '/Pictures/medic_pic.jpg'
    },
    {
      title: 'Logistik',
      description: 'Ob Nachladen von Torpedos oder auch Belieferung von Rohstoffen, unsere Logistik Truppe macht\'s.',
      image: '/Pictures/starlancer_logistik.jpg'
    }
  ]

  const sections = [
    {
      title: 'Multicrew',
      description: 'Wir führen regelmäßige Trainingseinheiten auf den großen Schiffen durch, um eine effektive Mannschaft zu erhalten, damit wir auch in größeren Gefechten bestehen können.',
      image: '/Pictures/ships_multicrew.jpg',
      reverse: false
    },
    {
      title: 'Salvage',
      description: 'Damit wir unsere finanzielle Unabhängigkeit behalten können, sind wir durchgehend mit unserer Flotte an Salvageschiffen unterwegs, um Credits zu verdienen.',
      image: '/Pictures/reclaimer_salvage.png',
      reverse: true
    },
    {
      title: 'FPS',
      description: 'Einer unserer Schwerpunkte im Spiel. Wir arbeiten als effektive Bodentruppe mit anderen Truppenteilen zusammen, um unser Ziel zu erreichen.',
      image: '/Pictures/sillouets_fps.jpg',
      reverse: false
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-iris-black via-iris-gray to-iris-black py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,20,60,0.15),transparent_70%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-[0_0_30px_rgba(220,20,60,0.5)]">
            Willkommen bei I.R.I.S.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unser{' '}
            <a 
              href="https://discord.gg/R7befRbN7G" 
              className="text-iris-red-light hover:text-white transition-colors font-semibold"
            >
              Discord
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-iris-red/50 transition-all">
                Unser Blog
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full text-white border-2 border-white hover:bg-white hover:text-iris-black">
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 border-transparent hover:border-iris-red transition-all duration-300 hover:shadow-lg hover:shadow-iris-red/20 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iris-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-iris-red">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detail Sections */}
      {sections.map((section, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 1 ? 'bg-gradient-to-br from-gray-50 to-white dark:from-iris-gray-dark dark:to-iris-black' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${section.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${section.reverse ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-iris-red mb-6 border-l-4 border-iris-red pl-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className={`${section.reverse ? 'md:order-1' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-iris-red/30 transition-shadow group">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-iris-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Floating Contact Button */}
      <Link to="/contact">
        <Button 
          size="lg" 
          className="fixed bottom-8 right-8 rounded-full shadow-2xl hover:shadow-iris-red/60 transition-all z-40 px-6 py-6"
        >
          💬 Kontakt
        </Button>
      </Link>
    </div>
  )
}
