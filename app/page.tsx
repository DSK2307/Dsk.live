import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SolarSystemBackground } from "@/components/solar-system-background"
import { ProjectShowcase } from "@/components/project-showcase"
import { TechStack } from "@/components/tech-stack"
import { ContactSection } from "@/components/contact-section"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import ExperienceSection from "@/components/Experiance"

export default function Home() {
  return (
    <div className="relative container min-h-screen w-full overflow-hidden">
      <div>
        <SolarSystemBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Avatar className="h-32 w-32 mx-auto border-4 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <AvatarImage src="/profile.jpeg" alt="Deo Sagar Kumar" className="object-cover" />
                <AvatarFallback className="bg-gradient-to-br from-gray-900 to-black text-2xl">DSK</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold  mb-6 text-white">
              Deo Sagar Kumar
              <span className="block text-2xl md:text-4xl mt-4 text-zinc-200">Full Stack Developer & AI/ML Engineer</span>
            </h1>
            <p className="text-xl font-medium leading-relaxed text-zinc-200 mb-8 max-w-2xl mx-auto">
              I build intelligent systems and full-stack applications — from AI-powered automation platforms to computer vision pipelines and event management systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition-all hover:-translate-y-0.5" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
            <a href="#about">
              <ChevronDown className="h-8 w-8" />
              <span className="sr-only">Scroll Down</span>
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="bg-black/40 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
                    <div className="space-y-4 text-zinc-200 leading-relaxed">
                      <p>
                        I'm a passionate developer and AI/ML engineer who loves building intelligent, real-world systems. From enterprise trade automation with AI agents to computer vision pipelines for livestock biometrics, I enjoy solving problems that matter.
                      </p>
                      <p>
                        My work spans full-stack development (Next.js, Flask, Python, Node.js), AI/ML integration (LangGraph, TensorFlow, PyTorch, MediaPipe, Gemini), and cloud infrastructure (GCS, MongoDB, Docker).
                      </p>
                      <p>
                        I've competed in multiple hackathons — placing as finalist in Jatayu Season 5 (Virtuasa), top 10 in CodeClash, and winning 1st Runner-Up in the Zelestra AWS ML Challenge 2025. Beyond hackathons, I actively solve algorithmic challenges on LeetCode and Codeforces.
                      </p>
                      <p>
                        I believe in learning by doing — every project is an opportunity to push technical boundaries while delivering clean, scalable, and impactful software.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="bg-black/40 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">What I Do</h3>
                    <ul className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">{service.title}</h4>
                            <p className="text-zinc-300 leading-relaxed">{service.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <ExperienceSection></ExperienceSection>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">My Skills</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
              Technologies and tools I work with
            </p>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
          
            <ProjectShowcase />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Get In Touch</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
              Interested in working together? Let's discuss your project.
            </p>
            <ContactSection />
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "AI/ML Engineering",
    description: "I design and deploy AI pipelines using LangGraph, TensorFlow, PyTorch, MediaPipe, and Google Gemini — from agentic automation to computer vision solutions.",
    icon: <span className="text-blue-400">🤖</span>,
  },
  {
    title: "Full-Stack Web Development",
    description: "I build scalable web applications using Next.js, React, Flask, Node.js, MongoDB, and PostgreSQL — from dashboards to event platforms.",
    icon: <span className="text-blue-400">🌐</span>,
  },
  {
    title: "Backend & API Development",
    description: "I architect robust REST APIs and backend systems with Python (Flask/Django) and Node.js, integrating cloud services like GCS, AWS, and Docker.",
    icon: <span className="text-blue-400">⚙️</span>,
  },
  {
    title: "Competitive Programming",
    description: "Active on LeetCode and Codeforces, solving algorithmic challenges to sharpen problem-solving skills across data structures and algorithms.",
    icon: <span className="text-blue-400">🏆</span>,
  },
];
