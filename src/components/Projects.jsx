import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Plus } from 'lucide-react';
import resumeAnalyzerImg from '../assets/images/resume_analyzer.png';
import birthdayProjectImg from '../assets/images/birthday_project.png';
import campusMentorImg from '../assets/images/campus_mentor.jpg';
import photographyStudioImg from '../assets/images/photography_studio.jpg';

const projects = [
  { 
    id: 1, 
    title: 'RESUME ANALYZER', 
    year: '2024', 
    role: 'Python / Flask / AI',
    tag: 'Team Project',
    image: resumeAnalyzerImg,
    shortDesc: 'AI-powered resume screening system that matches candidates to job descriptions.',
    description: `Resume Analyzer is a Python & Flask based full-stack web application built as a team project to automate and streamline the candidate screening process.

Frontend: Built with HTML, CSS, and JavaScript, providing a clean drag-and-drop resume upload interface and real-time compatibility results displayed with percentage scores and color-coded indicators.

Backend: Powered by Flask (Python), the server processes uploaded PDF resumes using NLP keyword extraction. It compares resume keywords against a predefined job description dataset.

How Resume Filtering Works: The system tokenizes both the resume text and job requirements, removes stopwords, then computes a keyword match ratio. Scores above 70% are marked "Recommended", 40–70% as "Potential", and below 40% as "Not Suitable". This enables mentors and HR teams to rapidly shortlist the best candidates without reading every resume manually.`
  },
  { 
    id: 2, 
    title: 'CAMPUS MENTOR AI', 
    year: '2024', 
    role: 'NLP / Chatbot / AI',
    tag: 'Hackathon Project',
    image: campusMentorImg,
    live: 'https://vijay1321.github.io/Sasurie-Mentor-AI-/',
    github: 'https://github.com/vijay1321/Sasurie-Mentor-AI-',
    shortDesc: 'AI chatbot system connecting students with mentors and providing campus guidance.',
    description: `Campus Mentor AI is an intelligent chatbot system designed to help students navigate college life, find the right mentors, and get real-time guidance.

Chatbot System: Built using NLP (Natural Language Processing), the chatbot understands student queries related to academic advice, skill development, and career guidance. It uses intent classification to route queries to the most relevant mentor profile or resource.

Location Guidance Feature: The system integrates a campus map module that helps students find rooms, labs, departments, and faculty offices using natural language commands like "Where is the AI lab?" — making it especially useful for freshers navigating a new campus.

The project was built collaboratively during a hackathon and demonstrates how AI can enhance the student experience in academic institutions.`
  },
  { 
    id: 3, 
    title: 'NAREN VEDA PHOTOGRAPHY', 
    year: '2025', 
    role: 'React / UI/UX / Ongoing',
    tag: 'Real Client Project',
    image: photographyStudioImg,
    live: 'https://narenveda.vercel.app/',
    shortDesc: 'Professional photography portfolio website built for a real client using React.',
    description: `Naren Veda Photography is an ongoing real-world client project — a premium photography portfolio website designed to showcase the photographer's work and attract new clients.

React-Based UI: Built entirely with React.js and Framer Motion, the site features cinematic full-screen photo galleries, smooth parallax scrolling, and micro-animations that bring the photographer's vision to life.

The design follows a dark, minimal aesthetic to keep the focus on the photographs themselves. The site includes sections for portfolio categories (weddings, portraits, events), a contact form, and an about section.

Being a real client project, this is actively refined with client feedback — making it a strong example of professional, production-level React development.`
  },
  { 
    id: 4, 
    title: 'BIRTHDAY PROJECT', 
    year: '2024', 
    role: 'JS / Framer Motion / UI',
    tag: 'UI Project',
    image: birthdayProjectImg,
    live: 'https://vijay1321.github.io/Birthday/',
    github: 'https://github.com/vijay1321/Birthday',
    shortDesc: 'Interactive birthday-themed web app with cinematic animations and a surprise reveal.',
    description: `Birthday Project is a creative, interactive birthday-themed web application designed as a personal gift using modern web technologies.

The app features multi-page animations powered by Framer Motion, including a cinematic reveal sequence, animated birthday messages, and confetti effects. It is fully responsive across all devices.

The project demonstrates strong UI/UX skills, creative thinking, and the ability to deliver emotionally engaging digital experiences — a skill that translates directly to building memorable user interfaces in professional applications.`
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-20 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="text-left">
            <span className="font-sans text-[10px] md:text-xs text-accent uppercase tracking-[0.4em] font-black mb-4 block">Selected Works</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-white leading-none">Creative <br /><span className="text-accent underline decoration-white/10 underline-offset-[1vw]">Solutions</span></h2>
          </div>
          <span className="font-sans text-[10px] md:text-sm text-gray-500 uppercase tracking-widest bg-surface/50 px-6 py-3 rounded-full border border-white/5 whitespace-nowrap">(04) CASE STUDIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[50vh] md:h-[70vh] bg-surface overflow-hidden rounded-[2.5rem] cursor-pointer border border-white/5"
            >
              <div className="absolute inset-0 z-0">
                <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              
              {/* Tag badge */}
              <div className="absolute top-6 right-6 z-20">
                <span className="font-sans text-[9px] font-black uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full">
                  {project.tag}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
                <div className="flex flex-col gap-3 md:gap-4">
                  <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-black">{project.role}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-medium uppercase text-white tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-sans text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                    {project.shortDesc}
                  </p>
                  <div className="flex items-center gap-4 mt-2 md:mt-4 opacity-0 md:opacity-0 group-hover:opacity-100 transition-all delay-100">
                    <span className="font-sans text-[10px] text-white/50 uppercase tracking-widest">Explore Details</span>
                    <Plus className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Modal / Popup Detail */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[20000] flex items-center justify-center p-4 sm:p-10 md:p-20 bg-background/95 backdrop-blur-3xl overflow-y-auto"
          >
            <motion.button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 md:top-10 md:right-10 p-4 rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-all z-20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="max-w-4xl w-full flex flex-col gap-8 md:gap-10 py-20 px-4"
            >
              <div className="flex flex-col gap-6 text-left">
                 <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-sans text-accent tracking-[0.4em] uppercase font-black">
                   <span>Project {selectedProject.id}</span>
                   <span className="w-8 md:w-12 h-px bg-white/20"></span>
                   <span>{selectedProject.year}</span>
                   <span className="text-white/30">•</span>
                   <span className="text-white/50">{selectedProject.tag}</span>
                 </div>
                 <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium uppercase text-white tracking-tighter leading-none mb-2">
                   {selectedProject.title}
                 </h2>
                 <div className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed font-light border-l border-accent/20 pl-6 whitespace-pre-line">
                   {selectedProject.description}
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 md:mt-10">
                <a href={selectedProject.live || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-white text-black px-12 py-5 rounded-full font-sans font-bold hover:bg-accent transition-all uppercase tracking-widest text-[10px] md:text-xs">
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a>
                <a href={selectedProject.github || 'https://github.com/vijay1321'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 px-12 py-5 rounded-full font-sans font-bold border border-white/20 text-white hover:bg-white/10 transition-all uppercase tracking-widest text-[10px] md:text-xs">
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
