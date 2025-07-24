import React, { useEffect, useState } from 'react';
import './shine.css';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Code, 
  Palette, 
  Smartphone, 
  Star,
  MousePointer,
  Layers,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  Eye,
  Calendar,
  Award,
  Users,
  Coffee,
  Zap,
  Globe,
  Database,
  Figma,
  Cpu,
  Brain,
  CircuitBoard,
  Wifi,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Target,
  Rocket,
  ChevronUp
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showAllProjectsMobile, setShowAllProjectsMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const [showGoBottom, setShowGoBottom] = useState(true);
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Show Go to Top if near bottom, Go to Bottom if near top
      setShowGoTop(scrollTop > docHeight - windowHeight - 100);
      setShowGoBottom(scrollTop < 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Reduced rotation values for subtler movement
    const rotateX = (y - centerY) / 30; // Reduced from /10 to /30
    const rotateY = (centerX - x) / 30; // Reduced from /10 to /30
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`; // Reduced translateZ from 20px to 10px
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  // Enhanced Interactive Liquid Flare Button Component
  const FlareButton = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    onClick 
  }: { 
    children: React.ReactNode; 
    variant?: 'primary' | 'secondary'; 
    className?: string;
    onClick?: () => void;
  }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isHovered) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 flex items-center space-x-2 group";
    
    const variantClasses = variant === 'primary' 
      ? "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white hover:shadow-2xl hover:shadow-purple-400/30"
      : "border-2 border-purple-400/30 hover:border-purple-400/60 text-white backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/15";

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {/* Enhanced Liquid Flare Effect */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: isHovered
              ? `radial-gradient(circle 140px at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(192, 132, 252, 0.8) 0%, 
                  rgba(168, 85, 247, 0.6) 25%, 
                  rgba(147, 51, 234, 0.4) 50%, 
                  rgba(124, 58, 237, 0.2) 70%, 
                  transparent 85%)`
              : 'transparent',
            filter: `brightness(${isHovered ? '1.2' : '0.9'}) saturate(${isHovered ? '1.3' : '1.1'})`,
            transform: `scale(${isHovered ? '1' : '0.95'})`,
          }}
        />
        
        {/* Additional Liquid Layer for More Fluid Effect */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-out pointer-events-none ${
            isHovered ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            background: isHovered
              ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(168, 85, 247, 0.3) 0%, 
                  rgba(147, 51, 234, 0.2) 40%, 
                  rgba(124, 58, 237, 0.1) 60%, 
                  transparent 80%)`
              : 'transparent',
            transform: `scale(${isHovered ? '1.1' : '1'}) rotate(${isHovered ? '0deg' : '2deg'})`,
          }}
        />
        
        {/* Button Content */}
        <div className="relative z-10 flex items-center space-x-2">
          {children}
        </div>
      </button>
    );
  };

  // Tech tag color configurations with full colorful backgrounds
  const getTechTagStyle = (tech: string) => {
    const techStyles: { [key: string]: string } = {
      // Electronics & Hardware - Vibrant gradients
      'Arduino': 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/40 border border-orange-300/50 hover:shadow-orange-500/60 hover:scale-105 hover:from-orange-500 hover:to-red-600',
      'C++': 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/40 border border-blue-300/50 hover:shadow-blue-500/60 hover:scale-105 hover:from-blue-600 hover:to-indigo-700',
      'Sensors': 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/40 border border-green-300/50 hover:shadow-green-500/60 hover:scale-105 hover:from-green-500 hover:to-emerald-600',
      'Basic Electronics': 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/40 border border-yellow-300/50 hover:shadow-yellow-500/60 hover:scale-105 hover:from-yellow-500 hover:to-amber-600',
      
      // Machine Learning - Purple/Pink/Cyan gradients
      'Python': 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg shadow-blue-500/40 border border-blue-300/50 hover:shadow-blue-500/60 hover:scale-105 hover:from-blue-500 hover:to-cyan-600',
      'Scikit-learn': 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg shadow-purple-500/40 border border-purple-300/50 hover:shadow-purple-500/60 hover:scale-105 hover:from-purple-500 hover:to-pink-600',
      'OpenCV': 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg shadow-purple-500/40 border border-purple-300/50 hover:shadow-purple-500/60 hover:scale-105 hover:from-purple-500 hover:to-indigo-600',
      'Jupyter': 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-600/40 border border-orange-400/50 hover:shadow-orange-600/60 hover:scale-105 hover:from-orange-600 hover:to-red-700',
      'YOLOv8': 'bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-lg shadow-green-500/40 border border-green-300/50 hover:shadow-green-500/60 hover:scale-105 hover:from-green-500 hover:to-emerald-700',
      'Face Recognition': 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/40 border border-pink-300/50 hover:shadow-pink-500/60 hover:scale-105 hover:from-pink-500 hover:to-rose-600',
      'Gmail API': 'bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-lg shadow-red-500/40 border border-red-300/50 hover:shadow-red-500/60 hover:scale-105 hover:from-red-500 hover:to-orange-600',
      
      // Signal Processing - Blue/Cyan/Pink gradients
      'MATLAB': 'bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-lg shadow-red-500/40 border border-red-300/50 hover:shadow-red-500/60 hover:scale-105 hover:from-red-500 hover:to-pink-600',
      'Signal Processing': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40 border border-cyan-300/50 hover:shadow-cyan-500/60 hover:scale-105 hover:from-cyan-500 hover:to-blue-600',
      'Modulation': 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-lg shadow-indigo-500/40 border border-indigo-300/50 hover:shadow-indigo-500/60 hover:scale-105 hover:from-indigo-500 hover:to-purple-600',
      'Lab Equipment': 'bg-gradient-to-r from-gray-500 to-slate-600 text-white shadow-lg shadow-gray-500/40 border border-gray-300/50 hover:shadow-gray-500/60 hover:scale-105 hover:from-gray-600 hover:to-slate-700',
      
      // Web Development - Bright vibrant gradients
      'React': 'bg-gradient-to-r from-cyan-300 to-blue-400 text-white shadow-lg shadow-cyan-400/40 border border-cyan-200/50 hover:shadow-cyan-400/60 hover:scale-105 hover:from-cyan-400 hover:to-blue-500',
      'JavaScript': 'bg-gradient-to-r from-yellow-300 to-orange-400 text-black shadow-lg shadow-yellow-400/40 border border-yellow-200/50 hover:shadow-yellow-400/60 hover:scale-105 hover:from-yellow-400 hover:to-orange-500',
      'CSS': 'bg-gradient-to-r from-blue-300 to-indigo-400 text-white shadow-lg shadow-blue-400/40 border border-blue-200/50 hover:shadow-blue-400/60 hover:scale-105 hover:from-blue-400 hover:to-indigo-500',
      'HTML': 'bg-gradient-to-r from-red-300 to-pink-400 text-white shadow-lg shadow-red-400/40 border border-red-200/50 hover:shadow-red-400/60 hover:scale-105 hover:from-red-400 hover:to-pink-500',
      
      // Additional tech tags with unique colors
      'KiCad': 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/40 border border-emerald-300/50 hover:shadow-emerald-500/60 hover:scale-105 hover:from-emerald-500 hover:to-teal-600',
      'PCB Design': 'bg-gradient-to-r from-lime-400 to-green-500 text-black shadow-lg shadow-lime-500/40 border border-lime-300/50 hover:shadow-lime-500/60 hover:scale-105 hover:from-lime-500 hover:to-green-600',
      'Electronics': 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/40 border border-amber-300/50 hover:shadow-amber-500/60 hover:scale-105 hover:from-amber-500 hover:to-yellow-600',
      'Circuit Analysis': 'bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-lg shadow-violet-500/40 border border-violet-300/50 hover:shadow-violet-500/60 hover:scale-105 hover:from-violet-500 hover:to-purple-600',
      'Data Logging': 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg shadow-rose-500/40 border border-rose-300/50 hover:shadow-rose-500/60 hover:scale-105 hover:from-rose-500 hover:to-pink-600',
      'Serial Communication': 'bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-lg shadow-sky-500/40 border border-sky-300/50 hover:shadow-sky-500/60 hover:scale-105 hover:from-sky-500 hover:to-blue-600',
      
      // Computer Vision & Image Processing
      'Image Processing': 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg shadow-purple-500/40 border border-purple-300/50 hover:shadow-purple-500/60 hover:scale-105 hover:from-purple-500 hover:to-indigo-600',
      'GUI': 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg shadow-purple-500/40 border border-purple-300/50 hover:shadow-purple-500/60 hover:scale-105 hover:from-purple-500 hover:to-indigo-600',
      'Automation': 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-lg shadow-purple-500/40 border border-purple-300/50 hover:shadow-purple-500/60 hover:scale-105 hover:from-purple-500 hover:to-indigo-600'
    };
    
    return techStyles[tech] || 'bg-gradient-to-r from-purple-700/20 to-purple-600/20 text-purple-300 border border-purple-600/30';
  };

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Learning ML, DL, neural networks, and CV."
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Electronics Design",
      description: "PCB design, embedded systems (ROS & RTOS) and VLSI design."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Web development, mobile apps, and programming through academic projects."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Communications",
      description: "Signal processing, wireless systems, and Networking protocols"
    }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Projects",
      description: "Projects and learning in machine learning",
      features: ["Computer Vision", "Document Parsing", "Deep Learning ", "TBU"]
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Electronics Projects",
      description: "University projects and personal electronics work",
      features: ["Circuit Design", "Rasberry Pi Projects", "Sensor Integration", "ARM Projects"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Self-taught web development and personal projects",
      features: ["React.js", "JavaScript", "HTML/CSS", "Personal Website"]
    },
    /*{
      icon: <BookOpen className="w-8 h-8" />,
      title: "TBU",
      description: "Research projects and technical documentation",
      features: ["Technical Writing", "Project Reports", "Literature Review", "Presentations"]
    } */
  ];

  const projects = [
    {
      title: "Face-Aware Helmet Detection",
      category: "Machine Learning Project",
      description: "If no helmet,recognises face and sends mail (used at uni enterence).",
      image: "/helmet.png",
      technologies: ["YOLOv8", "Face Recognition", "OpenCV", "Gmail API"],
      liveUrl: "#",
      githubUrl: "https://github.com/sumedhpeddinti/helmet-violation-alert-system"
    },
    {
      title: "Image Classification Model",
      category: "ML Course Project",
      description: "Basic image classification using Python and machine learning libraries",
      image: "/1.jpg",
      technologies: ["Python", "Scikit-learn", "OpenCV", "Jupyter"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Digital Communication Lab",
      category: "Lab Project",
      description: "Signal processing and modulation techniques implementation",
      image: "/1.jpg",
      technologies: ["MATLAB", "Signal Processing", "Modulation", "Lab Equipment"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Portfolio Website",
      category: "Self-Learning",
      description: "Self-taught web development project showcasing my learning journey",
      image: "/1.jpg",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sensor Data Logger",
      category: "Personal Project",
      description: "Arduino-based project to log environmental sensor data",
      image: "/1.jpg",
      technologies: ["Arduino", "Sensors", "Data Logging", "Serial Communication"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Auto Face Extractor",
      category: "Computer Vision Project",
      description: "A Python desktop tool to extract faces from images inside PDF files.",
      image: "/face.webp",
      technologies: ["Image Processing", "GUI", "OpenCV", "Automation"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const testimonials = [
    {
      name: "Prof. Dr. Rajesh Kumar",
      role: "Professor",
      company: "Electronics Department", 
      content: "Excellent academic performance and shows great potential in both theoretical and practical work.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
    },
    {
      name: "Dr. Priya Sharma", 
      role: "Lab Instructor",
      company: "Communications Lab",
      content: "Outstanding dedication to learning and consistently delivers quality lab reports and projects.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Arjun Patel",
      role: "Senior Student", 
      company: "Study Group Leader",
      content: "Great team player and always willing to help others. Shows strong problem-solving skills.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-x-hidden kitty-cursor">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-black/30 backdrop-blur-lg border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors duration-200">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors duration-200">Skills</a>
              <a href="#services" className="hover:text-purple-400 transition-colors duration-200">Projects</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors duration-200">Portfolio</a>
              <a href="#store" className="hover:text-purple-400 transition-colors duration-200">Gallery</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors duration-200">Hobbies</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors duration-200">Contact</a>
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Download Resume
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#about" className="block hover:text-purple-400 transition-colors duration-200">About</a>
              <a href="#skills" className="block hover:text-purple-400 transition-colors duration-200">Skills</a>
              <a href="#services" className="block hover:text-purple-400 transition-colors duration-200">Projects</a>
              <a href="#projects" className="block hover:text-purple-400 transition-colors duration-200">Portfolio</a>
              <a href="#store" className="block hover:text-purple-400 transition-colors duration-200">Gallery</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors duration-200">Hobbies</a>
              <a href="#contact" className="block hover:text-purple-400 transition-colors duration-200">Contact</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-3 rounded-full font-medium transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Name - simple bold white text with proper spacing */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight shine-text relative">
                <span className="relative inline-block" data-text="Sumedh P">
                  Sumedh P
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <p className="text-xl text-gray-300">GRIET</p>
              </div>
              
              
              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Passionate about Electronics, ML, and Software Development. 
                Currently learning and building projects to grow my skills.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a href="https://github.com/sumedhpeddinti" target="_blank" rel="noopener noreferrer">
                <FlareButton variant="primary">
                  <span>View My Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </FlareButton>
              </a>

              <FlareButton
                variant="secondary"
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                  if (isMobile) {
                    window.location.href = "mailto:sumedh.peddinti@gmail.com?subject=Let's%20Connect&body=Hi%20Sumedh%2C%0A%0AI%20wanted%20to%20get%20in%20touch%20regarding...";
                } else {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=sumedh.peddinti@gmail.com&su=Let's%20Connect&body=Hi%20Sumedh%2C%0A%0AI%20wanted%20to%20get%20in%20touch%20regarding...",
                      "_blank"
                    );
                  }
                }}
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </FlareButton>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/sumedhpeddinti" target="_blank" rel="noopener noreferrer"
                 className="relative group rounded-full bg-white p-2 transition overflow-visible">
                {/* Animated purple glow on hover only */}
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-purple-400 to-purple-700 opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-110 group-hover:blur-md group-hover:animate-pulse z-0 transition-all duration-300" style={{animation: 'gmail-glow 2s infinite alternate'}}></span>
                <FaGithub className="w-7 h-7 text-black relative z-10" />
              </a>
              <a href="https://linkedin.com/in/sumedhpeddinti" target="_blank" rel="noopener noreferrer"
                 className="relative group rounded-full bg-[#0077b5] p-2 transition overflow-visible">
                {/* Animated purple glow on hover only */}
                <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-purple-400 to-purple-700 opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-110 group-hover:blur-md group-hover:animate-pulse z-0 transition-all duration-300" style={{animation: 'gmail-glow 2s infinite alternate'}}></span>
                <FaLinkedin className="w-7 h-7 text-white relative z-10" />
              </a>
              
            </div>
          </div>          

          {/* 3D Avatar/Profile Section with Animated Light Beam */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="directional-3d bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Animated Light Beam Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Primary Light Beam - Diagonal Movement */}
                <div 
                  className="absolute w-96 h-96 opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse 200px 100px at center, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
                    filter: 'blur(20px)',
                    animation: 'lightBeamDiagonal 8s ease-in-out infinite',
                    transformOrigin: 'center',
                  }}
                />
                
                {/* Secondary Light Beam - Horizontal Movement */}
                <div 
                  className="absolute w-80 h-80 opacity-20"
                  style={{
                    background: 'radial-gradient(ellipse 150px 80px at center, rgba(192, 132, 252, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 80%)',
                    filter: 'blur(25px)',
                    animation: 'lightBeamHorizontal 12s ease-in-out infinite reverse',
                    animationDelay: '2s',
                  }}
                />
                
                {/* Aurora-like Glow */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.3) 50%, rgba(168, 85, 247, 0.2) 70%, transparent 90%)',
                    filter: 'blur(30px)',
                    animation: 'auroraGlow 15s ease-in-out infinite',
                  }}
                />
                
                {/* Subtle Particle Effect */}
                <div 
                  className="absolute inset-0 opacity-25"
                  style={{
                    background: `
                      radial-gradient(2px 2px at 20% 30%, rgba(192, 132, 252, 0.8), transparent),
                      radial-gradient(2px 2px at 40% 70%, rgba(168, 85, 247, 0.6), transparent),
                      radial-gradient(1px 1px at 90% 40%, rgba(147, 51, 234, 0.7), transparent),
                      radial-gradient(1px 1px at 60% 20%, rgba(124, 58, 237, 0.5), transparent)
                    `,
                    backgroundSize: '100px 100px, 120px 120px, 80px 80px, 90px 90px',
                    animation: 'particleFloat 20s linear infinite',
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-3xl flex items-center justify-center overflow-hidden relative">
                  {/* Additional Inner Glow for Image */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 60% 40%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
                      filter: 'blur(15px)',
                      animation: 'innerGlow 10s ease-in-out infinite',
                    }}
                  />
                  
                  <img 
                    src="/2.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-3xl relative z-10"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Removed ChevronDown icon */}
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/60 to-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              What I'm Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Current focus areas and skills I'm developing through coursework and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-purple-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300 card-title">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              3rd Year Electronics & Communications Engineering Student
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently in my 4th year of Electronics & Communications Engineering, 
                passionate about learning and exploring the intersection of hardware and software. 
                I'm actively building my skills through academic projects and self-learning.
                {!showMoreAbout && (
                  <span
                    className="ml-2 text-purple-400 underline cursor-pointer hover:text-purple-300 transition-colors"
                    onClick={() => setShowMoreAbout(true)}
                  >
                    show more
                  </span>
                )}
              </p>
              {showMoreAbout && (
                <p className="text-lg text-gray-300 leading-relaxed">
                  My interests span across Embedded Systems, Machine Learning, and ROS. 
                  I believe in hands-on learning and enjoy working on projects that challenge me to 
                  apply theoretical knowledge to real-world problems. I'm eager to gain practical 
                  experience and contribute to innovative projects.
                  <span
                    className="ml-2 text-purple-400 underline cursor-pointer hover:text-purple-300 transition-colors"
                    onClick={() => setShowMoreAbout(false)}
                  >
                    show less
                  </span>
                </p>
              )}
              {/*
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 border border-purple-500/30">
                  Student
                </span>
                <span className="px-4 py-2 bg-purple-700/20 rounded-full text-purple-300 border border-purple-600/30">
                  Self-Learner
                </span>
                <span className="px-4 py-2 bg-purple-800/20 rounded-full text-purple-300 border border-purple-700/30">
                  Future Engineer
                </span>
              </div>*/}
            </div>              <div className="relative">
              <div 
                className="directional-3d bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                  {/* Profile Picture */}
                  <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
                      <img 
                        src="/pfp.jpg" 
                        alt="Profile"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 rounded-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-6 flex-1 text-center md:text-left">
                    <div className="flex items-center space-x-4">
                      <GraduationCap className="w-8 h-8 text-purple-400" />
                      <div>
                        <h3 className="font-semibold card-title">4th Year Student</h3>
                        <p className="text-gray-400 text-sm">Electronics & Communications Engineering</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Lightbulb className="w-8 h-8 text-purple-400" />
                      <div>
                        <h3 className="font-semibold card-title">Learning Focus</h3>
                        <p className="text-gray-400 text-sm">Embedded Systems, Machine Learning, Web Dev</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Target className="w-8 h-8 text-purple-400" />
                      <div>
                        <h3 className="font-semibold card-title">Seeking Opportunities</h3>
                        <p className="text-gray-400 text-sm">Internships and collaborative projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/60 to-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Skills & Learning Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical skills I'm developing through coursework and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="mb-6 text-purple-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300 card-title">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Academic & Personal Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projects I've worked on during my studies and personal learning journey
            </p>
          </div>

          {/* Mobile toggle button */}
          {isMobile && (
            <div className="flex justify-center mb-6">
              <button
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 rounded-full font-medium text-white transition-all duration-300 shadow-md"
                onClick={() => setShowAllProjectsMobile((prev) => !prev)}
              >
                {showAllProjectsMobile ? 'Show Less' : 'Show All Projects'}
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isMobile && !showAllProjectsMobile ? projects.slice(0, 2) : projects).map((project, index) => (
              <div 
                key={index}
                className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-48 transition-transform duration-500 group-hover:scale-110 ${
                      project.title === "Face-Aware Helmet Detection" 
                        ? "object-cover object-top" 
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300 card-title">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${getTechTagStyle(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 project-link"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 project-link"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2 mx-auto">
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Image Store Section */}
      <section id="store" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Image Gallery Store
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of images showcasing my work and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Card 1 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/helmet.png" 
                  alt="Helmet Detection Project"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    ML Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Helmet Detection System
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  AI-powered safety monitoring system
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-semibold">Featured</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Image Card 2 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/face.webp" 
                  alt="Face Recognition"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-green-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    Computer Vision
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Face Extraction Tool
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Automated face detection and extraction
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">Active</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Image Card 3 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/f1.jpg" 
                  alt="F1 Racing"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-red-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    Hobby
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Formula 1 & WRC
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Racing passion and motorsport enthusiasm
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-red-400 font-semibold">Passion</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Image Card 4 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/ufc.jpg" 
                  alt="MMA Fighting"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-orange-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    Sports
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Mixed Martial Arts
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  UFC and MMA combat sports fan
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400 font-semibold">Active</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Image Card 5 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/music.jpg" 
                  alt="Music"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    Music
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Music & Audio
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Sound engineering and music production
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-semibold">Creative</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Image Card 6 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="/pfp.jpg" 
                  alt="Profile"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    Personal
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Professional Profile
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  ECE student and aspiring engineer
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-semibold">Featured</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Store Action Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button className="group bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>View All Images</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-purple-400/30 hover:border-purple-400/60 text-white backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/15 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Download Gallery</span>
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/60 to-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
              Hobbies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proof I'm not a robot... probably.
            </p>
          </div>

          {/* Hobbies Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UFC & F1 */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Animated overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-72 h-72 opacity-20" style={{background: 'radial-gradient(circle at 60% 40%, rgba(168,85,247,0.4) 0%, transparent 60%)', filter: 'blur(30px)', animation: 'auroraGlow 10s ease-in-out infinite'}} />
              </div>
              <img 
                src="/f1.jpg" 
                alt="F1 & WRC" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">F1 & WRC</h3>
              <p className="text-gray-300 text-lg">"Crying in Ferrari and Hyundai" this statement should explain.</p>
            </div>

            {/* Music */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-72 h-72 opacity-20" style={{background: 'radial-gradient(circle at 40% 60%, rgba(192,132,252,0.4) 0%, transparent 60%)', filter: 'blur(30px)', animation: 'auroraGlow 12s ease-in-out infinite'}} />
              </div>
              <img 
                src="/ufc.jpg" 
                alt="MMA" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">MMA</h3>
              <p className="text-gray-300 text-lg">Well well the pressure is real when your fav fighter is inside the octagon for me it is Do Bronx.</p>
            </div>

            {/* Volleyball */}
            <div 
              className="directional-3d group bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-72 h-72 opacity-20" style={{background: 'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.4) 0%, transparent 60%)', filter: 'blur(30px)', animation: 'auroraGlow 14s ease-in-out infinite'}} />
              </div>
              <img 
                src="/music.jpg" 
                alt="Music" 
                className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">Music</h3>
              <p className="text-gray-300 text-lg">It feels amazing to listen to music while working innit lokey I play PND all day.😼</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 section-title">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always eager to learn and collaborate on interesting projects. 
            Let's connect and explore opportunities together!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div 
              className="directional-3d bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 card-title">Email Me</h3>
              <p className="text-gray-300 mb-4">sumedh.peddinti@gmail.com</p>
              <button
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                  if (isMobile) {
                    window.location.href = "mailto:sumedh.peddinti@gmail.com?subject=Let's%20Connect&body=Hi%20Sumedh%2C%0A%0AI%20wanted%20to%20get%20in%20touch%20regarding...";
                  } else {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=sumedh.peddinti@gmail.com&su=Let's%20Connect&body=Hi%20Sumedh%2C%0A%0AI%20wanted%20to%20get%20in%20touch%20regarding...",
                      "_blank"
                    );
                  }
                }}
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 contact-link cursor-pointer"
              >
                Send Message
              </button>
            </div>
            
            <div 
              className="directional-3d bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 card-title">Download Resume</h3>
              <p className="text-gray-300 mb-4">Get my academic resume</p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200 contact-link">
                Download PDF
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/sumedhpeddinti" target="_blank" rel="noopener noreferrer"
               className="relative group rounded-full bg-white p-2 transition overflow-visible">
              {/* Animated purple glow on hover only */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-purple-400 to-purple-700 opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-110 group-hover:blur-md group-hover:animate-pulse z-0 transition-all duration-300" style={{animation: 'gmail-glow 2s infinite alternate'}}></span>
              <FaGithub className="w-7 h-7 text-black relative z-10" />
            </a>
            <a href="https://linkedin.com/in/sumedhpeddinti" target="_blank" rel="noopener noreferrer"
               className="relative group rounded-full bg-[#0077b5] p-2 transition overflow-visible">
              {/* Animated purple glow on hover only */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-purple-400 to-purple-700 opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-110 group-hover:blur-md group-hover:animate-pulse z-0 transition-all duration-300" style={{animation: 'gmail-glow 2s infinite alternate'}}></span>
              <FaLinkedin className="w-7 h-7 text-white relative z-10" />
            </a>
            
          </div>
        </div>
      </section>

      {/* Go to Top/Bottom Button */}
      {(showGoTop || showGoBottom) && (
        <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full shadow-lg p-3 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
          onClick={() => {
            if (showGoTop) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
            }
          }}
          aria-label={showGoTop ? 'Go to Top' : 'Go to Bottom'}
        >
          {showGoTop ? <ChevronUp className="w-7 h-7" /> : <ChevronDown className="w-7 h-7" />}
        </button>
      )}

      {/* Footer */}
      <footer className="bg-black/70 backdrop-blur-lg border-t border-purple-500/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative flex items-center justify-center" style={{minHeight: '120px'}}>
          {/* Left Spotify Song */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-72">
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/0JwfrZk5keNp3SYhZn6Wi1?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>

          {/* Center Content */}
          <div className="w-full md:w-auto text-center flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-xl font-bold">Sumedh Peddinti 😼</span>
            </div>
            <p className="text-gray-300 mb-2">
              4th Year ECE Student & Aspiring Engineer
            </p>
            <div className="border-t border-purple-500/10 pt-8">
              {/* Mobile stacked layout: only Spotify embeds, no tweet card */}
              <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 w-full flex flex-col items-center space-y-4">
                <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/0JwfrZk5keNp3SYhZn6Wi1?utm_source=generator" width="90%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/0j35X8cTq543QDYLOyqB8W?utm_source=generator" width="90%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>

              {/* Twitter-like post: only visible on desktop */}
              <div className="hidden md:flex w-full justify-center mt-8">
                <div className="relative max-w-2xl w-full flex flex-col items-start">
                  <div className="bg-gray-900 border border-gray-800 rounded-[1.5rem] shadow-lg px-8 py-6 flex flex-col w-full" style={{fontFamily: 'Segoe UI', letterSpacing: 0}}>
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <img src="/1.jpg" alt="Uzi London" className="w-12 h-12 rounded-full object-cover border-2 border-gray-800" />
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-1">
                            <span className="font-bold text-white text-base">Uzi London</span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500"><g><circle cx="12" cy="12" r="10" fill="#1D9BF0"/><path d="M10.8 15.6l-3-3 1.4-1.4 1.6 1.6 4.4-4.4 1.4 1.4-5.8 5.8z" fill="#fff"/></g></svg>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span>@LILUZIVERT</span>
                            <span>·</span>
                            <span>22.07.2020</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:bg-gray-800 rounded-full p-1" title="More"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></button>
                    </div>
                    <div className="mt-3 mb-4 text-white text-base" style={{fontWeight: 500, letterSpacing: 0.1}}>
                      "I KNOW IT HURTS SOMETIMES, BUT YOU'LL GET OVER IT"
                    </div>
                    <div className="flex items-center space-x-8 text-gray-500 text-sm border-b border-gray-800 pb-2">
                      <div className="flex items-center space-x-1">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 8.517c.457-.281.943-.517 1.5-.517A3.5 3.5 0 0122 11.5c0 2.485-2.239 4.5-5 4.5H7c-2.761 0-5-2.015-5-4.5A3.5 3.5 0 016.5 8c.557 0 1.043.236 1.5.517"/></svg>
                        <span>5 thousand.</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.78 2.86 1.97 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.55 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.95 2.03c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg>
                        <span>55 thousand.</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <span>324 thousand.</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end space-x-4 pt-2 text-gray-500">
                      <button className="hover:text-blue-400" title="Bookmark"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg></button>
                      <button className="hover:text-blue-400" title="Share"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v16h16V4H4zm2 2h12v12H6V6zm3 3v6h6V9H9z"/></svg></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Spotify Song */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-72">
            <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/0j35X8cTq543QDYLOyqB8W?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;