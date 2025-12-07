import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, Users, Stethoscope, Package, Ship, Wrench, Target } from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'Joint Forces',
      description: 'Wir machen alle zwei Monate mindestens ein Joint Forces Training um die Zusammenarbeit im Team zu stärken.',
      image: '/Pictures/polaris_closeup.jpg',
      icon: Users
    },
    {
      title: 'Medical',
      description: 'Von Erstversorgung bis Lazarett - unser Medic-Team sorgt für realistische Einsätze.',
      image: '/Pictures/medic_pic.jpg',
      icon: Stethoscope
    },
    {
      title: 'Logistik',
      description: 'Ob Nachladen von Torpedos oder auch Belieferung von Rohstoffen, unsere Logistik Truppe macht\'s.',
      image: '/Pictures/starlancer_logistik.jpg',
      icon: Package
    }
  ]

  const capabilities = [
    {
      title: 'Multicrew',
      description: 'Wir führen regelmäßige Trainingseinheiten auf den großen Schiffen durch, um eine effektive Mannschaft zu erhalten, damit wir auch in größeren Gefechten bestehen können.',
      image: '/Pictures/ships_multicrew.jpg',
      icon: Ship
    },
    {
      title: 'Salvage',
      description: 'Damit wir unsere finanzielle Unabhängigkeit behalten können, sind wir durchgehend mit unserer Flotte an Salvageschiffen unterwegs, um Credits zu verdienen.',
      image: '/Pictures/reclaimer_salvage.png',
      icon: Wrench
    },
    {
      title: 'FPS',
      description: 'Einer unserer Schwerpunkte im Spiel. Wir arbeiten als effektive Bodentruppe mit anderen Truppenteilen zusammen, um unser Ziel zu erreichen.',
      image: '/Pictures/sillouets_fps.jpg',
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-iris-black dark:via-iris-gray-dark dark:to-iris-black">
      {/* Hero Section - Fullscreen with Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Pictures/ships_multicrew.jpg" 
            alt="I.R.I.S. Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-iris-black/90 via-iris-black/80 to-iris-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-iris-red/20 via-transparent to-iris-red/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 inline-block">
            <img 
              src="/Pictures/IRIS_logo.png" 
              alt="I.R.I.S. Logo" 
              className="h-32 w-32 mx-auto drop-shadow-[0_0_50px_rgba(220,20,60,0.8)] animate-pulse"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-iris-red-light to-white">
              I.R.I.S.
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
            Deutschsprachige Star Citizen Organisation
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Bodenkampf • Logistik • Luftbereich • Salvage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/blog">
              <Button size="lg" className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-iris-red/80 transition-all transform hover:scale-105 bg-iris-red hover:bg-iris-red-dark">
                Unser Blog <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a 
              href="https://discord.gg/R7befRbN7G" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 rounded-full text-white border-3 border-white hover:bg-white hover:text-iris-black transition-all transform hover:scale-105">
                Join Discord
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-iris-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-iris-red mb-2">3+</div>
              <div className="text-xl text-gray-300">Spezialisierungen</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-iris-red mb-2">24/7</div>
              <div className="text-xl text-gray-300">Aktive Community</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-iris-red mb-2">100%</div>
              <div className="text-xl text-gray-300">Teamwork</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-iris-red mb-4">Unsere Stärken</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Von taktischen Einsätzen bis hin zu komplexen Operationen - wir sind für jede Herausforderung bereit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-iris-red/30 transition-all duration-500 transform hover:-translate-y-4"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-iris-black via-iris-black/80 to-iris-black/40" />
                  </div>

                  {/* Content */}
                  <CardContent className="relative z-10 p-8 h-80 flex flex-col justify-end text-white">
                    <div className="mb-4 inline-block p-4 bg-iris-red rounded-full w-fit">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section - Full Width Cards */}
      <section className="py-24 bg-white dark:bg-iris-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-iris-red mb-4">Unsere Fähigkeiten</h2>
          </div>

          <div className="space-y-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              const isEven = index % 2 === 0
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-gradient-to-br from-iris-gray-dark to-iris-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-iris-red/40 transition-all duration-500 p-8 md:p-12`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img 
                        src={capability.image} 
                        alt={capability.title}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-iris-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 text-white">
                    <div className="inline-block p-4 bg-iris-red rounded-full mb-6">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6">{capability.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                      {capability.description}
                    </p>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-iris-black">
                        Mehr erfahren <ArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-iris-red via-iris-red-dark to-iris-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/Pictures/polaris_closeup.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Bereit, Teil von I.R.I.S. zu werden?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-100">
            Schließe dich unserer Community an und erlebe Star Citizen auf einem neuen Level.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-xl px-12 py-8 bg-white text-iris-black hover:bg-gray-100 rounded-full shadow-2xl transform hover:scale-105 transition-all">
                Kontaktiere uns
              </Button>
            </Link>
            <a 
              href="https://discord.gg/R7befRbN7G" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-white text-white hover:bg-white hover:text-iris-black rounded-full transform hover:scale-105 transition-all">
                Discord beitreten
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
