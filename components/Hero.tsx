import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Brain, Code, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Floating Elements (Simulated 3D) */}
      <motion.div style={{ y: y1, x: -100 }} className="absolute top-1/4 left-1/4 text-slate-800 opacity-20 z-0 hidden md:block">
        <Brain size={300} strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ y: y2, x: 100 }} className="absolute bottom-1/4 right-1/4 text-slate-800 opacity-20 z-0 hidden md:block">
        <Database size={300} strokeWidth={0.5} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        
        {/* Profile Picture Section */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-slate-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden relative z-10">
                {/* 
                  TODO: Replace the src below with your actual LinkedIn Profile Picture URL.
                */}
                <img 
                    src="https://res.cloudinary.com/dgyhiynsb/image/upload/v1764966622/profile_ledzyh.jpg"
                    alt="Chencho Wangdi" 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-secondary font-mono mb-4 text-lg">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Chencho Wangdi
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl text-slate-400 font-light mb-8">
            <span className="flex items-center gap-2"><Brain size={20} /> AI Engineer</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2"><Code size={20} /> Developer</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-2"><Database size={20} /> Data Scientist</span>
          </div>
          <p className="max-w-2xl mx-auto text-slate-500 mb-10 leading-relaxed">
            Bridging the gap between theoretical data science and practical application.
            Specializing in innovative problem solving, deep learning, and full-stack development.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-colors"
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;