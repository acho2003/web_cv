import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, PolarAngleAxis } from 'recharts';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const data = [
  { name: 'Python/AI', uv: 95, fill: '#f8fafc' },
  { name: 'Data Engineering', uv: 85, fill: '#cbd5e1' },
  { name: 'Full-Stack', uv: 80, fill: '#94a3b8' },
  { name: 'DevOps', uv: 70, fill: '#64748b' },
  { name: 'Research', uv: 90, fill: '#475569' },
  { name: 'Cybersecurity', uv: 65, fill: '#334155' },
];

const skillsList = {
  "Programming": ["Python", "Java", "JavaScript/TypeScript", "Go", "C++"],
  "AI & ML": ["PyTorch", "TensorFlow", "NLP", "Deep Learning", "OpenCV"],
  "Data": ["SQL", "MongoDB", "Pandas", "Tableau", "PowerBI"],
  "Tools": ["Docker", "Git", "AWS", "Linux", "Figma"]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Cpu className="text-secondary" /> Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Charts */}
          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                barSize={20}
                data={data}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar
                  background={{ fill: '#1e293b' }}
                  dataKey="uv"
                  cornerRadius={10}
                  label={{ position: 'insideStart', fill: '#000', fontSize: '10px' }} // Simplified label
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                    <div className="text-4xl font-bold text-slate-700 opacity-30">AI</div>
                </div>
            </div>
          </div>

          {/* List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skillsList).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">{category}</h3>
                <ul className="space-y-2">
                  {skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-slate-400">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;