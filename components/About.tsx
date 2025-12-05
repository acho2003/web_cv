import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="text-secondary" /> About Me
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-slate-300 leading-relaxed text-lg"
          >
            <p>
              I am an <strong className="text-white">AI Engineer</strong> hailing from the serene mountains of <span className="text-white">Bhutan</span>.
              My journey is defined by an insatiable curiosity for how machines learn and how technology can solve
              real-world problems.
            </p>
            <p>
              With a strong foundation in Computer Science and Cybersecurity, I have transitioned into
              the world of <strong className="text-white">Data Science and AI</strong>. I don't just write code;
              I build systems that understand, predict, and assist.
            </p>
            <p>
              From simulating cultural traditions like <em>Sorig Dongdrem</em> to building advanced
              OCR systems for mathematical notation, I believe in technology that preserves heritage
              while pushing towards the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Cpu, title: "Curiosity", desc: "Always learning new models" },
              { icon: Globe, title: "Innovation", desc: "Solving local problems" },
              { icon: Zap, title: "Efficiency", desc: "Optimized algorithms" },
              { icon: Terminal, title: "DevOps", desc: "Robust deployment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="p-6 border border-slate-800 rounded-xl bg-slate-900/30 backdrop-blur-sm group"
              >
                <item.icon className="w-8 h-8 text-secondary mb-3 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;