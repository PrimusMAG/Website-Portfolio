import { useState } from 'react';

interface ProjectsProps {
  openProject: (project: any) => void;
}

export function Projects({ openProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('it-support');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchCategory = (category: string) => {
    if (category !== activeCategory) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory(category);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const projectCategories: any = {
    'it-support': [
      { 
        title: "Windows Troubleshooting", 
        desc: "System diagnostics and network connectivity resolution.", 
        tech: "Windows", 
        color: "bg-neo-silver",
        icon: "💻",
        fullDesc: "A complete guide and toolset for troubleshooting common Windows and Linux operating system issues. Features step-by-step solutions, diagnostic tools, and best practices for system maintenance.",
        features: [
          "Case 1: DNS Resolution Failure",
          "Case 2: Network Adapter Disabled",
        ],
        technologies: ["Windows, VMware Workstation"],
        demoLink: "#",
        githubLink: "https://github.com/PrimusMAG/Portofolio-Project/blob/main/IT%20Support/Docs/Windows_Troubleshooting.md"
      },
      { 
        title: "Linux Troubleshooting", 
        desc: "Permission management and service restoration.", 
        tech: "Linux", 
        color: "bg-neo-blue",
        icon: "🐧",
        fullDesc: "Advanced DNS configuration management system with real-time monitoring and visualization. Helps administrators manage DNS records, monitor query performance, and troubleshoot DNS-related issues.",
        features: [
          "Case 1: File Permission Denied",
          "Case 2: Web Service Down (Apache)",
          "Performance analytics dashboard",
          "DNS propagation checker",
          "Historical data visualization"
        ],
        technologies: ["Linux, VMware Workstation"],
        demoLink: "#",
        githubLink: "https://github.com/PrimusMAG/Portofolio-Project/blob/main/IT%20Support/Docs/Linux_Troubleshooting.md"
      },
      { 
        title: "Network Infrastructure", 
        desc: "VLAN configuration and inter-network routing.", 
        tech: "GNS3, Cisco, VMware Workstation", 
        color: "bg-neo-green",
        icon: "🌐",
        fullDesc: "Modern ticketing system designed to manage IT support requests efficiently. Track issues, assign tickets, monitor resolution times, and maintain comprehensive support documentation.",
        features: [
          "Case 1: VLAN Segmentation",
          "Case 2: Routing Between Networks",
          "Real-time status updates",
          "Knowledge base integration",
          "Performance metrics and reporting"
        ],
        technologies: ["GNS3, Cisco, VMware Workstation"],
        demoLink: "#",
        githubLink: "https://github.com/PrimusMAG/Portofolio-Project/blob/main/IT%20Support/Docs/Network_Infrastructure_Vlan_and_Routing.md"
      }
    ],
    'cybersecurity': [
      { 
        title: "Offensive Red Team", 
        desc: "Vulnerability assessment and penetration testing.", 
        tech: "IDOR, CVEs, CSRF, NoSQL Injection, XSS, Brute Force", 
        color: "bg-neo-red",
        icon: "⚔️",
        fullDesc: "Comprehensive network security scanning tool that identifies potential vulnerabilities, monitors network traffic, and provides detailed security reports with remediation recommendations.",
        features: [
          "Stage 1: Pre-engagement / Preparation",
          "Stage 2: Reconnaissance, Scanning & Enumeration",
          "Stage 3: Vulnerability Analysis",
          "Stage 4: Exploitation (Gaining Access)",
          "Stage 5: Post-Exploitation"
        ],
        technologies: ["IDOR, CVEs, CSRF, NoSQL Injection, XSS, Brute Force"],
        demoLink: "#",
        githubLink: "https://github.com/PrimusMAG/Portofolio-Project/blob/main/Cybersecurity/Docs/Offensive_Red_Team.md"
      },
      { 
        title: "Defensive Blue Team", 
        desc: "Attack detection, containment, and remediation.", 
        tech: "WAF, ModSecurity", 
        color: "bg-neo-blue",
        icon: "🛡️",
        fullDesc: "Enterprise-grade password management solution with military-grade encryption. Store, generate, and manage passwords securely with features like password strength analysis and breach monitoring.",
        features: [
          "Stage 1: Preparation (Hardening)",
          "Stage 2 & 3: Detection & Analysis",
          "Stage 4: Containment",
          "Stage 5: Eradication",
          "Stage 6 & 7: Recovery & Lessons Learned"
        ],
        technologies: ["WAF, ModSecurity"],
        demoLink: "#",
        githubLink: "https://github.com/PrimusMAG/Portofolio-Project/blob/main/Cybersecurity/Docs/Defensive_Blue_Team.md"
      },
    ]
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Featured Projects
          </h2>
          <p className="text-xl font-bold bg-neo-red text-white inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
            Check out some of my recent work
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16 gap-6 flex-wrap">
          <button
            onClick={() => switchCategory('it-support')}
            className={`px-8 py-4 font-black text-lg border-4 border-black transition-all duration-200 ${
              activeCategory === 'it-support'
                ? 'bg-neo-blue text-white shadow-neo transform -translate-y-1'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            🛠️ IT Support
          </button>
          <button
            onClick={() => switchCategory('cybersecurity')}
            className={`px-8 py-4 font-black text-lg border-4 border-black transition-all duration-200 ${
              activeCategory === 'cybersecurity'
                ? 'bg-neo-red text-white shadow-neo transform -translate-y-1'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            🔒 Cybersecurity
          </button>
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {projectCategories[activeCategory].map((project: any, index: number) => (
            <div
              key={index}
              onClick={() => openProject(project)}
              className="group relative bg-white border-4 border-black shadow-neo hover:shadow-neo-hover cursor-pointer transition-all duration-300 flex flex-col"
            >
              <div className={`h-48 ${project.color} border-b-4 border-black flex items-center justify-center text-6xl overflow-hidden`}>
                <span className="transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg">
                  {project.icon}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-2 uppercase group-hover:text-neo-blue transition-colors">{project.title}</h3>
                <p className="font-medium mb-6 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((tech: string, i: number) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 border-2 border-black text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-black text-white font-bold border-2 border-transparent group-hover:bg-white group-hover:text-black group-hover:border-black transition-all">
                  View Details ➜
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
