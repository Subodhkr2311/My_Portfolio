import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../data/portfolioData';
import {
  Github,
  CheckCircle2,
  Target,
  Compass,
  Cpu,
  Award,
  Smartphone,
  ArrowUpRight,
  Lock,
} from 'lucide-react';

export default function CaseStudiesSection() {
  const [activeTabByStudy, setActiveTabByStudy] = useState({
    focusace: 'architecture',
    'pantry-call': 'architecture',
    'civic-sih': 'architecture',
    'llm-eval-studio': 'architecture',
  });

  const handleTabChange = (studyId, tabKey) => {
    setActiveTabByStudy((prev) => ({
      ...prev,
      [studyId]: tabKey,
    }));
  };

  const tabs = [
    { key: 'marketGap', label: 'Market Opportunity', icon: Target },
    { key: 'strategy', label: 'Product Strategy', icon: Compass },
    { key: 'architecture', label: 'Systems Architecture', icon: Cpu },
    { key: 'proof', label: 'Delivery & Impact', icon: Award },
  ];

  return (
    <section id="work" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Case Studies &bull; Production Software
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            From initial user research and Figma wireframes to high-concurrency cloud systems and live store deployment.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => {
            const currentTab = activeTabByStudy[study.id] || 'architecture';

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-6 sm:p-10 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* Header row with Title and Live Links */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200/80 text-neutral-800">
                        {study.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-normal mt-1">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Actions: Google Play Store or GitHub (Strictly NO GitHub for private organization apps) */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    {study.playStoreUrl && (
                      <a
                        href={study.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-neutral-950 hover:bg-[#FFD91A] hover:text-black text-white text-xs font-medium tracking-tight shadow-xs transition-colors flex items-center gap-1.5"
                      >
                        <Smartphone size={13} />
                        <span>Google Play Store</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {study.githubUrl && !study.isPrivateRepo && (
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-medium tracking-tight transition-colors flex items-center gap-1.5"
                      >
                        <Github size={13} />
                        <span>GitHub Repository</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {study.isPrivateRepo && (
                      <span className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200/60 text-xs font-medium flex items-center gap-1.5 select-none">
                        <Lock size={11} className="text-neutral-400" />
                        <span>Private Organization Repo</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* 4-Tab Interactive Switcher */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-2 pb-4">
                    {tabs.map((tab) => {
                      const isActive = currentTab === tab.key;
                      const Icon = tab.icon;

                      return (
                        <button
                          key={tab.key}
                          onClick={() => handleTabChange(study.id, tab.key)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-neutral-900 text-white shadow-xs'
                              : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200/80'
                          }`}
                        >
                          <Icon size={13} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Detail Text */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 min-h-[90px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTab}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                          {study.columns[currentTab]}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Tech Stack and Outcomes */}
                <div className="mt-6 pt-5 border-t border-neutral-200/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {study.kpis.map((kpi, kIdx) => (
                      <span
                        key={kIdx}
                        className="inline-flex items-center gap-1 text-xs font-medium text-neutral-700 bg-neutral-100/90 px-3 py-1 rounded-full"
                      >
                        <CheckCircle2 size={13} className="text-[#F04400]" />
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
