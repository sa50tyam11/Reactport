import React, { useState, useEffect, useRef } from "react"
import { Code, Layout, Terminal, Zap, Cpu, Hexagon, Download, FolderGit2, Briefcase, CodeXml, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { SpiralAnimation } from "./ui/spiral-animation"

export function AboutUs() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false) // State to track mobile view
    const sectionRef = useRef(null)
    const statsRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)

        // Check screen size on mount and window resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    }
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const skills = [
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Full Stack Engineering",
            description: "Architecting scalable web applications from responsive React frontends to robust Node.js and database backends.",
            position: "left",
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Systems & Vision",
            description: "Pushing boundaries beyond the browser by exploring computer vision and low-level systems programming with C++ and OpenCV.",
            position: "left",
        },
        {
            icon: <Terminal className="w-6 h-6" />,
            title: "DevOps & Architecture",
            description: "Proficient in modern deployment pipelines, Git workflows, Vercel, and cloud infrastructure.",
            position: "right",
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "UI/UX Strategy",
            description: "Bridging the gap between design and engineering. I build Figma prototypes focused on user conversion before writing a line of code.",
            position: "right",
        },
    ]

    const techStack = [
        "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
        "Node.js", "Databases", "C++", "OpenCV", "Git", "Vercel", "Figma"
    ]
    const loopingSkills = [...techStack, ...techStack, ...techStack]

    const stats = [
        { icon: <FolderGit2 />, value: 10, label: "Total Projects", suffix: "+" },
        { icon: <Briefcase />, value: 5, label: "Client Solutions", suffix: "+" },
        { icon: <CodeXml />, value: 3, label: "Years Coding", suffix: "+" },
    ]

    return (
        <section id="about" ref={sectionRef} className="w-full py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a] text-white overflow-hidden relative">

            {/* Conditionally render SpiralAnimation only if NOT on mobile */}
            {!isMobile && <SpiralAnimation />}

            <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl z-0 pointer-events-none" style={{ y: y1, rotate: rotate1 }} />
            <motion.div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl z-0 pointer-events-none" style={{ y: y2, rotate: rotate2 }} />

            <motion.div className="container mx-auto max-w-6xl relative z-10" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>

                <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
                    <motion.span className="text-purple-400 font-medium mb-2 flex items-center gap-2 tracking-wider text-sm" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <Zap className="w-4 h-4" /> THE ARCHITECT
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">More than code — <br />I engineer solutions.</h2>
                    <motion.div className="w-24 h-1 bg-purple-500 rounded-full" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }}></motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16 text-left">
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-white border-b border-gray-800 pb-3 flex items-center gap-2">
                            The Origin
                        </h3>
                        <ul className="space-y-5 text-gray-400">
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Started by deconstructing web layouts to understand the core mechanics of the internet.</span>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Scaled from basic HTML/CSS to engineering robust Full Stack architectures using React and Node.js.</span>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Tinkered with backend logic by building custom Discord bots in my free time, turning automation into a hobby.</span>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Founded and actively manage <strong>NOIDLE</strong>, a thriving tech community of 100+ members focused on DSA and Web Dev.</span>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Expanded engineering depth by diving into C++ and OpenCV for real-time Computer Vision applications.</span>
                            </li>
                            <li className="flex gap-4 items-start group">
                                <ArrowRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                                <span className="leading-relaxed">Launched SENO Studio to solve commercial problems, successfully delivering 5+ client platforms.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div className="space-y-8" variants={itemVariants}>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white border-b border-gray-800 pb-3">Profile</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Full Stack Developer specializing in high-performance web applications. I bridge the gap between stunning, conversion-focused UI design and powerful, scalable server infrastructure.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white border-b border-gray-800 pb-3">Education</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-900/40 border border-gray-800 p-5 rounded-xl hover:border-purple-500/30 transition-colors">
                                    <div className="font-bold text-white text-lg">Bachelor of Computer Applications</div>
                                    <div className="text-purple-400 text-sm mb-3 font-medium">BRABU, Muzaffarpur • 2024 — Present</div>
                                    <p className="text-sm text-gray-500 leading-relaxed">Focusing on core computer science fundamentals, data structures, algorithm design, and software engineering principles.</p>
                                </div>
                                <div className="bg-gray-900/40 border border-gray-800 p-5 rounded-xl hover:border-purple-500/30 transition-colors">
                                    <div className="font-bold text-white text-lg">Class XII (PCM + IT STEM)</div>
                                    <div className="text-purple-400 text-sm mb-2 font-medium">Sree Ayyappa Public School, Bokaro</div>
                                    <p className="text-sm text-gray-500 leading-relaxed">Senior Secondary Education — CBSE Board.</p>
                                </div>
                                <div className="bg-gray-900/40 border border-gray-800 p-5 rounded-xl hover:border-purple-500/30 transition-colors">
                                    <div className="font-bold text-white text-lg">Class X</div>
                                    <div className="text-purple-400 text-sm mb-2 font-medium">Sree Ayyappa Public School, Bokaro</div>
                                    <p className="text-sm text-gray-500 leading-relaxed">Secondary Education — CBSE Board.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div className="flex justify-center mb-24" variants={itemVariants}>
                    <a href="/satyam-resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full flex items-center gap-2 font-semibold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <Download className="w-4 h-4" /> Download Resume
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
                    <div className="space-y-16">
                        {skills.filter((s) => s.position === "left").map((skill, index) => (
                            <SkillItem key={`left-${index}`} {...skill} variants={itemVariants} delay={index * 0.2} direction="left" />
                        ))}
                    </div>
                    <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
                        <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
                            <motion.div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800" whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}>
                                <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=800&q=80" alt="Coding Setup" className="w-full h-full object-cover" />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="space-y-16">
                        {skills.filter((s) => s.position === "right").map((skill, index) => (
                            <SkillItem key={`right-${index}`} {...skill} variants={itemVariants} delay={index * 0.2} direction="right" />
                        ))}
                    </div>
                </div>

                <motion.div className="mt-24 w-full overflow-hidden relative border-y border-gray-800/50 py-8 bg-black/40 backdrop-blur-sm rounded-lg" variants={itemVariants}>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                    <motion.div className="flex whitespace-nowrap gap-12 items-center w-max" animate={{ x: ["0%", "-33.33%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }}>
                        {loopingSkills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-300 font-medium text-lg lg:text-xl tracking-wide uppercase">
                                <Hexagon className="w-5 h-5 text-purple-500/70" />
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" initial="hidden" animate={isStatsInView ? "visible" : "hidden"} variants={containerVariants}>
                    {stats.map((stat, index) => (
                        <StatCounter key={index} {...stat} delay={index * 0.1} />
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}

function SkillItem({ icon, title, description, variants, delay, direction }) {
    return (
        <motion.div className="flex flex-col group" variants={variants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <motion.div className="flex items-center gap-4 mb-3" initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.2 }}>
                <motion.div className="text-purple-400 bg-purple-500/10 p-3 rounded-xl group-hover:bg-purple-500/20" whileHover={{ rotate: [0, -10, 10, -5, 0] }}>
                    {icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
            </motion.div>
            <motion.p className="text-sm text-gray-400 leading-relaxed pl-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.4 }}>
                {description}
            </motion.p>
        </motion.div>
    )
}

function StatCounter({ icon, value, label, suffix, delay }) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)
    const springValue = useSpring(0, { stiffness: 50, damping: 10 })

    useEffect(() => {
        if (isInView && !hasAnimated) { springValue.set(value); setHasAnimated(true) }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

    return (
        <motion.div className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-gray-800 transition-colors" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } }} whileHover={{ y: -5 }}>
            <motion.div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/20" whileHover={{ rotate: 360 }}>
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-3xl font-bold text-white flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </motion.div>
            <p className="text-gray-400 text-sm mt-2">{label}</p>
        </motion.div>
    )
}