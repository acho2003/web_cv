import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setTimeout(() => {
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always open to discussing new AI projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-secondary group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="font-mono">chenchowangdi@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-secondary group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="font-mono">+975 17 00 00 00</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-secondary group-hover:text-black transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div>Kabesa, Thimphu, Bhutan</div>
                </div>
              </div>
              
              <div className="pt-6 flex gap-4">
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                    <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                {isSent ? 'Message Sent!' : (
                    <>
                        Send Message <Send size={18} />
                    </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;