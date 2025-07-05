import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Download, Code, Brain, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function DeekshithPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 mb-4">
                <span className="relative z-10 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Full-Stack Developer & AI Explorer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Deekshith
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 font-medium">
              <span className="text-cyan-400">Building Tech</span> That <span className="text-purple-400">Matters</span>
            </div>
            <p className="text-lg text-slate-400 max-w-[600px] leading-relaxed">
              Full-Stack Developer passionate about AI/ML and creating intelligent solutions. Currently pursuing B.Tech
              in AI & Data Science with 8.5 CGPA, ready to make an impact at top tech companies.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">8.5</div>
                <div className="text-sm text-slate-500">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">6+</div>
                <div className="text-sm text-slate-500">Certifications</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 border-0 text-white">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/deekshith" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/deekshith" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:deekshith@example.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My journey in tech" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="V Deekshith Kumar Chary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold">AI & Full-Stack Developer</h3>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm a passionate B.Tech student specializing in AI & Data Science at Vardhaman College of
                    Engineering, with a strong foundation in full-stack development and machine learning.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    My journey combines the creativity of web development with the analytical power of AI. I've worked
                    on projects ranging from lung cancer detection systems to interactive web applications, always
                    focusing on creating technology that makes a real impact.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-700">
                    <div className="space-y-2">
                      <div className="text-sm text-slate-500">Education</div>
                      <div className="font-medium">B.Tech AI & Data Science</div>
                      <div className="text-sm text-cyan-400">CGPA: 8.5/10</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-500">College</div>
                      <div className="font-medium">Vardhaman College</div>
                      <div className="text-sm text-slate-400">of Engineering</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-500">Focus Areas</div>
                      <div className="font-medium">Full-Stack & AI/ML</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-slate-500">Status</div>
                      <div className="font-medium text-green-400">Available for hire</div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                    <Button variant="outline" className="border-slate-700 hover:bg-slate-800 bg-transparent">
                      View Certifications
                    </Button>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Frontend */}
            <GlassmorphicCard>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-3">
                  <SkillBadge name="HTML/CSS" level={95} />
                  <SkillBadge name="JavaScript" level={90} />
                  <SkillBadge name="React.js" level={85} />
                  <SkillBadge name="Responsive Design" level={90} />
                </div>
              </div>
            </GlassmorphicCard>

            {/* Backend */}
            <GlassmorphicCard>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Backend & Database</h3>
                <div className="grid grid-cols-2 gap-3">
                  <SkillBadge name="Node.js" level={80} />
                  <SkillBadge name="FastAPI" level={75} />
                  <SkillBadge name="MongoDB" level={80} />
                  <SkillBadge name="MySQL" level={85} />
                </div>
              </div>
            </GlassmorphicCard>

            {/* AI/ML */}
            <GlassmorphicCard>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">AI & Data Science</h3>
                <div className="grid grid-cols-2 gap-3">
                  <SkillBadge name="Python" level={90} />
                  <SkillBadge name="TensorFlow" level={80} />
                  <SkillBadge name="NumPy" level={85} />
                  <SkillBadge name="Matplotlib" level={80} />
                </div>
              </div>
            </GlassmorphicCard>
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Additional Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <SkillBadge name="Git" level={85} />
              <SkillBadge name="Seaborn" level={80} />
              <SkillBadge name="PCA" level={75} />
              <SkillBadge name="KNN" level={80} />
              <SkillBadge name="CBR" level={75} />
              <SkillBadge name="C++" level={70} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Building solutions that matter" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Lung Cancer Detection System"
              description="AI-powered detection system using KNN, CBR, and PCA with ROC analysis. Interface-based tool with improved accuracy through diverse datasets."
              tags={["Python", "KNN", "CBR", "PCA", "Machine Learning"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              featured={true}
            />
            <ProjectCard
              title="Face Mask Detection"
              description="ML-based detection system developed during NIELIT internship for public safety applications with real-time processing capabilities."
              tags={["Python", "OpenCV", "TensorFlow", "Computer Vision"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              featured={true}
            />
            <ProjectCard
              title="Simon Game Website"
              description="Interactive memory game built with vanilla JavaScript. Features responsive design, sound effects, and progressive difficulty levels."
              tags={["HTML", "CSS", "JavaScript", "Game Development"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Women Safety App Concept"
              description="Presented at Smart India Hackathon - comprehensive safety solution with emergency features, location tracking, and community support."
              tags={["React", "Node.js", "MongoDB", "Geolocation API"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Data Analytics Dashboard"
              description="Interactive dashboard for data visualization and insights generation using various datasets during CODTECH internship."
              tags={["Python", "Pandas", "Matplotlib", "Streamlit"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Full-Stack E-commerce"
              description="Complete e-commerce solution with user authentication, payment integration, and admin dashboard for inventory management."
              tags={["React", "Node.js", "MongoDB", "Stripe API"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience & Achievements" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Certifications & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassmorphicCard>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold">IBM Machine Learning</h4>
                  <p className="text-sm text-slate-400">Professional Certificate</p>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold">Coursera Data Science</h4>
                  <p className="text-sm text-slate-400">Specialization Certificate</p>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-slate-400">Full-Stack Certificate</p>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Let's Connect" subtitle="Ready to make an impact together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="font-medium">deekshith@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/deekshith</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">GitHub</div>
                    <div className="font-medium">github.com/deekshith</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Interested in AI/ML roles</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Deekshith
              </span>
              <span className="text-white">Kumar</span>
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              © {new Date().getFullYear()} V Deekshith Kumar Chary. Building Tech That Matters.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/deekshith" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/deekshith" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:deekshith@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
