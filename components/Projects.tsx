import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { Project } from '../types';
import SpaceShooter from './SpaceShooter';

const projects: Project[] = [
  {
    id: 'zora',
    title: 'Zora — AI Learning Platform',
    description: 'An AI-driven platform revolutionizing personalized learning.',
    details: 'Zora utilizes advanced NLP to assess student queries and provide tailored educational content. It features a chatbot assistant that guides users through complex topics, making learning interactive and adaptive.',
    tags: ['AI', 'React', 'Python', 'Chatbot'],
    techStack: ['React', 'Python (Flask)', 'OpenAI API', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 'latex',
    title: 'Math LaTeX OCR',
    description: 'Deep Learning model converting handwritten math to LaTeX.',
    details: 'A sophisticated Computer Vision project using Convolutional Neural Networks (CNNs) and Sequence-to-Sequence models to recognize handwritten mathematical expressions and output valid LaTeX code.',
    tags: ['Deep Learning', 'Python', 'OCR'],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'LaTeX'],
    link: '#'
  },
  {
    id: 'sorig',
    title: 'Sorig Dongdrem Simulation',
    description: 'Interactive cultural simulation of Bhutanese tradition.',
    details: 'A web-based simulation preserving the cultural heritage of Sorig Dongdrem. It uses pure JavaScript for logic and HTML5 Canvas for rendering visuals, offering an educational insight into traditional practices.',
    tags: ['Cultural Tech', 'Simulation', 'Web'],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    link: '#'
  },
  {
    id: 'shooter',
    title: 'Space Shooter Game',
    description: 'Classic 2D arcade game built with Java concepts.',
    details: 'A fast-paced 2D shooter game. Originally built in Java to demonstrate OOP principles, game loops, and collision detection algorithms. Play the web-port version right here!',
    tags: ['Game Dev', 'Java', 'OOP'],
    techStack: ['Java', 'Swing', 'AWT'],
    hasGame: true,
    link: '#'
  },
  {
    id: 'ems',
    title: 'Employee Management',
    description: 'Full-stack system with comprehensive CRUD operations.',
    details: 'A robust enterprise solution for managing employee records. Built with Node.js and MongoDB, it features secure authentication, role-based access control, and real-time data updates.',
    tags: ['Full Stack', 'Node.js', 'MongoDB'],
    techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
    link: '#'
  },
  {
    id: 'chatbot',
    title: 'Simple ChatBot',
    description: 'High-performance chatbot backend.',
    details: 'A backend-focused project written in Go (Golang) for high concurrency. Integrated with PostgreSQL for message persistence and context management.',
    tags: ['Backend', 'Go', 'SQL'],
    techStack: ['Go', 'PostgreSQL', 'WebSocket'],
    link: '#'
  },
  {
    id: 'club',
    title: 'Club — Campus Connect',
    description: 'Social networking prototype for university students.',
    details: 'Connects students based on interests and clubs. Features event creation, feed updates, and direct messaging.',
    tags: ['Social', 'Prototype', 'UI/UX'],
    techStack: ['Figma', 'React Native', 'Firebase'],
    link: '#'
  },
  {
    id: 'ehtt',
    title: 'EHTT Tourism Website',
    description: 'Promoting Bhutanese culture through digital tourism.',
    details: 'A visually rich website designed to attract tourists to Eastern Bhutan. Includes interactive maps, gallery, and booking inquiries.',
    tags: ['Web Design', 'Tourism', 'Frontend'],
    techStack: ['HTML', 'SASS', 'JavaScript'],
    link: '#'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-dark text-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <MonitorPlay className="text-secondary" /> Projects
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-6"></div>
          <p className="text-slate-400">A collection of technical endeavors and creative solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-slate-800 rounded-xl p-6 cursor-pointer hover:border-slate-500 transition-colors group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-secondary transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-800 rounded-md text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                layoutId={selectedProject.id}
                className="relative bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 shadow-2xl"
              >
                <div className="p-8">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <h2 className="text-3xl font-bold mb-2 text-white">{selectedProject.title}</h2>
                  <p className="text-secondary text-lg mb-6">{selectedProject.description}</p>

                  <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-slate-300 leading-relaxed">{selectedProject.details}</p>
                  </div>

                  {selectedProject.hasGame && (
                    <div className="mb-8 p-4 bg-slate-900 rounded-xl border border-slate-700">
                      <h4 className="text-center font-mono mb-2 text-green-400">{'>'}{'>'}{'>'} LAUNCHING MODULE: SPACE_SHOOTER.EXE</h4>
                      <SpaceShooter />
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-sm border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={selectedProject.link} className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;