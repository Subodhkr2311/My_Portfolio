import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, EDUCATION, HONOURS } from '../data/portfolioData';
import {
  Compass,
  Layers,
  Smartphone,
  Cpu,
  GraduationCap,
  Award,
  CheckCircle2,
  Workflow,
  ArrowRight,
} from 'lucide-react';

const SERVICE_ICONS = {
  tpm: Compass,
  arch: Cpu,
  mobile: Smartphone,
  fullstack: Layers,
  ai: Workflow,
};

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-neutral-50/70 border-t border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Engagement &amp; Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              Services &amp; Expertise
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Collaborate on technical product management, Flutter mobile development, or LLM evaluation harnesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((srv, idx) => {
            const Icon = SERVICE_ICONS[srv.id] || Layers;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-neutral-500 uppercase">
                      {srv.code}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-800 group-hover:bg-[#FFD91A] group-hover:text-black flex items-center justify-center transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-950 tracking-tight mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 font-normal">
                    {srv.summary}
                  </p>

                  {/* Concrete deliverables */}
                  <div className="space-y-1.5 pt-4 border-t border-neutral-100 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Deliverables:
                    </span>
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-neutral-700">
                        <CheckCircle2 size={13} className="text-[#F04400] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant inquiry button */}
                <button
                  onClick={() => onSelectService(srv.title, srv.code)}
                  className="w-full py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-900 text-xs font-medium tracking-tight transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Select &amp; Inquire</span>
                  <ArrowRight size={13} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Education & Honours Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 border-t border-neutral-200">
          {/* Education */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral-150">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#F04400]" />
                <h3 className="font-display font-bold text-base text-neutral-900">
                  Education
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                88.8% Aggregate
              </span>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, eIdx) => (
                <div key={eIdx} className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/70">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm text-neutral-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-medium text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-1.5">{edu.institution} &bull; {edu.period}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honours & Awards */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral-150">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#F04400]" />
                <h3 className="font-display font-bold text-base text-neutral-900">
                  Honours &amp; Awards
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                1st Rank SIH
              </span>
            </div>

            <div className="space-y-4">
              {HONOURS.map((hon, hIdx) => (
                <div key={hIdx} className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/70">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm text-neutral-900">
                      {hon.title}
                    </h4>
                    <span className="text-xs font-medium text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                      {hon.date}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-1.5">{hon.issuer}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{hon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
