import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/content';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Certifications & Achievements
      </motion.h2>

      <div className="space-y-6">
        {portfolioData.certifications.map((cert, i) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
          >
            <div className="p-3 bg-accent/10 text-accent rounded-full">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {cert.issuer} • {cert.date}
              </p>
              <a href={cert.link} className="text-accent dark:text-accentDark text-sm font-medium mt-2 inline-block hover:underline">
                Verify Credential &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}