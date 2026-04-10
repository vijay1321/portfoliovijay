import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Programming Languages',
    emoji: '💻',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 85 },
    ]
  },
  {
    category: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'React JS', level: 90 },
      { name: 'Responsive Web Design', level: 88 },
    ]
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'Flask', level: 80 },
    ]
  },
  {
    category: 'Database',
    emoji: '🗄️',
    skills: [
      { name: 'MongoDB', level: 75 },
    ]
  },
  {
    category: 'Tools & Technologies',
    emoji: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'REST APIs', level: 80 },
      { name: 'Microsoft Excel', level: 85 },
      { name: 'PowerPoint', level: 85 },
    ]
  },
  {
    category: 'Soft Skills',
    emoji: '🧠',
    skills: [
      { name: 'Communication', level: 88 },
      { name: 'Team Collaboration', level: 92 },
      { name: 'Time Management', level: 85 },
      { name: 'Problem Solving', level: 88 },
      { name: 'Adaptability', level: 90 },
    ]
  },
];

const areasOfInterest = [
  { label: 'Web Development', icon: '🌐' },
  { label: 'Full Stack Development (MERN Stack)', icon: '🚀' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-20 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div>
            <span className="font-sans text-[10px] md:text-xs text-accent uppercase tracking-[0.4em] font-black mb-4 block">What I Know</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wider text-left">Technical <br /> <span className="text-accent underline decoration-white/10 underline-offset-8">Arsenal</span></h2>
          </div>
          <p className="max-w-md text-gray-500 font-sans leading-relaxed text-xs md:text-sm italic text-left border-l border-accent/20 pl-6">
            "A showcase of the tools and technologies I've mastered to build high-performance, modern web applications."
          </p>
        </div>

        {/* Areas of Interest */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold mb-6">Areas of Interest</h3>
          <div className="flex flex-wrap gap-4">
            {areasOfInterest.map((area) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-accent/10 border border-accent/20 px-6 py-3 rounded-full"
              >
                <span className="text-xl">{area.icon}</span>
                <span className="font-sans font-bold text-xs md:text-sm text-accent uppercase tracking-[0.2em]">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 md:gap-10 bg-surface/30 p-8 md:p-10 rounded-[2rem] border border-white/5"
            >
              <h3 className="text-gray-400 font-display uppercase tracking-[0.2em] text-base md:text-lg font-bold border-b border-white/10 pb-4 text-left flex items-center gap-3">
                <span className="text-2xl">{group.emoji}</span>
                {group.category}
              </h3>
              <div className="flex flex-col gap-6 md:gap-7">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-3">
                    <div className="flex justify-between items-center font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold text-white/70">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        viewport={{ once: true }}
                        className="absolute h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
}
