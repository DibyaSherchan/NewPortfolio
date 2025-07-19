import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
  MessageCircle,
  Utensils,
  Code2,
  Database,
  Smartphone,
  Palette,
  Brain,
  Coffee,
  ChevronDown,
  ExternalLink,
  Star,
} from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      title: "Chhimeki",
      description:
        "A react-native app which uses location based system to fetch people who want to help and people who need help in local or global scale with in built escrow system",
      icon: <MapPin className="w-8 h-8" />,
      tech: ["React Native", "Location Services", "Escrow System"],
      color: "from-cyan-400 to-blue-500",
      href: "https://github.com/DibyaSherchan/ChhimekiFrontend",
    },
    {
      title: "SocialMediaApp",
      description:
        "A MERN stack project which contains elements of a basic social media app but with also real time notifications and a fully functional UI systems with full CRUD functionalities.",
      icon: <MessageCircle className="w-8 h-8" />,
      tech: ["MERN Stack", "Real-time", "CRUD"],
      color: "from-purple-400 to-pink-500",
      href: "https://github.com/DibyaSherchan/Project-Social",
    },
    {
      title: "RestaurantApp",
      description:
        "A react-native application for my personal family business to fully digitalize the business with guest and staff view and specific functionalities made for the business to be easier.",
      icon: <Utensils className="w-8 h-8" />,
      tech: ["React Native", "Business Logic", "Multi-role"],
      color: "from-orange-400 to-red-500",
      status: "WIP",
      href: "https://github.com/DibyaSherchan/RestaurantApp",
    },
  ];

  const currentSkills = [
    {
      name: "MERN Stack",
      icon: <Code2 className="w-12 h-12" />,
      level: "Advanced",
    },
    {
      name: "React Native",
      icon: <Smartphone className="w-12 h-12" />,
      level: "Advanced",
    },
    {
      name: "Frontend Stack",
      icon: <Palette className="w-12 h-12" />,
      level: "Advanced",
    },
    {
      name: "Firebase",
      icon: <Database className="w-12 h-12" />,
      level: "Intermediate",
    },
    {
      name: "Supabase",
      icon: <Database className="w-12 h-12" />,
      level: "Intermediate",
    },
    {
      name: "Unity",
      icon: <Coffee className="w-12 h-12" />,
      level: "Intermediate",
    },
    {
      name: "Figma",
      icon: <Palette className="w-12 h-12" />,
      level: "Advanced",
    },
    { name: "Python", icon: <Brain className="w-12 h-12" />, level: "Basic" },
    {
      name: "Neural Networks",
      icon: <Brain className="w-12 h-12" />,
      level: "Basic",
    },
    { name: "Java", icon: <Coffee className="w-12 h-12" />, level: "Basic" },
  ];

  const learningSkills = [
    {
      name: "TypeScript",
      icon: <Code2 className="w-16 h-16" />,
      priority: "High",
    },
    {
      name: "Next.js",
      icon: <Code2 className="w-16 h-16" />,
      priority: "High",
    },
    {
      name: "Python",
      icon: <Brain className="w-16 h-16" />,
      priority: "Medium",
    },
    { name: "C#", icon: <Coffee className="w-16 h-16" />, priority: "Medium" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/DibyaSherchan",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/dibya-sherchan-074670259/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:zsherchan030@email.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pixel-perfect">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-cyan-900/15 via-transparent to-purple-900/15"></div>
      <div className="fixed inset-0 bg-gradient-to-bl from-transparent via-blue-900/5 to-transparent"></div>
      <div className="fixed inset-0 opacity-5 pixelated-bg"></div>
      <div className="fixed inset-0 pointer-events-none scanlines"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/15 via-transparent to-purple-900/15 backdrop-blur-3xl"></div>

        {/* Smooth Ambient Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large smooth ambient orbs */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute animate-pulse opacity-5"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff00ff" : "#8b5cf6"
                } 0%, transparent 70%)`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                filter: "blur(60px)",
                borderRadius: "50%",
              }}
            ></div>
          ))}
        </div>

        <div className="text-center z-14 px-6 max-w-4xl relative">
          <div
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.2, 100)}px)`,
            }}
          >
            <h1 className="pixel-title text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent animate-pulse">
              Dibya Sherchan
            </h1>

            <div className="pixel-text text-lg md:text-xl text-gray-300 leading-relaxed mb-8 space-y-4">
              <p className="animate-fadeIn digital-glow">
                I am an undergraduate from{" "}
                <span className="text-cyan-400 font-semibold glow-cyan">
                  Herald College Kathmandu
                </span>{" "}
                currently in the process of self learning and creating personal
                projects for companies and generally just creating things I like
                the most.
              </p>
              <p
                className="animate-fadeIn digital-glow"
                style={{ animationDelay: "0.5s" }}
              >
                I love learning new things and implementing changes and get
                myself in a lot of trial and error situations.
              </p>
              <p
                className="animate-fadeIn digital-glow"
                style={{ animationDelay: "1s" }}
              >
                I am skilled in{" "}
                <span className="text-cyan-400 font-semibold glow-cyan">
                  MERN, React Native, Frontend Stack, Firebase, Supabase, Unity,
                  Figma
                </span>{" "}
                and know the basics on{" "}
                <span className="text-purple-400 font-semibold glow-purple">
                  Python, Neural Networks and Java
                </span>
                .
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`p-4 pixel-border pixelated-button ${link.color} transition-all duration-300 transform hover:scale-90 animate-fadeIn`}
                  style={{ animationDelay: `${1.5 + index * 0.2}s` }}
                >
                  <div className="pixel-icon">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-bounce pixel-icon">
            <ChevronDown className="w-8 h-8 mx-auto opacity-60" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent"></div>
        <div
          className="text-center mb-16"
          style={{
            transform: `translateX(${isVisible.projects ? 0 : -100}px)`,
            opacity: isVisible.projects ? 1 : 0,
            transition: "all 0.8s ease-out",
          }}
          id="projects"
          data-animate
        >
          <h2 className="pixel-title text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto pixel-divider"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative pixel-card pixelated-button hover:glow-cyan transition-all duration-500 transform hover:scale-105"
              style={{
                transform: `translateY(${isVisible.projects ? 0 : 100}px)`,
                opacity: isVisible.projects ? 1 : 0,
                transition: `all 0.6s ease-out`,
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div
                className={`w-16 h-16 pixel-icon-container bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="pixel-icon">{project.icon}</div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white pixel-text">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="px-2 py-1 text-xs pixel-badge">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed pixel-text-small">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="pixel-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.href}>
                  <ExternalLink className="w-5 h-5 text-gray-400 pixel-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-slate-800/10 to-gray-900/20 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16" id="current-skills" data-animate>
            <div
              className="text-center mb-12"
              style={{
                transform: `translateX(${
                  isVisible["current-skills"] ? 0 : 100
                }px)`,
                opacity: isVisible["current-skills"] ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              <h2 className="pixel-title text-4xl font-bold mb-4 text-white">
                CURRENT SKILLS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto pixel-divider"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {currentSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="text-center group"
                  style={{
                    transform: `translateY(${
                      isVisible["current-skills"] ? 0 : 50
                    }px)`,
                    opacity: isVisible["current-skills"] ? 1 : 0,
                    transition: "all 0.6s ease-out",
                    transitionDelay: `${index * 0.08}s`,
                  }}
                >
                  <div className="skill-container pixelated-button group-hover:glow-cyan transition-all duration-300 group-hover:scale-110 transform">
                    <div className="text-cyan-400 group-hover:text-white transition-colors duration-300 pixel-icon">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-1 pixel-text-small">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-400 pixel-text-tiny">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div id="learning-skills" data-animate>
            <div
              className="text-center mb-12"
              style={{
                transform: `translateX(${
                  isVisible["learning-skills"] ? 0 : -100
                }px)`,
                opacity: isVisible["learning-skills"] ? 1 : 0,
                transition: "all 0.8s ease-out",
              }}
            >
              <h2 className="pixel-title text-4xl font-bold mb-4 text-white">
                CURRENTLY LEARNING
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto pixel-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="text-center group"
                  style={{
                    transform: `translateY(${
                      isVisible["learning-skills"] ? 0 : 80
                    }px)`,
                    opacity: isVisible["learning-skills"] ? 1 : 0,
                    transition: "all 0.7s ease-out",
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  <div className="learning-skill-container pixelated-button group-hover:glow-purple transition-all duration-500 group-hover:scale-110 transform">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300 pixel-icon">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg pixel-text">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 pixel-icon" />
                    <span className="text-sm text-gray-400 pixel-text-tiny">
                      {skill.priority} Priority
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="pixel-title text-4xl font-bold mb-8 text-white">
            LET'S CONNECT
          </h2>
          <p className="text-gray-400 mb-12 text-lg pixel-text">
            Always open to discussing new opportunities and interesting projects
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center contact-card pixelated-button ${link.color} transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 pixel-icon">
                  {link.icon}
                </div>
                <span className="text-sm font-medium pixel-text-small">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 pixel-border-top relative z-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 pixel-text-small">
            © 2025 PORTFOLIO. BUILT WITH REACT, VITE & TAILWIND CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Jersey+15&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

        .pixel-perfect {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .pixel-title {
          font-family: "Jersey 15", cursive;
          font-weight: 400;
          letter-spacing: 2px;
          text-shadow: 0 0 10px currentColor;
        }

        .pixel-text {
          font-family: "Ubuntu", sans-serif;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .pixel-text-small {
          font-family: "Ubuntu", sans-serif;
          font-weight: 400;
          letter-spacing: 0.3px;
          font-size: 19px;
        }

        .pixel-text-tiny {
          font-family: "Ubuntu", sans-serif;
          font-weight: 300;
          letter-spacing: 0.3px;
          font-size: 14px;
        }

        .pixel-border {
          border: 2px solid #00ffff;
          border-radius: 0;
          background: rgba(0, 255, 255, 0.1);
          box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.2),
            0 0 20px rgba(0, 255, 255, 0.1);
        }

        .pixel-border-top {
          border-top: 2px solid #00ffff;
          background: rgba(0, 255, 255, 0.05);
        }

        .pixelated-button {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 0;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .pixelated-button:hover {
          border-color: rgba(0, 255, 255, 0.8);
          background: rgba(0, 255, 255, 0.1);
          transform: scale(1.02);
        }

        .pixel-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        .pixel-icon-container {
          border-radius: 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .pixel-icon {
          filter: drop-shadow(0 0 5px currentColor);
        }

        .pixel-dot {
          border-radius: 50%;
        }

        .pixel-badge {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
          border: 1px solid #ffc107;
          border-radius: 0;
          font-family: "Ubuntu", sans-serif;
          font-weight: 500;
        }

        .pixel-tag {
          padding: 0.25rem 0.75rem;
          font-size: 10px;
          background: rgba(0, 255, 255, 0.2);
          color: #00ffff;
          border: 1px solid #00ffff;
          border-radius: 0;
          font-family: "Ubuntu", sans-serif;
          font-weight: 500;
        }

        .skill-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .learning-skill-container {
          width: 96px;
          height: 96px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8),
            rgba(30, 41, 59, 0.8)
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card {
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.8);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 0;
        }

        .pixel-divider {
          height: 4px;
          border-radius: 0;
        }

        .digital-glow {
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        .glow-cyan {
          text-shadow: 0 0 10px #00ffff;
        }

        .glow-purple {
          text-shadow: 0 0 10px #ff00ff;
        }

        .pixelated-bg {
          background-image: linear-gradient(
              90deg,
              rgba(0, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scanlines {
          background: linear-gradient(
            90deg,
            transparent 99%,
            rgba(0, 255, 255, 0.02) 100%
          );
          background-size: 6px 100%;
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 6px 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .hover\\:glow-cyan:hover {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3),
            inset 0 0 20px rgba(0, 255, 255, 0.1);
        }

        .hover\\:glow-purple:hover {
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.3),
            inset 0 0 20px rgba(255, 0, 255, 0.1);
        }
      `}</style>
    </div>
  );
}