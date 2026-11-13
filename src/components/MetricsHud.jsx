import React from 'react';
import { motion } from 'framer-motion';
import { KEY_METRICS } from '../data/portfolioData';
import { Award, Smartphone, Users, GraduationCap, Server, Briefcase } from 'lucide-react';

const METRIC_ICONS = {
  apps: Smartphone,
  engineers: Users,
  clients: Briefcase,
  hackathon: Award,
  functions: Server,
  gpa: GraduationCap,
};

export default function MetricsHud() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50/70 border-t border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Key Metrics &bull; Engineering Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              Measurable Outcomes
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Quantifiable results across cross-functional leadership, cloud infrastructure, and mobile store releases.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KEY_METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[metric.id] || Server;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
                      {metric.suffix}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 text-neutral-700 group-hover:bg-[#FFD91A] group-hover:text-black flex items-center justify-center transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-950 tracking-tight mb-2">
                    {metric.number}
                  </div>

                  <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
