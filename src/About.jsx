import './About.css'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="flex items-center text-slate-600 hover:text-slate-800 transition"
          title="Back to Home"
          style={{textDecoration:'none'}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 mr-1"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span className="text-base font-medium">Home</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
                About JobConnect
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Connecting Talent With Opportunity
              </h1>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to transform the recruitment landscape by creating meaningful connections between
                employers and job seekers.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Join Our Network
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
                  For Employers
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
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building Careers Since 2015</h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                JobConnect was founded with a simple yet powerful vision: to create a platform where talent meets
                opportunity in a seamless, efficient, and human-centered way.
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
                    <h3 className="text-xl font-bold">Our Beginning</h3>
                    <p className="text-slate-600">
                      Started by a team of HR professionals who saw the need for a more efficient recruitment process,
                      JobConnect has grown from a small startup to an industry leader.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Growth</h3>
                    <p className="text-slate-600">
                      Over the years, we've expanded our services across multiple industries and regions, helping
                      thousands of professionals find their dream jobs.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Our Future</h3>
                    <p className="text-slate-600">
                      We continue to innovate and improve our platform, leveraging the latest technologies to make job
                      searching and recruitment more effective than ever.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact in Numbers</h2>
              <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud of the difference we've made in the professional lives of our users.
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
                <p className="text-sm text-slate-600 text-center">Jobs Posted Monthly</p>
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
                <p className="text-sm text-slate-600 text-center">Partner Companies</p>
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
                <p className="text-sm text-slate-600 text-center">Registered Professionals</p>
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
                <p className="text-sm text-slate-600 text-center">Successful Placements</p>
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
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Experts Behind JobConnect</h2>
              <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team brings together expertise from HR, technology, and business to create the best
                recruitment platform.
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
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Recruitment Solutions</h2>
              <p className="text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of services designed to meet the needs of both job seekers and employers.
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
                  <h3 className="text-xl font-bold">Job Matching</h3>
                  <p className="text-slate-600 mt-2">
                    Our AI-powered algorithm connects candidates with the perfect job opportunities.
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
                  <h3 className="text-xl font-bold">Talent Acquisition</h3>
                  <p className="text-slate-600 mt-2">
                    We help companies find and recruit top talent for their specific needs.
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
                  <h3 className="text-xl font-bold">Career Coaching</h3>
                  <p className="text-slate-600 mt-2">
                    Professional guidance to help job seekers advance their careers.
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
                  <h3 className="text-xl font-bold">Global Network</h3>
                  <p className="text-slate-600 mt-2">Access to international job opportunities and talent pools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
        
    </div>
  )
}
