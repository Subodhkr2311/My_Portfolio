import React from 'react';
import { Smartphone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-14 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-850">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-display font-bold text-xs">
                SK
              </span>
              <span className="text-lg font-display font-bold text-white tracking-tight">
                Subodh Kumar
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              Software Engineer &bull; Product &amp; Systems Architecture
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.webel.genmoksha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD91A] flex items-center gap-1 transition-colors"
            >
              <Smartphone size={13} />
              <span>Google Play Store</span>
            </a>
          </div>
        </div>

        <div className="pt-6 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} Subodh Kumar. All rights reserved.
          </p>
          <p className="text-neutral-500">
            Engineered with modern React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
