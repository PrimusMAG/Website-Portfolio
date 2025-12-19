import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundElements } from '@/components/landing/BackgroundElements';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Projects } from '@/components/landing/Projects';
import { Contact } from '@/components/landing/Contact';
import { ProjectModal } from '@/components/landing/ProjectModal';
import { ContactPopup } from '@/components/landing/ContactPopup';

export default function Landing() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll helper with easing and duration control
  const smoothScrollTo = (id: string, duration = 700, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY || window.pageYOffset;
    const rect = el.getBoundingClientRect();
    const target = rect.top + start + offset;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = Math.min(1, (timestamp - startTime) / duration);
      const eased = easeInOutQuad(time);
      window.scrollTo(0, Math.round(start + distance * eased));
      if (time < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const scrollToAbout = () => smoothScrollTo('about', 800, -20);
  const scrollToProjects = () => smoothScrollTo('projects', 800, -20);

  const openProject = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!showContactPopup) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactPopup]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowContactPopup(false);
        closeProject();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showContactPopup, selectedProject]);

  return (
    <div className="relative min-h-screen bg-neo-white text-black font-sans selection:bg-neo-silver selection:text-white overflow-x-hidden">
      
      <BackgroundElements />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeProject} />
        )}
      </AnimatePresence>

      <Hero 
        isVisible={isVisible} 
        scrollToAbout={scrollToAbout} 
        scrollToProjects={scrollToProjects} 
      />

      <About isVisible={isVisible} />

      <Projects openProject={openProject} />

      <Contact onOpenPopup={() => setShowContactPopup(true)} />

      <AnimatePresence>
        {showContactPopup && (
          <ContactPopup onClose={() => setShowContactPopup(false)} />
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center border-t-4 border-white">
        <p className="font-bold text-lg">
          © {new Date().getFullYear()} Primus Mario Andaka Ginting. All rights reserved.
        </p>
        <p className="text-sm mt-2 opacity-70">Built with React & Neo-Brutalism</p>
      </footer>
    </div>
  );
}