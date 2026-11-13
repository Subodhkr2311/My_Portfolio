import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SDLC_STAGES } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function SdlcBlueprintSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 sm:py-28 bg-neutral-50/70 border-t border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-2">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              The 6-Stage Process
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            A structured framework transforming ambiguous problems into reliable, production-tested software.
          </p>
        </div>

        {/* 6 Process Step Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {SDLC_STAGES.map((stage, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-md'
                    : 'bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200/80 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-semibold ${
                      isSelected ? 'text-[#FFD91A]' : 'text-neutral-400'
                    }`}
                  >
                    Phase {stage.step}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#D0F030]" />}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                  {stage.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-xs"
          >
            <div className="max-w-4xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
                  Phase {SDLC_STAGES[activeStep].step} of 06
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  {SDLC_STAGES[activeStep].badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tracking-tight">
                {SDLC_STAGES[activeStep].title}
              </h3>

              <p className="text-base text-neutral-600 leading-relaxed font-normal">
                {SDLC_STAGES[activeStep].description}
              </p>

              <div className="pt-5 border-t border-neutral-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Deliverables &amp; Outcomes
                  </span>
                  <div className="text-sm font-medium text-neutral-900 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#F04400]" />
                    <span>{SDLC_STAGES[activeStep].deliverables}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-30 transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft size={14} />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  <button
                    disabled={activeStep === SDLC_STAGES.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(SDLC_STAGES.length - 1, prev + 1))}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-neutral-200 text-xs font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-30 transition-colors flex items-center gap-1"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
