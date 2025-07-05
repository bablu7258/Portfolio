"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react"

const experiences = [
  {
    title: "Data Science Intern",
    company: "CODTECH IT Solutions",
    period: "2024",
    description:
      "Worked on data analytics projects, created interactive dashboards, and gained hands-on experience with real-world datasets and machine learning implementations.",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "ML Intern",
    company: "NIELIT (National Institute of Electronics & IT)",
    period: "2024",
    description:
      "Developed face mask detection system using computer vision and machine learning. Implemented real-time detection capabilities for public safety applications.",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    title: "Smart India Hackathon",
    company: "Women Safety Presentation",
    period: "2024",
    description:
      "Presented innovative tech-enabled women safety solution. Received recognition for comprehensive approach to safety features and community support systems.",
    icon: <Trophy className="w-5 h-5" />,
    type: "achievement",
  },
  {
    title: "IEEE JNTUH Recognition",
    company: "Technical Excellence",
    period: "2023",
    description:
      "Received appreciation from IEEE JNTUH for outstanding technical contributions and innovative project work in AI and machine learning domain.",
    icon: <Award className="w-5 h-5" />,
    type: "achievement",
  },
  {
    title: "B.Tech AI & Data Science",
    company: "Vardhaman College of Engineering",
    period: "2022 - Present",
    description:
      "Currently pursuing Bachelor's degree with specialization in Artificial Intelligence and Data Science. Maintaining CGPA of 8.5/10 with focus on practical applications.",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-cyan-500 to-blue-500"
      case "achievement":
        return "from-purple-500 to-pink-500"
      case "education":
        return "from-blue-500 to-purple-500"
      default:
        return "from-cyan-500 to-blue-500"
    }
  }

  const getTypeBg = (type: string) => {
    switch (type) {
      case "work":
        return "bg-cyan-500/20"
      case "achievement":
        return "bg-purple-500/20"
      case "education":
        return "bg-blue-500/20"
      default:
        return "bg-cyan-500/20"
    }
  }

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-slate-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:border-cyan-500/50">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${getTypeColor(experience.type)}/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200`}
              ></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${getTypeBg(experience.type)} flex items-center justify-center`}
                  >
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                    <div className="text-slate-400">
                      {experience.company} | {experience.period}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(experience.type)} z-10 flex items-center justify-center shadow-lg`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
