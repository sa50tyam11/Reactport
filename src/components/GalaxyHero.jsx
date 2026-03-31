import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Hexagon, Code, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion'; // Added Framer Motion

const Spline = lazy(() => import('@splinetool/react-spline'));

// Pre-calculate random stars so they don't re-render and cause lag
const mobileStars = Array.from({ length: 40 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
}));

function MobileHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#050505]">
            {/* Animated Purple Nebula Orb */}
            <motion.div
                className="absolute -top-[10%] -left-[20%] w-[80vw] h-[80vw] rounded-full bg-purple-600/30 blur-[60px]"
                animate={{
                    x: [0, 30, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Animated Blue Nebula Orb */}
            <motion.div
                className="absolute top-[40%] -right-[20%] w-[90vw] h-[90vw] rounded-full bg-blue-600/20 blur-[80px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Twinkling Starfield */}
            {mobileStars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: star.size,
                        height: star.size,
                        top: star.top,
                        left: star.left,
                    }}
                    animate={{
                        opacity: [0.1, 0.8, 0.1],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}

function HeroSplineBackground() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', pointerEvents: 'auto', overflow: 'hidden' }}>
            {!isMobile ? (
                <Suspense fallback={<div className="w-full h-full bg-[#050505]" />}>
                    <Spline
                        style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
                        scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
                    />
                </Suspense>
            ) : (
                <MobileHeroBackground />
            )}

            {/* Vignette Overlay for text readability */}
            <div
                style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
                    background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}

function HeroContent() {
    return (
        <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-4xl relative z-10">

            <div className="inline-block border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                Open to Full-Time Roles & Client Projects
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide">
                SATYAM<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">KUMAR JHA</span>
            </h1>


            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-80 max-w-2xl leading-relaxed">
                Full Stack Software Engineer specializing in high-performance web architecture. I build scalable, conversion-focused applications that bridge the gap between complex business logic and seamless user experiences.
            </p>


            {/* --- NEXT LEVEL ANIMATED BUTTONS --- */}
            <div className="flex pointer-events-auto flex-wrap gap-5 items-start mt-4">

                {/* 1. Animated Spinning Border Button (Primary Glow) */}
                <a href="https://senostudio.netlify.app/" target="_blank" rel="noreferrer" className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] group w-full sm:w-auto shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-shadow duration-300">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9333ea_0%,#3b82f6_50%,#9333ea_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/80">
                        SENO Web Studio <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </a>

                {/* 2. Swipe-Up Hover Effect Button (Secondary) */}
                <a href="#projects" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-lg transition-all hover:bg-white/10 hover:border-white/20 w-full sm:w-auto">
                    <span className="translate-y-0 opacity-100 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                        Explore My Work
                    </span>
                    <span className="absolute translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center">
                        Explore My Work <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>

                {/* 3. Minimalist Tech Button */}
                <a href="https://github.com/sa50tyam11" target="_blank" rel="noreferrer" className="group flex h-14 items-center justify-center rounded-full border border-gray-700 bg-transparent px-8 font-medium text-gray-300 transition-all hover:border-gray-400 hover:text-white w-full sm:w-auto hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                </a>

            </div>
        </div>
    );
}

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(13, 13, 24, 0.3)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between relative">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-widest z-10">
                    <a href="#"><span>S.K.J</span></a>
                </div>

                {/* Perfectly Centered Desktop Links */}
                <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    <a href="#about" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300">About</a>
                    <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300">Work</a>
                    <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
                </div>

                {/* Right Side CTA & Mobile Toggle */}
                <div className="flex items-center space-x-4 md:space-x-6 z-10">
                    <a href="#contact" className="hidden sm:block text-white border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300">
                        Let's Talk
                    </a>
                    <button className="md:hidden text-white p-2" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-black/95 border-t border-gray-800 absolute top-full left-0 right-0 z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-4 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-6 flex flex-col space-y-6 text-lg">
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors" onClick={toggleMobileMenu}>Work</a>
                    <a href="#contact" className="text-purple-400 font-bold transition-colors" onClick={toggleMobileMenu}>Let's Talk</a>
                </div>
            </div>
        </nav>
    );
}

export function GalaxyHero() {
    const heroContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroContentRef.current) {
                requestAnimationFrame(() => {
                    const scrollPosition = window.pageYOffset;
                    const maxScroll = 400;
                    const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
                    if (heroContentRef.current) {
                        heroContentRef.current.style.opacity = opacity.toString();
                    }
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            <Navbar />
            <div className="relative min-h-screen">
                <div className="absolute inset-0 z-0 pointer-events-auto">
                    <HeroSplineBackground />
                </div>
                <div ref={heroContentRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none' }}>
                    <div className="container mx-auto">
                        <HeroContent />
                    </div>
                </div>
            </div>
        </div>
    );
}