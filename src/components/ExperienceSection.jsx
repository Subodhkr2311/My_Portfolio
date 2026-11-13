import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_LEDGER } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Career History
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Directing engineering teams, architecting cloud systems, and delivering user-facing applications.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {EXPERIENCE_LEDGER.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-9 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200"
            >
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-neutral-200">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200 text-neutral-800">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950 tracking-tight">
                    {exp.role} <span className="text-neutral-400 font-normal">&bull;</span> {exp.company}
                  </h3>
                </div>

                <div className="shrink-0">
                  <span className="text-xs font-semibold text-neutral-800 bg-white border border-neutral-200 px-3.5 py-1.5 rounded-full inline-block shadow-xs">
                    {exp.metrics}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="my-4">
                <p className="text-sm sm:text-base font-medium text-neutral-800 leading-snug">
                  {exp.summary}
                </p>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 my-4">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 size={15} className="text-[#F04400] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="mt-5 pt-4 border-t border-neutral-200/70 flex flex-wrap items-center gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
