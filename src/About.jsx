import './About.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col min-h-screen">
      <div className="fixed top-4 left-4 z-50">
       
      </div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
              À propos de JobConnect
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Connecter les talents aux opportunités
              </h1>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre mission est de transformer le paysage du recrutement en créant des liens significatifs entre les employeurs et les demandeurs d'emploi.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                 Rejoignez notre réseau
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Pour les employeurs
                </button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative">
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500"
                width={500}
                height={500}
                alt="Team collaboration"
                className="rounded-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Notre histoire</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bâtir des carrières depuis 2015</h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               JobConnect a été fondé avec une vision simple mais puissante : créer une plateforme où les talents rencontrent les opportunités de manière transparente, efficace et centrée sur l'humain.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              width={600}
              height={400}
              alt="Company history"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Nos débuts</h3>
                    <p className="text-slate-600">
                     Créée par une équipe de professionnels des RH qui ont compris la nécessité d'un processus de recrutement plus efficace, JobConnect est passée d'une petite start-up à un leader du secteur.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Notre croissance</h3>
                    <p className="text-slate-600">
                     Au fil des années, nous avons étendu nos services à de nombreux secteurs et régions, aidant ainsi des milliers de professionnels à trouver l'emploi de leurs rêves.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Notre avenir</h3>
                    <p className="text-slate-600">
                   Nous continuons d’innover et d’améliorer notre plateforme, en tirant parti des dernières technologies pour rendre la recherche d’emploi et le recrutement plus efficaces que jamais.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Notre impact en chiffres</h2>
              <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               Nous sommes fiers de la différence que nous avons apportée dans la vie professionnelle de nos utilisateurs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mt-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4 text-slate-800"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <div className="text-3xl font-bold">10K+</div>
                <p className="text-sm text-slate-600 text-center">Offres d'emploi publiées mensuellement</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4 text-slate-800"
                >
                  <path d="M3 21h18"></path>
                  <path d="M19 21v-4"></path>
                  <path d="M19 17a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-8v5Z"></path>
                  <path d="M13 5v8"></path>
                  <path d="M13 5a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2Z"></path>
                  <path d="M5 21V9"></path>
                  <path d="M5 9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2Z"></path>
                </svg>
                <div className="text-3xl font-bold">5K+</div>
                <p className="text-sm text-slate-600 text-center">Entreprises partenaires</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4 text-slate-800"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div className="text-3xl font-bold">1M+</div>
                <p className="text-sm text-slate-600 text-center">Professionnels agréés</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
              <div className="flex flex-col items-center justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 mb-4 text-slate-800"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div className="text-3xl font-bold">85%</div>
                <p className="text-sm text-slate-600 text-center">Placements réussis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Notre équipe</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rencontrez les experts derrière JobConnect</h2>
              <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre équipe diversifiée rassemble l'expertise des RH, de la technologie et des affaires pour créer la meilleure plateforme de recrutement.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Head of Recruitment",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "David Wilson",
                role: "Chief Marketing Officer",
                image: "https://randomuser.me/api/portraits/men/76.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-60 object-cover" style={{width:'300px'}}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Nos services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Solutions de recrutement complètes</h2>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
               Nous offrons une gamme de services conçus pour répondre aux besoins des demandeurs d’emploi et des employeurs.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                <div className="p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 mb-4 text-slate-800"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Correspondance d'emploi</h3>
                  <p className="text-slate-600 mt-2">
                 Notre algorithme basé sur l'IA connecte les candidats aux opportunités d'emploi idéales.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                <div className="p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 mb-4 text-slate-800"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Acquisition de talents</h3>
                  <p className="text-slate-600 mt-2">
                   Nous aidons les entreprises à trouver et à recruter les meilleurs talents pour leurs besoins spécifiques.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                <div className="p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 mb-4 text-slate-800"
                  >
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Coaching de carrière</h3>
                  <p className="text-slate-600 mt-2">
                    Orientation professionnelle pour aider les demandeurs d’emploi à faire progresser leur carrière.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
                <div className="p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 mb-4 text-slate-800"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Réseau mondial</h3>
                  <p className="text-slate-600 mt-2">Accès à des opportunités d’emploi et à des viviers de talents internationaux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
        
    </div>
    </div>
  )
}
