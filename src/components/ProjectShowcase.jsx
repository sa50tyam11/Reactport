import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight, Zap } from "lucide-react"

const projects = [
    {
        title: "SENO Studio",
        description: "A revenue-generating freelance web studio targeting local businesses with high-converting, mobile-first websites.",
        year: "2025",
        link: "https://seno-sand.vercel.app/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "NOIDLE Community",
        description: "A cyberpunk-themed landing page for a thriving Discord tech community (100+ members) focused on DSA and Web Dev.",
        year: "2024",
        link: "https://noidle.vercel.app",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "Muzaffarpur Bangles",
        description: "A fully responsive digital storefront designed for a local jewelry business, featuring optimized image loading and an elegant UI.",
        year: "2024",
        link: "https://muzaffarpurbangles.netlify.app/",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "Zephyr",
        description: "A sleek, animation-rich web application built with modern frontend technologies, focusing on performance and micro-interactions.",
        year: "2024",
        link: "https://zephyr-mu-henna.vercel.app/",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "Creative Portfolio",
        description: "A minimalist, typography-driven portfolio template demonstrating advanced CSS layout techniques and seamless navigation.",
        year: "2024",
        link: "https://skj-seno.netlify.app",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "Sweet Layers",
        description: "A fully responsive, beautifully designed cake shop landing page optimized for mobile users and local discovery.",
        year: "2024",
        link: "https://github.com/sa50tyam11/Cake-Shop",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1080&q=80",
    },
    {
        title: "Face & Eye Detector",
        description: "A real-time face and eye detection system built in C++ using OpenCV's Haar Cascade classifiers.",
        year: "2023",
        link: "https://github.com/sa50tyam11/face-eye-detection-opencv",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=1080&q=80",
    },
]

export function ProjectShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        const lerp = (start, end, factor) => {
            return start + (end - start) * factor
        }

        const animate = () => {
            setSmoothPosition((prev) => ({
                x: lerp(prev.x, mousePosition.x, 0.15),
                y: lerp(prev.y, mousePosition.y, 0.15),
            }))
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [mousePosition])

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
        setIsVisible(false)
    }

    return (
        <section id="projects" className="py-24 bg-black text-white relative">
            <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-5xl mx-auto px-6">

                <div className="flex flex-col items-center mb-16">
                    <span className="text-purple-400 font-medium mb-2 flex items-center gap-2 tracking-wider text-sm">
                        <Zap className="w-4 h-4" /> SELECTED WORK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects that <br />actually shipped.</h2>
                    <div className="w-24 h-1 bg-purple-500 rounded-full mb-6"></div>
                    <p className="max-w-xl text-center text-gray-400">
                        A collection of live platforms, landing pages, and computer vision systems I've engineered.
                    </p>
                </div>

                {/* Floating Image Reveal Element */}
                <div
                    className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden md:block"
                    style={{
                        left: containerRef.current?.getBoundingClientRect().left ?? 0,
                        top: containerRef.current?.getBoundingClientRect().top ?? 0,
                        transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.8,
                        transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    <div className="relative w-[320px] h-[220px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                        {projects.map((project, index) => (
                            <img
                                key={project.title}
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                                style={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    scale: hoveredIndex === index ? 1 : 1.1,
                                    filter: hoveredIndex === index ? "none" : "blur(10px)",
                                }}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </div>

                {/* Project List */}
                <div className="space-y-0 mt-12">
                    {projects.map((project, index) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group block"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative py-8 border-t border-gray-800 transition-all duration-300 ease-out">
                                {/* Background highlight on hover */}
                                <div
                                    className={`
                    absolute inset-0 -mx-6 px-6 bg-purple-900/10 rounded-xl
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                  `}
                                />

                                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 px-2 md:px-6">
                                    <div className="flex-1 min-w-0">
                                        <div className="inline-flex items-center gap-3">
                                            <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight group-hover:text-purple-400 transition-colors">
                                                <span className="relative">
                                                    {project.title}
                                                </span>
                                            </h3>
                                            <ArrowUpRight
                                                className={`
                          w-5 h-5 md:w-6 md:h-6 text-purple-500
                          transition-all duration-300 ease-out
                          ${hoveredIndex === index
                                                        ? "opacity-100 translate-x-0 translate-y-0"
                                                        : "opacity-0 -translate-x-4 translate-y-4"
                                                    }
                        `}
                                            />
                                        </div>
                                        <p
                                            className={`
                        text-sm md:text-base mt-2 md:mt-3 leading-relaxed
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index ? "text-gray-300" : "text-gray-500"}
                      `}
                                        >
                                            {project.description}
                                        </p>
                                    </div>

                                    <span
                                        className={`
                      text-sm font-mono tracking-widest tabular-nums shrink-0 mt-2 md:mt-0
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-purple-400" : "text-gray-600"}
                    `}
                                    >
                                        {project.year}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                    <div className="border-t border-gray-800" />
                </div>
            </div>
        </section>
    )
}