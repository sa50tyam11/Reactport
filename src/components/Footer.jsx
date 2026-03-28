import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Hexagon, Globe, Briefcase, Mail } from 'lucide-react';

const footerLinks = [
  {
    label: 'Navigation',
    links: [
      { title: 'About Me', href: '#about' },
      { title: 'Selected Works', href: '#projects' },
      { title: 'Education', href: '#education' },
      { title: 'Contact', href: '#contact' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'GitHub (@sa50tyam11)', href: 'https://github.com/sa50tyam11', icon: Globe },
      { title: 'LinkedIn (satyamkrjha5011)', href: 'https://www.linkedin.com/in/satyamkrjha5011/', icon: Briefcase },
      { title: 'Email Me', href: 'mailto:satyamkrjha5011@gmail.com', icon: Mail },
    ],
  },
];

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-800 bg-[#050505] px-6 py-12 lg:py-16 mt-20 overflow-hidden">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/50 blur-md" />

      <div className="max-w-6xl mx-auto grid w-full gap-12 xl:grid-cols-4 xl:gap-8">
        <AnimatedContainer className="space-y-4 xl:col-span-2">
          <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-widest mb-6">
            <span>S.K.J</span>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Full Stack Developer crafting fast, pixel-perfect web experiences. Based in Bihar, open to the world.
          </p>
          <p className="text-gray-600 text-sm pt-6">
            © {new Date().getFullYear()} Satyam Kumar Jha.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:ml-auto w-full">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6">
                  {section.label}
                </h3>
                <ul className="space-y-4 text-sm text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="hover:text-purple-400 inline-flex items-center transition-all duration-300 hover:translate-x-1">
                        {link.icon && <link.icon className="mr-3 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}