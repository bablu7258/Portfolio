"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
  featured?: boolean
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl, featured = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className={`relative h-full overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 ${
          featured
            ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
            : "border-slate-700/50 group-hover:border-cyan-500/50"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute -inset-1 rounded-xl blur opacity-25 transition duration-1000 ${
            featured
              ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-100"
              : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:opacity-100"
          }`}
        ></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            {featured && (
              <div className="absolute top-3 left-3 z-20">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-slate-700/50 hover:bg-slate-700 text-slate-300 border-slate-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 border-t border-slate-700/50">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700/50"
                asChild
              >
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 border-0 text-white"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-slate-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
