import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Languages } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap className="text-secondary" /> Education & Languages
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="md:col-span-2 space-y-8 relative pl-8 border-l border-slate-800">
            {[
              {
                title: "BSc in Computer Science (AI & Data Science)",
                inst: "Royal University of Bhutan",
                year: "2020 - 2024",
                desc: "Focus on Machine Learning algorithms, Big Data Analytics, and Cyber Security protocols. Capstone project: 'Zora' AI Learning Assistant."
              },
              {
                title: "Higher Secondary Education",
                inst: "Karma Academy",
                year: "2018 - 2019",
                desc: "Science stream with a focus on Mathematics and Physics."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-dark border-4 border-secondary rounded-full group-hover:bg-secondary transition-colors" />
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all">
                  <span className="text-sm font-mono text-secondary mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-slate-400 mb-3">{item.inst}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="space-y-6">
             <div className="bg-card p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Languages size={20} /> Languages
                </h3>
                <div className="space-y-4">
                    {[
                        { lang: "Dzongkha", level: "Native", color: "bg-orange-500" },
                        { lang: "English", level: "Professional", color: "bg-blue-500" },
                        { lang: "Nepali", level: "Fluent", color: "bg-red-500" },
                        { lang: "Tshangla", level: "Conversational", color: "bg-green-500" },
                        { lang: "Hindi", level: "Conversational", color: "bg-yellow-500" },
                    ].map((l) => (
                        <div key={l.lang} className="flex items-center justify-between">
                            <span className="text-slate-300">{l.lang}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500">{l.level}</span>
                                <div className={`w-2 h-2 rounded-full ${l.color}`} />
                            </div>
                        </div>
                    ))}
                </div>
             </div>
             
             {/* Simple Certificate Box */}
             <div className="bg-card p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen size={20} /> Certifications
                </h3>
                <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
                    <li className="hover:text-white cursor-default transition-colors">Google Data Analytics</li>
                    <li className="hover:text-white cursor-default transition-colors">AWS Cloud Practitioner</li>
                    <li className="hover:text-white cursor-default transition-colors">DeepLearning.AI Specialization</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;