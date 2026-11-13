import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Compass,
  Cpu,
  ArrowRight,
  Smartphone,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { CORE_DISCIPLINES } from '../data/portfolioData';

export default function HeroSection() {
  const disciplineIcons = {
    engineering: Code2,
    tpm: Compass,
    architecture: Cpu,
  };

  return (
    <section id="overview" className="relative min-h-[88vh] pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-white">
      {/* Radiant Warm Sunshine Ambient Glow at the Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[480px] sm:h-[600px] pointer-events-none opacity-85">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFE566]/60 via-[#FFF2B2]/30 to-transparent blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl mb-4 sm:mb-5"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-500">
            Software Engineering &bull; Product Ownership &bull; Systems Architecture
          </span>
        </motion.div>

        {/* Display Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-extrabold tracking-[-0.04em] text-neutral-950 leading-[0.95]">
            Subodh Kumar
          </h1>
        </motion.div>

        {/* Lead Narrative & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20"
        >
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-2xl text-neutral-700 font-normal leading-relaxed max-w-3xl">
              An engineer who bridges customer discovery, systems architecture, and production code. I take products from initial problem validation to scalable cloud backends and live mobile store releases.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-neutral-950 text-white hover:bg-[#FFD91A] hover:text-black font-medium text-sm sm:text-base tracking-tight shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 group"
              >
                <span>View Case Studies</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 font-medium text-sm sm:text-base tracking-tight transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Quick Snapshot Metrics */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Live Store Apps</h4>
                <p className="text-xs text-neutral-500">FocusAce &amp; Pantry Call on Google Play</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFD91A] text-black flex items-center justify-center font-bold text-sm shrink-0">
                25
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Engineers Directed</h4>
                <p className="text-xs text-neutral-500">Frontier LLM post-training evaluation team</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Core Disciplines Grid */}
        <div className="pt-10 border-t border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
                How I Build
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950 tracking-tight">
                Engineering with Product &amp; Architectural Depth
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
              Combining hands-on programming with structured PRD planning and resilient cloud systems design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CORE_DISCIPLINES.map((disc, idx) => {
              const Icon = disciplineIcons[disc.id] || Code2;

              return (
                <motion.div
                  key={disc.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center text-neutral-900">
                        <Icon size={18} />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-700">
                        {disc.badge}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base sm:text-lg text-neutral-950 mb-1">
                      {disc.title}
                    </h4>
                    <span className="text-xs font-medium text-neutral-500 block mb-3">
                      {disc.tagline}
                    </span>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {disc.summary}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-neutral-200/60">
                    {disc.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 size={13} className="text-[#F04400] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
