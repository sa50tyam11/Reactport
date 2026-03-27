import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Play, Hexagon, Code, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', pointerEvents: 'auto', overflow: 'hidden' }}>
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
                <Spline
                    style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
                    scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
                />
            </Suspense>
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
        <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-4xl">
            <div className="inline-block border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 backdrop-blur-md">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                Available for Internship & Full-time
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-wide">
                SATYAM<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">KUMAR JHA</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80 max-w-2xl">
                Full Stack Developer crafting fast, scalable, and pixel-perfect web experiences. 3rd-year BCA student turning complex problems into powerful digital solutions.
            </p>

            {/* Updated Buttons Container */}
            <div className="flex pointer-events-auto flex-wrap gap-3 items-start">
                <a href="#projects" className="bg-[#8200DB29] hover:bg-black/50 text-white font-semibold py-2 sm:py-3 px-6 rounded-full transition duration-300 border border-[#322D36] flex items-center justify-center" style={{ backdropFilter: 'blur(8px)' }}>
                    View My Work <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                {/* New Freelance Studio Button */}
                <a href="https://senowebstudio.netlify.app/" target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 sm:py-3 px-6 rounded-full transition duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                    My Freelance Studio <ExternalLink className="w-4 h-4 ml-2" />
                </a>

                <a href="https://github.com/sa50tyam11" target="_blank" rel="noreferrer" className="bg-[#0009] border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-medium py-2 sm:py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
                    <Code className="w-4 h-4 mr-2" />
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
        <nav className="fixed top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(13, 13, 24, 0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: '0 0 15px 15px' }}>
            <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-widest">
                    <span>S.K.J</span>
                </div>
                <div className="hidden lg:flex items-center space-x-8">
                    <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition">About</a>
                    <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition">Work</a>
                    <a href="#education" className="text-sm font-medium text-gray-300 hover:text-white transition">Education</a>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <a href="#contact" className="hidden sm:block text-white border border-gray-600 hover:border-white px-4 py-2 rounded-full text-sm font-medium transition">Contact Me</a>
                    <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            <div className={`lg:hidden bg-black/90 border-t border-gray-700/30 absolute top-full left-0 right-0 z-30 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-4 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-4 flex flex-col space-y-4">
                    <a href="#about" className="text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>Work</a>
                    <a href="#education" className="text-gray-300 hover:text-white py-2" onClick={toggleMobileMenu}>Education</a>
                    <a href="#contact" className="text-gray-300 hover:text-white py-2 font-bold" onClick={toggleMobileMenu}>Contact Me</a>
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