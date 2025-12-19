import { ArrowRight } from 'lucide-react';
import Eyes from "../ui/Eyes";

interface HeroProps {
  isVisible: boolean;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
}

import profileImg from "../../assets/profile.jpeg";


export function Hero({ isVisible, scrollToAbout, scrollToProjects }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-10">
      {/* Background Eyes */}
      <Eyes />

      <div className={`relative z-10 max-w-5xl w-full text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Profile Image */}
        <div className="mb-10 relative inline-block group">
          <div className="absolute inset-0 bg-neo-black translate-x-4 translate-y-4 rounded-full border-4 border-black" />
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-black bg-neo-blue z-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300">
            <img 
              src={profileImg} 
              alt="Primus Mario" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 bg-neo-yellow border-4 border-black px-4 py-1 font-black text-xl rotate-12 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            HELLO!
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
          I'M <span className="text-white bg-neo-black px-4 inline-block transform -rotate-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">PRIMUS</span>
        </h1>
        
        <div className="flex justify-center mb-10">
          <p className="max-w-2xl text-xl md:text-2xl font-bold bg-white border-4 border-black p-6 shadow-neo rotate-1">
            I craft <span className="text-neo-blue">beautiful</span>, <span className="text-neo-green">responsive</span>, and <span className="text-neo-red">user-friendly</span> web experiences that bring ideas to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center items-center flex-wrap mx-auto">
          <button
            onClick={scrollToAbout}
            className="neo-button bg-neo-blue text-white hover:bg-blue-600"
          >
            <span className="flex items-center gap-2">
              About Me <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          <button
            onClick={scrollToProjects}
            className="neo-button bg-white text-black hover:bg-gray-100"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
