"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Briefcase, Award } from "lucide-react"

// Experience Section Component
export default function ExperienceSection() {
    return (
        <section id="experience" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Experience & Achievements</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        My journey building real-world projects and competing in hackathons
                    </p>

                    {/* Achievements / Awards */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="w-6 h-6 text-yellow-400" /> Achievements & Awards
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <AchievementCard
                                title="1st Runner-Up"
                                event="Zelestra AWS ML Challenge 2025"
                                description="Competed in the Zelestra AWS Machine Learning Challenge 2025 and secured 1st Runner-Up position."
                                icon="🥈"
                                color="from-blue-600/20 to-blue-900/20"
                            />
                            <AchievementCard
                                title="Finalist"
                                event="Virtuasa Jatayu Hackathon Season 5"
                                description="Selected as a finalist in Jatayu Season 5 — contributed to TradeDoc AI, an enterprise derivative trade automation platform."
                                icon="🏅"
                                color="from-purple-600/20 to-purple-900/20"
                            />
                            <AchievementCard
                                title="Top 10"
                                event="CodeClash Hackathon – Divya Drishti"
                                description="Reached top 10 in the CodeClash hackathon with Divya Drishti, a Next.js-powered web platform."
                                icon="🎯"
                                color="from-green-600/20 to-green-900/20"
                            />
                        </div>
                    </div>

                    {/* Hackathon Projects */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-blue-400" /> Hackathon Experience
                        </h3>
                        <div className="space-y-8">
                            <ExperienceCard
                                company="Zelestra AWS ML Challenge 2025"
                                position="1st Runner-Up"
                                period="2025"
                                description="Secured the 1st Runner-Up position by building and deploying an innovative machine learning solution."
                                achievements={[
                                    "Competed against top teams to deliver a robust ML model",
                                    "Leveraged AWS services and advanced machine learning techniques",
                                    "Recognized for innovation, problem-solving, and technical excellence"
                                ]}
                                technologies={["AWS", "Machine Learning", "Python"]}
                            />
                            <ExperienceCard
                                company="Virtuasa – Jatayu Hackathon Season 5"
                                position="Backend Developer (Finalist)"
                                period="2026"
                                description="Developed the backend for TradeDoc AI — an enterprise-grade AI-powered document generation and validation platform for OTC derivative trade agreements. Built using Flask, LangGraph, and Google Gemini 2.5."
                                achievements={[
                                    "Built Flask REST API handling JWT auth, rate limiting, and PDF compilation endpoints",
                                    "Integrated LangGraph agentic pipeline for AI-driven document classification and extraction",
                                    "Implemented MongoDB + GCS storage for trade records and PDF binaries",
                                    "Enabled multimodal validation comparing raw email text to compiled PDFs"
                                ]}
                                technologies={["Flask", "LangGraph", "Google Gemini", "MongoDB", "GCS", "Docker", "Python", "PyPDF"]}
                            />
                            <ExperienceCard
                                company="CodeClash Hackathon – Divya Drishti"
                                position="Developer (Top 10)"
                                period="2024"
                                description="Built Divya Drishti — a full-stack Next.js web platform, reaching the top 10 position in the CodeClash hackathon."
                                achievements={[
                                    "Developed responsive UI using Next.js and TypeScript",
                                    "Implemented core platform features and SOS functionality",
                                    "Collaborated with team members under hackathon time constraints"
                                ]}
                                technologies={["Next.js", "TypeScript", "React", "CSS"]}
                            />
                            <ExperienceCard
                                company="Odoo Hackathon 2025"
                                position="Full-Stack Developer"
                                period="2025"
                                description="Developed Turf Spot — a comprehensive sports venue booking platform to streamline turf reservations for athletes and facility owners."
                                achievements={[
                                    "Engineered real-time slot availability and booking system",
                                    "Implemented secure user authentication and interactive management dashboards",
                                    "Built full-stack solution with modern frontend and robust backend"
                                ]}
                                technologies={["Next.js", "Node.js", "MongoDB", "Authentication"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function AchievementCard(props: any) {
    const { title, event, description, icon, color } = props;
    return (
        <Card className={`bg-gradient-to-br ${color} backdrop-blur-md border-white/10 overflow-hidden hover:-translate-y-1 hover:border-white/30 transition-all duration-300`}>
            <CardContent className="p-6">
                <div className="text-4xl mb-3">{icon}</div>
                <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
                <p className="text-blue-300 text-sm font-medium mb-3">{event}</p>
                <p className="text-zinc-300 text-sm">{description}</p>
            </CardContent>
        </Card>
    )
}

function ExperienceCard(props: any) {
    const { company, position, period, description, achievements, technologies } = props;

    return (
        <Card className="group bg-black/40 backdrop-blur-md border-white/10 overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">{company}</h3>
                            <div className="flex items-center text-zinc-400 mt-1 md:mt-0">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{period}</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">{position}</h4>
                        <p className="text-zinc-200 leading-relaxed mb-4">{description}</p>

                        <div className="mb-4">
                            <h5 className="text-white font-medium mb-2 flex items-center">
                                <Award className="w-4 h-4 mr-2 text-zinc-400" /> Key Achievements
                            </h5>
                            <ul className="space-y-2">
                                {achievements.map((achievement:any, index:any) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-zinc-200">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech:any, index:any) => (
                                <Badge key={index} className="bg-white/10 text-zinc-300 hover:bg-white/15">{tech}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}