import './About.css'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
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
            ].map((member) => (
              <div key={member.name} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
