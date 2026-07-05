import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    label: 'Email',
    value: 'vrvijay2005@gmail.com',
    href: 'mailto:vrvijay2005@gmail.com',
    icon: <Mail className="w-5 h-5 text-accent" />,
  },
  {
    label: 'Phone',
    value: '+91 9361372454',
    href: 'tel:+919361372454',
    icon: <Phone className="w-5 h-5 text-accent" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vijay13072005',
    href: 'https://www.linkedin.com/in/vijay13072005',
    icon: <Linkedin className="w-5 h-5 text-accent" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/vijay1321',
    href: 'https://github.com/vijay1321',
    icon: <Github className="w-5 h-5 text-accent" />,
  },
  {
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
    icon: <MapPin className="w-5 h-5 text-accent" />,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitted(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Could not send message. Please try again later.',
        });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error, please try again later.' });
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-20 bg-gradient-to-b from-background to-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
        
        {/* Left: Info */}
        <div className="flex flex-col gap-6 md:gap-12 relative lg:sticky lg:top-32 text-left">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-accent font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] font-black mb-6 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-8xl font-display uppercase tracking-tight text-white leading-[0.95] mb-5"
            >
              Let's Create <br /><span className="text-accent italic text-[8vw] sm:text-[6vw] md:text-[6vw]">Together</span>
            </motion.h2>
            <p className="hidden sm:block text-gray-500 font-sans text-sm md:text-lg max-w-sm italic opacity-70 border-l border-accent/30 pl-6">
              "Open to internships, collaborations, and exciting projects. Let's build something exceptional."
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group"
              >
                <div className="w-px h-10 bg-white/10 group-hover:bg-accent transition-colors duration-300"></div>
                <div className="p-2 bg-white/5 rounded-xl group-hover:bg-accent/10 transition-colors">
                  {info.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] uppercase tracking-widest text-gray-500 font-sans font-bold mb-1">{info.label}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg text-white font-sans hover:text-accent transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm md:text-lg text-white font-sans">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="w-full pt-8 lg:pt-0"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 text-left max-w-xl mx-auto">
            <input type="hidden" name="access_key" value="0e37f649-0a3c-49f5-9a06-32617056085b" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans font-black">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="bg-transparent border-b border-white/30 py-3 md:py-4 font-sans text-white focus:border-accent outline-none transition-all placeholder:text-white/40 text-base md:text-xl font-light"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans font-black">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="hello@example.com" 
                  required
                  className="bg-transparent border-b border-white/30 py-3 md:py-4 font-sans text-white focus:border-accent outline-none transition-all placeholder:text-white/40 text-base md:text-xl font-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="subject" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans font-black">Subject</label>
              <input 
                id="subject"
                name="subject"
                type="text" 
                placeholder="Internship Opportunity / Collaboration..." 
                className="bg-transparent border-b border-white/30 py-3 md:py-4 font-sans text-white focus:border-accent outline-none transition-all placeholder:text-white/40 text-base md:text-xl font-light"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans font-black">Message</label>
              <textarea 
                id="message"
                name="message"
                rows="1" 
                placeholder="Let's build something great together..." 
                required
                className="bg-transparent border-b border-white/30 py-4 md:py-5 font-sans text-white focus:border-accent outline-none transition-all placeholder:text-white/40 text-base md:text-xl font-light resize-none overflow-hidden"
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={submitted}
              className="self-start group flex items-center gap-4 px-10 py-4 md:px-16 md:py-6 rounded-full font-sans font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] bg-white text-black hover:bg-accent transition-all duration-700 shadow-2xl relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitted ? (
                <span className="text-black">Sending...</span>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send className="relative z-10 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </>
              )}
            </button>
            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'} font-sans mt-1`}>
                {status.message}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
