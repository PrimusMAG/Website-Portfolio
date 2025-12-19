import { Code, Globe, Terminal, Cpu } from 'lucide-react';
import { useState } from 'react';

interface AboutProps {
  isVisible: boolean;
}

export function About({ isVisible }: AboutProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    { name: "React.js", level: 90, color: "bg-neo-blue", icon: <Code className="w-6 h-6" /> },
    { name: "Tailwind CSS", level: 85, color: "bg-neo-green", icon: <Globe className="w-6 h-6" /> },
    { name: "JavaScript (ES6+)", level: 88, color: "bg-neo-yellow", icon: <Terminal className="w-6 h-6" /> },
    { name: "HTML5 & CSS3", level: 95, color: "bg-neo-black", icon: <Cpu className="w-6 h-6" /> }
    
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-neo-yellow border-y-4 border-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter inline-block bg-white border-4 border-black px-8 py-4 shadow-neo transform -rotate-2">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {[
              { icon: "🚀", title: "Passionate Developer", desc: "I love turning complex problems into simple, beautiful, and intuitive designs." },
              { icon: "💡", title: "Always Learning", desc: "The tech world evolves rapidly, and I stay ahead by continuously learning new technologies." },
              { icon: "🎯", title: "Detail Oriented", desc: "Every pixel matters. I ensure that every project is polished and accessible." }
            ].map((item, i) => (
              <div key={i} className="bg-white border-4 border-black p-6 shadow-neo hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-4xl bg-neo-blue border-2 border-black p-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase">{item.title}</h3>
                    <p className="font-medium text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Skills */}
          <div className="bg-white border-4 border-black p-8 shadow-neo rotate-1">
            <h3 className="text-3xl font-black mb-8 uppercase border-b-4 border-black pb-4">Skills Implemented in This Website</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between mb-2 font-bold text-lg">
                    <span className="flex items-center gap-2">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-6 bg-gray-200 border-2 border-black rounded-full overflow-hidden relative">
                    <div
                      className={`h-full ${skill.color} border-r-2 border-black transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
