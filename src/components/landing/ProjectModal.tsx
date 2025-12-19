import { motion } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const calc = () => setHeaderHeight(headerRef.current ? headerRef.current.offsetHeight : 0);
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative bg-white border-4 border-black shadow-neo w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-12 h-12 bg-neo-silver border-4 border-black text-white hover:bg-red-600 transition-colors flex items-center justify-center font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Project Header */}
        <div ref={headerRef} className={`p-8 md:p-12 border-b-4 border-black ${project.color}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-6xl p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {project.icon}
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-2 uppercase tracking-tighter">{project.title}</h2>
              <p className="text-xl font-bold opacity-90">{project.desc}</p>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8 md:p-12 bg-white">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase bg-neo-yellow inline-block px-2 border-2 border-black">
                  Overview
                </h3>
                <p className="text-lg leading-relaxed font-medium border-l-4 border-black pl-4">
                  {project.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase bg-neo-green inline-block px-2 border-2 border-black">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 font-medium">
                      <span className="text-neo-pink font-black text-xl">➜</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase bg-neo-blue inline-block px-2 border-2 border-black text-white">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t-4 border-black">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-black text-white font-bold text-lg border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(128,128,128,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
